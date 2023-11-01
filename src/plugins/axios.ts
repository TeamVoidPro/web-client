import axios from 'axios'
import { employeeStore } from "../store/employeeStore.ts";

const axiosClient = axios.create({
    baseURL: 'https://parkease.azurewebsites.net/api/',
    // baseURL: 'http://localhost:5219/api/',
})

axiosClient.interceptors.request.use( async (config) => {
    const store = await employeeStore();

    config.headers.Authorization = `Bearer ${store.user.token}`;
    return config;
})

export default axiosClient;