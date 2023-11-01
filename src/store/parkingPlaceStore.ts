import { defineStore } from 'pinia'
import axiosClient from "../plugins/axios";
import { AxiosResponse } from 'axios';


export const parkingPlaceStore = defineStore('parkingPlace', {
    state: () => ({
        user: {
            data: JSON.parse(localStorage.getItem('user') || '{}'),
            token: localStorage.getItem('token') || '',
        },
        parkingPlace:[]
    }),

    actions: {
        async getAllParkingPlaces() : Promise<AxiosResponse<any>> {
            return axiosClient.get("ParkingPlaces/get-all-parking-places")
                .then((res)=>{
                    // console.log(res.data)
                    return res.data
                })
                .catch((err)=>{
                    throw err
                })
            }
    }
})
