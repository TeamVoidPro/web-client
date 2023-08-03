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
        }
    },
    actions: {
        login() {

        },
        logout() {

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