import axiosInstance from "../api";

// This adds a car to the USER'S garage
export const addCar = async (payload) => {
    const response = await axiosInstance.post("/user/car", payload);
    return response.data;
};


export const getMasterCars = async () => {
    const response = await axiosInstance.get("/cars/");
    return response.data;
};

// This fetches the user's specific garage
export const getUserGarage = async () => {
    const response = await axiosInstance.get("/user/car"); 
    return response.data;
};

export const deleteCar=async()=>{
    const response=await axiosInstance.delete("/user/car/");
    return response.data;
};
