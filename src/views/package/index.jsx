import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, X, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { getPackages } from "../../utils/api/packageApi";
import useOrderStore from "../../store/orderStore";
import { getcoupons } from "../../utils/api/couponApi";
import toast, { Toaster } from "react-hot-toast";

const Package = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [coupons, setCoupons] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const [showCouponModal, setShowCouponModal] = useState(false);
  const [couponInput, setCouponInput] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [couponLoading, setCouponLoading] = useState(false);

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
        toast.error("Failed to load packages. Please refresh.");
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const fetchCoupons = async () => {
    try {
      setCouponLoading(true);
      const res = await getcoupons(currentPage, 5);
      if (res && res.data) {
        setCoupons(res.data.filter((c) => c.status === true));
        setTotalPages(res.totalPages || 1);
      } else if (Array.isArray(res)) {
        setCoupons(res.filter((c) => c.status === true));
      }
    } catch (err) {
      console.error("Failed to load coupons");
    } finally {
      setCouponLoading(false);
    }
  };

  useEffect(() => {
    if (showCouponModal) {
      fetchCoupons();
    }
  }, [showCouponModal, currentPage]);

  const formatCurrency = (num) => {
    return Number(num).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const packagePrice = selectedPackage ? Number(selectedPackage.price) : 0;
  const subtotal = packagePrice > 0 ? packagePrice - discount : 0;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleApplyCoupon = (coupon) => {
    if (!coupon) return;

    if (packagePrice < coupon.minAmt) {
      toast.error(
        `Minimum order must be TZS ${coupon.minAmt.toLocaleString()}`,
      );
      return;
    }

    const discountValue = Number(coupon.discount);
    setSelectedCoupon(coupon);
    setDiscount(discountValue);
    setCoupon(coupon, discountValue);
    setCouponInput(coupon.code);
    toast.success(`Coupon "${coupon.code}" applied!`);
  };

  const handleRemoveCoupon = () => {
    setSelectedCoupon(null);
    setDiscount(0);
    setCouponInput("");
    clearCoupon();
    toast.success("Coupon removed");
  };

  const applyFromInput = () => {
    const found = coupons.find(
      (c) => c.code.toLowerCase() === couponInput.trim().toLowerCase(),
    );
    if (!found) return toast.error("Invalid coupon code");
    handleApplyCoupon(found);
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    toast.success(`${pkg.name} added to cart!`, {
      icon: <ShoppingCart size={20} />,
    });
  };

  return (
    <>
      <Toaster position="top-center" />
      <section className="section-xl mb-pd">
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
                              onClick={() => handleSelectPackage(pkg)}
                              className={`pbmit-button cursor-pointer transition-all duration-300 ${
                                pkg.name === selectedPackage?.name
                                  ? "!bg-[#212121] !text-white"
                                  : ""
                              }`}
                            >
                              <span className="pbmit-button-text">
                                {pkg.name === selectedPackage?.name ? (
                                  <span className="flex items-center justify-center gap-2">
                                    <Check size={18} /> Already in Cart
                                  </span>
                                ) : (
                                  "Add To Cart"
                                )}
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
                      <div className="flex justify-end">
                        <button
                          onClick={() => {
                            setCurrentPage(1);
                            setShowCouponModal(true);
                          }}
                          className="text-sm underline text-[#b4aa12] mt-1 cursor-pointer hover:text-black transition-colors"
                        >
                          View Coupons
                        </button>
                      </div>

                      <button
                        onClick={applyFromInput}
                        className="mt-2 w-full bg-black text-white py-2 rounded-xl cursor-pointer hover:bg-gray-800 transition-colors"
                      >
                        Apply Coupon
                      </button>
                    </div>

                    {selectedCoupon && (
                      <div className="flex items-center justify-between bg-green-50 px-4 py-3 rounded-xl mt-4 border border-green-100">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 animate-pulse" />
                          <div className="flex flex-wrap items-baseline gap-1 min-w-0">
                            <span className="text-green-800 font-bold text-sm truncate">
                              {selectedCoupon.code}
                            </span>
                            <span className="text-green-600 text-xs whitespace-nowrap">
                              applied (-TZS {formatCurrency(discount)})
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={handleRemoveCoupon}
                          className="ml-4 text-green-600 hover:text-red-500 cursor-pointer flex-shrink-0 p-1 transition-colors"
                        >
                          <X size={18} strokeWidth={2.5} />
                        </button>
                      </div>
                    )}

                    <div className=" mt-4 pt-2 space-y-1">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>TZS {formatCurrency(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax (10%)</span>
                        <span>TZS {formatCurrency(tax)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mt-2">
                        <span>Total</span>
                        <span className="text-[#b4aa12]">
                          TZS {formatCurrency(total)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate("/checkout")}
                      className="w-full mt-4 bg-[#b4aa12] text-white py-2 rounded-xl cursor-pointer hover:bg-[#B6AC15] transition-all"
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
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800 sizeloginsub">
                Available Coupons
              </h3>
              <button
                onClick={() => setShowCouponModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-3 min-h-[300px] max-h-[400px] overflow-y-auto">
              {couponLoading ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <Loader2 className="animate-spin text-[#b4aa12] mb-2" />
                  <p className="text-gray-500 text-sm">Loading coupons...</p>
                </div>
              ) : coupons.length > 0 ? (
                <>
                  {coupons.map((c) => (
                    <div
                      key={c._id}
                      onClick={() => handleApplyCoupon(c)}
                      className="group border-2 border-dashed border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-[#b4aa12] hover:bg-yellow-50/30 transition-all cursor-pointer"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">
                          {c.name}
                        </span>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">
                          Code: <span className="font-mono font-bold text-gray-700">{c.code}</span>
                        </span>
                        <span className="text-[10px] text-gray-400 mt-1">
                          Min. Spend: TZS {c.minAmt.toLocaleString()}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApplyCoupon(c);
                          setShowCouponModal(false);
                        }}
                        className="bg-[#b4aa12] text-white px-5 py-2 rounded-lg font-medium text-sm active:scale-95 transition-all cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                  ))}
                  {totalPages > 1 && (
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-4">
                      <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className="p-2 border border-gray-200 rounded-lg disabled:opacity-30 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <span className="text-xs font-bold text-gray-500">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className="p-2 border border-gray-200 rounded-lg disabled:opacity-30 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-center text-gray-500 py-4">
                  No coupons available at the moment.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const Loader2 = ({ className }) => (
  <svg
    className={`animate-spin ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default Package;