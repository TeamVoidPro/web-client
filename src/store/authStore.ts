import { defineStore } from 'pinia'
import axiosClient from "../plugins/axios";
import {useRouter} from "vue-router";

export const authStore = defineStore('auth', {
    state: () => ({
        tokens : {
            token: localStorage.getItem('token'),
            refreshToken: localStorage.getItem('refreshToken')
        }
    }),
    actions: {
        regenerateToken() {
            axiosClient.post('auth/employee-refresh-token',this.tokens).
                then(({data}) => {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('refreshToken', data.refreshToken)

                    return data
            }).catch(() => {
                const router = useRouter()
                router.push({name: 'EmployeeLogin'}).then(() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('refreshToken')
                })
            })
        }
    }
})