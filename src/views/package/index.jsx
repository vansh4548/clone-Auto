/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { getPackages } from "../../utils/api/packageApi";
import "swiper/css";
import "swiper/css/navigation";
import useOrderStore from "../../store/orderStore";
import { getcoupons } from "../../utils/api/couponApi";

const Package = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [coupons, setCoupons] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const [showCouponModal, setShowCouponModal] = useState(false);
  const [couponInput, setCouponInput] = useState("");

  const {
    selectedPackage,
    setSelectedPackage,
    primaryCar,
    setCoupon,
    clearCoupon,
  } = useOrderStore();

  const taxRate = 0.1;

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const data = await getPackages();
        setPackages(data);
      } catch (error) {
        console.error("Failed to load plans");
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const data = await getcoupons();
        setCoupons(data.filter((c) => c.status === true));
      } catch (err) {
        console.error("Failed to load coupons");
      }
    };
    fetchCoupons();
  }, []);

  const packagePrice = selectedPackage ? Number(selectedPackage.price) : 0;
  const subtotal = packagePrice > 0 ? packagePrice - discount : 0;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleApplyCoupon = (coupon) => {
    if (!coupon) return;

    if (packagePrice < coupon.minAmt) {
      alert(`Minimum order must be TZS ${coupon.minAmt}`);
      return;
    }

    const discountValue = Number(coupon.discount);
    setSelectedCoupon(coupon);
    setDiscount(discountValue);
    setCoupon(coupon, discountValue);
  };

  const applyFromInput = () => {
    const found = coupons.find(
      (c) => c.code.toLowerCase() === couponInput.trim().toLowerCase(),
    );
    if (!found) return alert("Invalid coupon code");
    handleApplyCoupon(found);
  };

  return (
    <>
      <section className="section-xl">
        <div className="container mx-auto px-4">
          <div className="flex gap-15 mobilefix">
            <div className="w-full xl:w-3/5">
              <div className="pbminfotech-ele-ptable-style-3">
                <div className="pbmit-ptable-cols flex flex-wrap">
                  {loading ? (
                    <div className="w-full text-center py-10 font-bold uppercase tracking-widest">
                      Loading Plans...
                    </div>
                  ) : (
                    packages.map((pkg) => (
                      <div
                        key={pkg._id || pkg.name}
                        className={`pbmit-ptable-col w-full md:w-1/2 lg:w-1/3 ${
                          pkg.featured ? "pbmit-pricing-table-featured-col" : ""
                        }`}
                      >
                        <div className="pbmit-pricing-table-box">
                          {pkg.featured && (
                            <div className="pbmit-feature-wrap">
                              <div className="pbmit-ptablebox-featured-w" />
                            </div>
                          )}
                          <div className="pbmit-pricing-table-inner">
                            <div className="pbmit-head-wrap">
                              <h3 className="pbminfotech-ptable-heading">
                                {pkg.name}
                              </h3>
                              <div className="pbmit-price-wrapper">
                                <div className="pbmit-ptable-price-w">
                                  <div className="pbminfotech-ptable-symbol">
                                    TZS
                                  </div>
                                  <div className="pbminfotech-ptable-price">
                                    {pkg.price.toLocaleString()}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="pbmit-ptable-lines">
                                {pkg.features &&
                                  pkg.features.map((feature, idx) => (
                                    <div
                                      key={idx}
                                      className="pbmit-ptable-line"
                                    >
                                      <Check
                                        className="ti-check inline mr-2"
                                        size={22}
                                        strokeWidth={1.5}
                                      />
                                      {feature}
                                    </div>
                                  ))}
                              </div>
                              <div
                                className={`pbmit-ptable-recommendation mt-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                                  pkg.featured
                                    ? "bg-[#212121] text-white"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {pkg.note || "Recommended"}
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-price-btn">
                            <a
                              onClick={() => setSelectedPackage(pkg)}
                              className="pbmit-button cursor-pointer"
                            >
                              <span className="pbmit-button-text">
                                {pkg.name === selectedPackage?.name
                                  ? "Already in Cart"
                                  : "Add To Cart"}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-2/5">
              <div className="sticky top-35 bg-gray-100 rounded-2xl p-10">
                {primaryCar && (
                  <div className="mb-4">
                    {primaryCar.logo && (
                      <img
                        src={primaryCar.logo}
                        alt={`${primaryCar.brand} ${primaryCar.model}`}
                        className="max-w-[60px] h-auto rounded"
                      />
                    )}
                    <h4 className="mt-2 font-bold text-md">
                      {primaryCar.brand} {primaryCar.model}{" "}
                      <span className="text-[#9b9b9b]">
                        ({primaryCar.gasType})
                      </span>
                    </h4>
                  </div>
                )}

                {selectedPackage && (
                  <div className="mt-4 p-10 bg-white rounded-xl">
                    <h4 className="font-bold mb-3">{selectedPackage.name}</h4>

                    <div className="mb-2">
                      <input
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="Enter coupon code"
                        className="border border-gray-300 focus:border-yellow-500 focus:ring-0 px-3 py-2 rounded-xl w-full"
                      />

                      <button
                        onClick={() => setShowCouponModal(true)}
                        className="text-sm underline text-[#b4aa12] mt-1"
                      >
                        View Coupons
                      </button>

                      <button
                        onClick={applyFromInput}
                        className="mt-2 w-full bg-black text-white py-2 rounded-xl"
                      >
                        Apply Coupon
                      </button>
                    </div>

                    {selectedCoupon && (
                      <p className="text-green-600">
                        {selectedCoupon.code} applied -TZS {discount}
                      </p>
                    )}

                    <div className="border-t mt-4 pt-2">
                      <p>Subtotal: TZS {subtotal.toLocaleString()}</p>
                      <p>Tax (10%): TZS {tax.toLocaleString()}</p>
                      <p className="font-bold">
                        Total: TZS {total.toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => navigate("/checkout")}
                      className="w-full mt-4 bg-[#b4aa12] text-white py-2 rounded-xl"
                    >
                      Continue to Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    {showCouponModal && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    {/* Modal Container */}
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800 sizeloginsub">Available Coupons</h3>
        <button 
          onClick={() => setShowCouponModal(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Coupon List */}
      <div className="p-6 space-y-3">
        {coupons.length > 0 ? (
          coupons.map((c) => (
            <div
              key={c._id}
              className="group border-2 border-dashed border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-[#b4aa12] hover:bg-yellow-50/30 transition-all"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">{c.name}</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">
                  Code: <span className="font-mono font-bold text-gray-700">{c.code}</span>
                </span>
                <span className="text-[10px] text-gray-400 mt-1">
                  Min. Spend: ${c.minAmt}
                </span>
              </div>
              
              <button
                onClick={() => {
                  setCouponInput(c.code);
                  setShowCouponModal(false);
                }}
                className="bg-[#b4aa12] hover:bg-[#9a9110] text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm active:scale-95"
              >
                Apply
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">No coupons available at the moment.</p>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <button
          onClick={() => setShowCouponModal(false)}
          className="w-full py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Package;
