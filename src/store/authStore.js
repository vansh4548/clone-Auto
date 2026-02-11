import { create } from "zustand";
import {  checkSession, logoutUser } from "../utils/api/userApi"; //
 
const useAuthStore = create((set) => ({
  session: [],
  user: [],
  loading: false,
  error: null,

  // userProfile: async (data) => {
  //   set({ error: null });
  //   try {
  //     const res = await userProfile(data);
  //     set({ user: res?.data?.user });
  //   } catch (error) {
  //     set({ error: error.message });
  //   }
  // },

  checkSession: async () => {
    set({ loading: true, error: null });
    try {
      const res = await checkSession();
      
      set({ session: res, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

 logout: async () => {
    try {
      await logoutUser(); 
    } catch (error) {
      console.error("Faild", error);
    } finally {
      set({ 
        session: { authenticated: false, user: null },
        loading: false 
      });
    }
  },

  

}));

export default useAuthStore;
