import {defineStore} from "pinia";
import axiosClient from "../plugins/axios.ts"
import {AxiosResponse} from "axios";


export const reservationStore = defineStore('reservations', {
    state: () => ({
        user: {
            data: JSON.parse(localStorage.getItem('user') || '{}'),
            token: localStorage.getItem('token') || '',
        }
    }),
    actions: {
        async makeReservation(reservation : any) : Promise<AxiosResponse<any>> {

            return axiosClient.post('Reservations/make-onsite-reservation', reservation)
                .then((res : any) => {
                    return res.data;
                }).catch((err : any) => {
                    throw err;
                })
        },
        async calculateReservationCost(id: string, startingTime : Number, endingTime : Number) : Promise<AxiosResponse<any>> {

            const startingTimeStr = startingTime.toString();
            const endingTimeStr = endingTime.toString();

            return axiosClient.post(`Reservations/calculate-reservation-cost/${id}/${startingTimeStr}/${endingTimeStr}`)
                .then((res : any) => {
                    return res.data
                }).catch((err : any) => {
                    throw err
                })

        },
        async getVehicleTypes() : Promise<AxiosResponse<any>> {

            const parkingPlaceId = this.user.data.parkingPlaceId;

            return axiosClient.get(`Slot/get-distinct-slot-categories-by-parking-place/${parkingPlaceId}`)
                .then((res : any) => {
                    console.log(res.data);
                    return res.data;
                }).catch((err : any) => {
                    throw err;
                })
        },
        async getUpcomingReservations(date : string, from : string, to : string) : Promise<AxiosResponse<any>> {
    
                return axiosClient.get(`Reservations/get-upcoming-reservations/${date}/${from}/${to}`)
                    .then((res : any) => {
                        return res.data;
                    }).catch((err : any) => {
                        throw err;
                    })
            },
        async getCancelledReservations(date : string, from : string, to : string) : Promise<AxiosResponse<any>> {
    
                return axiosClient.get(`Reservations/get-cancelled-reservations/${date}/${from}/${to}`)
                    .then((res : any) => {
                        return res.data;
                    }).catch((err : any) => {
                        throw err;
                    })
            },
        async getCompletedReservations(date : string, from : string, to : string) : Promise<AxiosResponse<any>> {
                return axiosClient.get(`Reservations/get-completed-reservations/${date}/${from}/${to}`)
                    .then((res : any) => {
                        return res.data;
                    }).catch((err : any) => {
                        throw err;
                    })
            }

    }
})