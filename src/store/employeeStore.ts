import { defineStore } from 'pinia'
import {computed} from "vue";
import axiosClient from "../plugins/axios.ts";
import {AxiosResponse} from "axios";
import {authService} from "../services/authService.ts";
import {authStore} from "../store/authStore.ts";

export const employeeStore = defineStore('employee', {
    state: () => ({
        user: {
            data: JSON.parse(localStorage.getItem('user') || '{}'),
            token: localStorage.getItem('token') || '',
            refreshToken: localStorage.getItem('refreshToken') || ''
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
                    console.log(data.tokens)
                    this.user.data = data.employee;
                    this.user.token = data.tokens.token;
                    this.user.refreshToken = data.tokens.refreshToken

                    localStorage.setItem('user', JSON.stringify(data.employee));
                    localStorage.setItem('token', this.user.token);
                    localStorage.setItem('refreshToken', this.user.refreshToken);

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
                    localStorage.removeItem('refreshToken');
                    this.user.data = {};
                    this.user.token = '';
                    this.user.refreshToken = '';
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
        },
        getEmployees() : any {
            return authService('employee/get-employees',this.user.token,{})
                .then((res: any) => {
                    return res
                })
        },
        getEmployee() {
            return authService('employee/get-employees/EMP_1975_6231', this.user.token,{})
                .then((res : any)  => {
                    console.log(res)
                    return res
                })
        },
        sendVerificationEmail(data: object){
            return axiosClient.post('email/verify-account-email', data)
                .then(({data}) => {
                    return data
                }).catch((error) => {
                    if(error.response && error.response.status === 401){
                        const auth = authStore()
                        const result = auth.regenerateToken()

                        if(result != null){
                            return axiosClient.post('email/verify-account-email', data)
                                .then(({data}) => {
                                    return data
                                }).catch((error) => {
                                    throw error
                                })
                        }
                    }
                })
        },
        verifyAccount(data: object){
            return axiosClient.post('auth/verify-account', data)
                .then(({data}) => {
                    return data
                }).catch((error) => {
                    throw error
                })
        },
        createPassword(data: object){
            return axiosClient.post('auth/create-password', data)
                .then(({data}) => {
                    return data
                }).catch((error) => {
                    throw error
                })
        }
    }
})