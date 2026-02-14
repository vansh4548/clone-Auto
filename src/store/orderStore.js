import { create } from "zustand";

const useOrderStore = create((set) => ({
  selectedPackage: null,
  primaryCar: null,

  appliedCoupon: null,
  couponDiscount: 0,

  setSelectedPackage: (pkg) => set({ selectedPackage: pkg }),
  setPrimaryCar: (car) => set({ primaryCar: car }),

  setCoupon: (coupon, discount) =>
    set({ appliedCoupon: coupon, couponDiscount: discount }),

  clearCoupon: () => set({ appliedCoupon: null, couponDiscount: 0 }),

  clearOrder: () =>
    set({
      selectedPackage: null,
      primaryCar: null,
    }),
}));

export default useOrderStore;
