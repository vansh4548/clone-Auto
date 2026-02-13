import axiosInstance from "../api";


export const getcoupons = async () => {
    try {
        const response = await axiosInstance.get("/coupons/");


        return response.data;
    } catch (error) {
        console.error("Get orders error:", error);
        throw error;
    }
}