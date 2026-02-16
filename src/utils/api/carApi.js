import axiosInstance from "../api";

export const addCar = async (payload) => {
  // try {
    const response = await axiosInstance.post("/user/car", payload);
    return response;
  // } catch (err) {
  //   throw err;
  // }
};

export const getMasterCars = async () => {
  const response = await axiosInstance.get("/cars/");
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
