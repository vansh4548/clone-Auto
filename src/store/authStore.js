import { create } from "zustand";
import { checkSession, logoutUser } from "../utils/api/userApi"; 

const useAuthStore = create((set) => ({
  session: null, 
  user: null,
  authenticated: false,
  loading: false,
  error: null,

  checkSession: async () => {
    set({ loading: true, error: null });
    try {
      const res = await checkSession();
      set({ 
        session: res, 
        user: res?.user || null,
        authenticated: !!res?.authenticated,
        loading: false 
      });
    } catch (error) {
      set({ 
        error: error.message, 
        loading: false, 
        authenticated: false,
        session: null 
      });
    }
  },

  logout: async () => {
    try {
      await logoutUser(); 
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      set({ 
        session: null,
        user: null,
        authenticated: false,
        loading: false 
      });
    }
  },
}));

export default useAuthStore;