import { defineStore } from 'pinia'
import axiosClient from "../plugins/axios";
import { AxiosResponse } from 'axios';


export const parkingPlaceStore = defineStore('parkingPlace', {
    state: () => ({
        user: {
            data: JSON.parse(localStorage.getItem('user') || '{}'),
            token: localStorage.getItem('token') || '',
        },
        parkingPlace:[],
        currentParkingPlaceId: "",
        reviewData: [],
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
            },

        getParkingPlaces(){
            return axiosClient.get(`parkingOwner/get-parking-places/OWN_4650_5722`)
                .then((res:any) => {
                    // console.log(res)
                    return res.data.parkingPlaces;
                }).catch((e:any) => {
                    throw e;
                })
        },
        getReviewData(){
            return axiosClient.get(`parkingOwner/get-parking-ratings/${this.currentParkingPlaceId}`)
                .then((res:any) => {
                    this.reviewData = res.data;
                    return res.data;
                }).catch((e:any) => {
                    throw e;
                })

            // console.log(this.currentParkingPlaceId)
        },
        changeCurrentParkingPlaceId(id:string){
            this.currentParkingPlaceId = id;
        }
    }
})
