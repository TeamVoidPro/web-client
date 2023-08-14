import axios from 'axios'
import { employeeStore } from "../store/employeeStore.ts";

const axiosClient = axios.create({
    baseURL: 'https://localhost:7211/api/',
})

axiosClient.interceptors.request.use( async (config) => {
    const store = await employeeStore();

    config.headers.Authorization = `Bearer ${store.user.token}`;
    return config;
})

export default axiosClient;