import axiosInstance from "../api";

export const addCar = async (payload) => {
    const response = await axiosInstance.post("/user/car", payload);
    return response;
};

export const getMasterCars = async (page = 1, search = "") => {
  const response = await axiosInstance.get(`/cars/?page=${page}&search=${search}`);
  return response.data;
};

export const getUserGarage = async () => {
  const response = await axiosInstance.get("/user/car");
  return response.data;
};

export const deleteUserCar = async (carId) => {
  const response = await axiosInstance.delete(`/user/car/${carId}`);
  return response.data;
};