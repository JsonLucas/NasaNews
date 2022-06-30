import { axiosInstance, apiKey } from "..";

export const getTodaysAstronomyPicture = async () => {
    const request = await axiosInstance.get(`/planetary/apod?api_key=${apiKey}`);
    return request;
}

export const getNearEarthObject = async () => {
    const request = await axiosInstance.get(`/rest/v1/neo/browse?api_key=${apiKey}`);
    return request;
}
