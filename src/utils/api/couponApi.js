import axiosInstance from "../api";

export const getcoupons = async (page = 1, limit = 10) => {
  try {
    const response = await axiosInstance.get(`/coupon/`, {
      params: { page, limit }
    });
    return response.data;
  } catch (error) {
    console.error("Get coupons error:", error);
    throw error;
  }
};