import axiosClient from "./axiosClient";

export const getUserProfile = async () => {
    const res = await axiosClient.get("/auth/profile");
    return res.data;
};