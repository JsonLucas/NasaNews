import axios from 'axios';

export const apiKey = '2Xp0DM9VzQZTth1kQkDhFmp4FNQeEEJEfOdfaTeb';
export const axiosInstance = axios.create({baseURL: `https://api.nasa.gov/`});