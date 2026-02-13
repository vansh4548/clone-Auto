// src/store/orderStore.js
import { create } from "zustand";

const useOrderStore = create((set) => ({
  primaryCar: null,
  selectedPackage: null,

  setPrimaryCar: (car) => set({ primaryCar: car }),
  setSelectedPackage: (pkg) => set({ selectedPackage: pkg }),

  clearOrder: () =>
    set({
      primaryCar: null,
      selectedPackage: null,
    }),
}));

export default useOrderStore;
