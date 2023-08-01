import axios from 'axios'
import { employeeStore } from "../store/employeeStore.ts";

const instance = axios.create({
    baseURL: 'https://localhost:44397/api/',
})

instance.interceptors.request.use( async (config) => {
    const store = await employeeStore();

    config.headers.Authorization = `Bearer ${store.user.token}`;
    return config;
})