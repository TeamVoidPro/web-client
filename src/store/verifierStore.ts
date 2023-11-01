import { defineStore } from "pinia";
import axiosClient from "../plugins/axios";
import { AxiosResponse } from "axios";

export const basicOwnerInfo = defineStore('basicInfo', {
    state: () => ({
        user: [],
        
    }),
    actions: {
        async getOwners() : Promise<AxiosResponse<any>>{
            return axiosClient.get('Verifier/get-all')
            .then((res : any) => {
                console.log(res.data)
                return res.data;
            }).catch((err : any) => {
                throw err;
            })
        },

        async getIndividualOwner(id) : Promise<AxiosResponse<any>>{
            const ownerId = id;
            return axiosClient.get('Verifier/id?id='+ownerId)
            .then((res : any) => {
                console.log(res.data)
                return res.data;
            }).catch((err : any) => {
                throw err;
            })
        },

        async addSchedule(formData) : Promise<AxiosResponse<any>>{
            console.log(formData)
            return axiosClient.post('Verifier/verification-schedule', formData)
            .then((res : any) => {
                return res.data;
            }).catch((err : any) => {
                throw err;
            })
        },

        async getSchedule() : Promise<AxiosResponse<any>>{
            return axiosClient.get('Verifier/pending-onsite-verifications')
            .then((res : any) => {
                console.log(res.data)
                return res.data;
            }).catch((err : any) => {
                throw err;
            })
        },

    }
});