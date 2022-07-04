import { axiosInstance, apiKey } from "..";
import dayjs from 'dayjs'

const currentDate = dayjs(Date.now()).format('YYYY-MM-DD');

export const getTodaysAstronomyPicture = async () => {
    const request = await axiosInstance.get(`/planetary/apod?api_key=${apiKey}`);
    return request;
}

export const getNearEarthObject = async () => {
    const request = await axiosInstance.get(`/neo/rest/v1/feed?start_date=${currentDate}&api_key=${apiKey}`);
    return request;
}
