import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Calendar, Clock, CreditCard } from "lucide-react";
import * as orderApi from "../../utils/api/orderApi";
import useOrderStore from "../../store/orderStore";
import useAuthStore from "../../store/authStore";

const Checkout = () => {
  const navigate = useNavigate();
  const { session } = useAuthStore();
  const { selectedPackage, primaryCar, setSelectedPackage, clearOrder } = useOrderStore();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const taxRate = 0.1;
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

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

  const handleApplyCoupon = () => {
    if (coupon.toUpperCase() === "SAVE20") {
      setDiscount(2);
    } else {
      setDiscount(0);
      alert("Invalid Coupon!");
    }
  };
  useEffect(() => {
    if (!selectedPackage || !primaryCar) {
      navigate("/orders");
    }
  }, [selectedPackage, primaryCar]);
  console.log(primaryCar);
  
  const handleCheckout = async () => {
    if (!selectedDate || !selectedSlot) {
      alert("Please select a date and time slot first.");
      return;
    }
    
    const orderData = {
    cars: {
      car: primaryCar.car._id, 
      model: primaryCar.model,
      gasType: primaryCar.gasType,
    },
    plan: selectedPackage._id,
    totalAmount: total,
    serviceDate: selectedDate,
    serviceTimeSlot: selectedSlot,
  };

    try {
      await orderApi.createOrder(orderData);
      clearOrder();
      navigate("/orders");
    } catch (err) {
      console.error(err);
      alert("Booking failed");
    }
  };

  const packagePrice = selectedPackage ? Number(selectedPackage.price) : 0;
  const subtotal = Math.max(packagePrice - discount, 0);
  const tax = subtotal * taxRate;
  const total = Math.round(subtotal + tax);
  return (
    <section className="section-xl bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-10 checkout">
          <div className="w-full xl:w-3/5 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-2xl mb-6 flex items-center gap-2 sizec">
                <span className="bg-[#b4aa12] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm ">
                  1
                </span>
                Select Date & Time Slot
              </h3>

              <div className="flex flex-wrap gap-3 mb-8">
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
                      className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${isSelected ? "bg-[#b4aa12] text-white border-[#b4aa12] shadow-md scale-105" : "bg-white text-gray-600 border-gray-200 hover:border-[#b4aa12]"}`}
                    >
                      <span className="block text-xs uppercase opacity-70">
                        {date.toDateString().slice(0, 3)}
                      </span>
                      <span className="text-lg">{date.getDate()}</span>
                    </button>
                  );
                })}
              </div>

              {selectedDate && (
                <div className="space-y-6">
                  {Object.entries(timeSlots).map(([category, slots]) => (
                    <div key={category}>
                      <h6 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                        {category}
                      </h6>
                      <div className="flex flex-wrap gap-3">
                        {slots.map((slot, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedSlot(slot)}
                            className={`px-4 py-2 rounded-lg border text-sm transition-all ${selectedSlot === slot ? "bg-[#b4aa12] text-white border-[#b4aa12]" : "bg-gray-50 text-gray-700 border-transparent hover:bg-gray-100"}`}
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

          <div className="w-full xl:w-2/5">
            <div className="sticky top-32 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Booking Summary</h3>

              {primaryCar && (
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl mb-6">
                  {primaryCar.logo && (
                    <img
                      src={primaryCar.logo}
                      alt="Logo"
                      className="w-12 h-12 object-contain bg-white p-1 rounded-lg"
                    />
                  )}
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-tight">
                      Your Vehicle
                    </p>
                    <h4 className="font-bold text-lg leading-tight">
                      {primaryCar.car.brandName} {primaryCar.model}
                    </h4>
                  </div>
                </div>
              )}

              {selectedPackage ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">
                      {selectedPackage.name}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedPackage(null);
                        setDiscount(0);
                        setCoupon("");
                      }}
                      className="text-gray-400 hover:text-red-500 text-xs underline"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo Code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="border border-gray-200 px-4 py-2 rounded-xl w-full text-sm outline-none focus:border-[#b4aa12]"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="bg-black text-white px-4 py-2 rounded-xl text-sm font-bold"
                    >
                      Apply
                    </button>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Package Price</span>
                      <span>TZS {packagePrice.toLocaleString()}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600 text-sm font-medium">
                        <span>Discount (SAVE20)</span>
                        <span>- TZS {discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Service Tax (10%)</span>
                      <span>TZS {tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xl font-black pt-2 border-t border-gray-100">
                      <span>Total</span>
                      <span className="text-[#b4aa12]">
                        TZS {total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={!selectedDate || !selectedSlot}
                    className={`w-full mt-4 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all ${!selectedDate || !selectedSlot ? "bg-gray-300 cursor-not-allowed" : "bg-[#b4aa12] hover:bg-black shadow-lg"}`}
                  >
                    <CreditCard size={18} /> Confirm & Checkout
                  </button>
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-400">Your cart is empty</p>
                  <a
                    href="/our-offerings"
                    className="text-[#b4aa12] font-bold text-sm"
                  >
                    Browse Services
                  </a>
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
