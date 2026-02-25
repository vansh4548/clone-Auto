import axiosInstance from "../api";

export const registerSubmisson = async (data) => {
  try {
    const response = await axiosInstance.post("/submission/", data);
    return response;
  } catch (error) {
    throw error;
  }
};