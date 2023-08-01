import { defineStore } from 'pinia'
import {computed} from "vue";

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
        register() {

        }
    }
})