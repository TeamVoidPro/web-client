import { createApp } from 'vue'
import {createPinia} from 'pinia'
import axios from "axios";
import './style.css'
import router from './router/index.ts'
import naive from 'naive-ui'


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.withCredentials = true;
// @ts-ignore
import App from './App.vue'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        Accept: 'application/json',
    }
})

const pinia = createPinia()
const Application = createApp(App)
Application.config.globalProperties.$axios = instance

Application.use(pinia)
Application.use(router)
Application.use(naive)

Application.mount('#app')
