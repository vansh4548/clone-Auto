import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, CreditCard, X, Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import * as orderApi from "../../utils/api/orderApi";
import useOrderStore from "../../store/orderStore";
import useAuthStore from "../../store/authStore";

const Checkout = () => {
  const navigate = useNavigate();
  const { session } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    selectedPackage,
    primaryCar,
    appliedCoupon,
    couponDiscount,
    clearCoupon,
    setSelectedPackage,
    clearOrder,
  } = useOrderStore();

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const taxRate = 0.1;

  const formatCurrency = (num) => {
    return Number(num).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const next8Days = Array.from({ length: 8 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const timeSlots = {
    Morning: ["08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00"],
    Afternoon: ["12:00 - 13:00", "13:00 - 14:00", "14:00 - 15:00"],
    Evening: ["16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00"],
  };

  useEffect(() => {
    if (!selectedPackage || !primaryCar) {
      navigate("/orders");
    }
  }, [selectedPackage, primaryCar, navigate]);

  const handleCheckout = async () => {
    if (!selectedDate || !selectedSlot) {
      toast.error("Please select a date and time slot");
      return;
    }

    const orderData = {
      user: session?.user?._id || null,
      cars: {
        car: primaryCar.car._id,
        model: primaryCar.model,
        gasType: primaryCar.gasType,
      },
      plan: selectedPackage._id,
      totalAmount: total,
      serviceDate: selectedDate,
      serviceTimeSlot: selectedSlot,
      couponCode: appliedCoupon?.code || null,
      couponDiscount: couponDiscount || 0,
    };

    setIsSubmitting(true);

    try {
      await orderApi.createOrder(orderData);
      toast.success("Booking confirmed successfully!");
      clearOrder();
      clearCoupon();

      setTimeout(() => {
        navigate("/orders");
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Booking failed. Please try again.",
        { id: loadingToast },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const packagePrice = selectedPackage ? Number(selectedPackage.price) : 0;
  const subtotal = Math.max(packagePrice - couponDiscount, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <section className="section-xl bg-gray-50 min-h-screen py-12 mb-pd ">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-10 checkout">
          <div className="w-full xl:w-3/5 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-2xl mb-6 flex items-center gap-2 sizeloginsub">
                Select Date & Time Slot
              </h3>

              <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-3 mb-8">
                {next8Days.map((date, idx) => {
                  const isSelected =
                    selectedDate &&
                    selectedDate.toDateString() === date.toDateString();

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedSlot(null);
                      }}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#b4aa12] text-white border-[#b4aa12] shadow-md scale-105"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#b4aa12]"
                      }`}
                    >
                      <span className="block text-[10px] uppercase opacity-70 mb-1">
                        {date.toDateString().slice(0, 3)}
                      </span>
                      <span className="text-base sm:text-lg">
                        {date.getDate()}
                      </span>
                    </button>
                  );
                })}
              </div>
              {selectedDate && (
                <div className="space-y-6">
                  {Object.entries(timeSlots).map(([category, slots]) => (
                    <div key={category}>
                      <h6 className="text-sm font-bold text-gray-400 tracking-wider mb-3">
                        {category}
                      </h6>
                      <div className="flex flex-wrap gap-3">
                        {slots.map((slot, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedSlot(slot)}
                            className={`px-4 py-2 rounded-lg border text-sm transition-all cursor-pointer ${
                              selectedSlot === slot
                                ? "bg-[#b4aa12] text-white border-[#b4aa12]"
                                : "bg-gray-50 text-gray-700 border-transparent hover:bg-gray-100"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-full xl:w-2/5 mt-6 sm:mt-8 xl:mt-0">
            <div className="sticky top-32 bg-gray-100 rounded-2xl p-10">
              <h3 className="text-xl font-bold mb-6 sizeloginsub">
                Booking Summary
              </h3>

              {primaryCar && (
                <div className="mb-6">
                  {primaryCar.logo && (
                    <img
                      src={primaryCar.logo}
                      alt={primaryCar.model}
                      className="max-w-[60px] h-auto rounded mb-2 "
                    />
                  )}
                  <h4 className="font-bold text-md sizeloginsub">
                    {primaryCar.car.brandName} {primaryCar.model}{" "}
                    <span className="text-[#9b9b9b]">
                      ({primaryCar.gasType})
                    </span>
                  </h4>
                </div>
              )}

              {selectedPackage && (
                <div className="p-8 bg-white rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">
                      {selectedPackage.name}
                    </h4>
                    <button
                      onClick={() => {
                        setSelectedPackage(null);
                        clearCoupon();
                        navigate("/orders");
                      }}
                      className="text-xs underline text-gray-400 cursor-pointer hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="flex items-center justify-between bg-green-50 px-4 py-3 rounded-xl mb-4 border border-green-100">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 animate-pulse" />
                        <div className="flex flex-wrap items-baseline gap-1 min-w-0">
                          <span className="text-green-800 font-bold text-sm truncate">
                            {appliedCoupon?.code}
                          </span>
                          <span className="text-green-600 text-xs whitespace-nowrap">
                            applied (-TZS {formatCurrency(couponDiscount)})
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          clearCoupon();
                          toast.success("Coupon removed");
                        }}
                        className="ml-4 text-green-600 hover:text-red-500 cursor-pointer flex-shrink-0 p-1 transition-colors"
                      >
                        <X size={18} strokeWidth={2.5} />
                      </button>
                    </div>
                  )}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Package Price</span>
                      <span>TZS {formatCurrency(packagePrice)}</span>
                    </div>

                    {couponDiscount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Discount</span>
                        <span>-TZS {formatCurrency(couponDiscount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Tax (10%)</span>
                      <span>TZS {formatCurrency(tax)}</span>
                    </div>

                    <div className="flex justify-between font-black text-xl border-t pt-4 mt-2">
                      <span>Total</span>
                      <span className="text-[#b4aa12]">
                        TZS {formatCurrency(total)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={!selectedDate || !selectedSlot || isSubmitting}
                    className={`w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold ${
                      !selectedDate || !selectedSlot || isSubmitting
                        ? "bg-gray-300 cursor-not-allowed text-white"
                        : "bg-[#b4aa12] text-white cursor-pointer hover:bg-[#B6AC15] shadow-lg active:scale-95"
                    }`}
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      <CreditCard size={18} />
                    )}
                    {isSubmitting ? "Processing..." : "Confirm & Checkout"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
