import { defineStore } from 'pinia'
import {computed} from "vue";
import axiosClient from "../plugins/axios.ts";
import {AxiosResponse} from "axios";

export const employeeStore = defineStore('employee', {
    state: () => ({
        user: {
            data: JSON.parse(localStorage.getItem('user') || '{}'),
            token: localStorage.getItem('token') || '',
        }
    }),
    getters: {
        getUser() : any {
            return computed(() => this.user.data);
        },
        getToken() : any {
            return computed(() => this.user.token);
        },
        getEmployeeId() : any {
            return computed(() => this.user.data.employeeId);
        }
    },
    actions: {
        login(user : any) : Promise<AxiosResponse<any>> {
            return axiosClient.post('auth/employee-login', user)
                .then(({data}) => {
                    this.user.data = data.user;
                    this.user.token = data.user.token;

                    delete data.user.token;
                    delete data.user.password;
                    delete data.user.email;

                    localStorage.setItem('user', JSON.stringify(data.user));
                    localStorage.setItem('token', this.user.token);

                    return data;
                }).catch((error) => {
                    throw error;
                })
        },
        logout(user: any) : Promise<AxiosResponse<any>> {
            return axiosClient.post('auth/employee-logout',user)
                .then(({data}) => {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    this.user.data = {};
                    this.user.token = '';
                    return data;
                }).catch((error) => {
                    throw error;
                })
        },
        register(user : any) : Promise<AxiosResponse<any>> {
            return axiosClient.post('auth/employee-register', user)
                .then(({data}) => {
                    return data;
                }).catch((error) => {
                    throw error;
                })
        }
    }
})