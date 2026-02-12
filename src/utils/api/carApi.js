import axiosInstance from "../api";

export const addCar = async (payload) => {
    const response = await axiosInstance.post("/user/car", payload);
    return response.data;
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
