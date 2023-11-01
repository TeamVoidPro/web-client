import {defineStore} from "pinia";
import {authService} from "../services/authService";
import axiosClient from "../plugins/axios.ts";
import {AxiosResponse} from "axios";


export const slotStore = defineStore('slots', {
    state: () => ({
        user: {
            data: JSON.parse(localStorage.getItem('user') || '{}'),
            token: localStorage.getItem('token') || '',
        },
        slots: [],
        freeSlots : []
    }),
    actions: {
        async getSlotsByZone(zoneId: string): Promise<any> {
            try {
                let res = await authService(`Slot/get-slot-by-zone/${zoneId}`, 'get', this.user.token, {});
                this.slots = res.data;
                return res;
            } catch (error) {
                throw error;
            }
        },
        async getFreeSlots(startTime : Number, endTime : Number, vehicleType : string) : Promise<AxiosResponse<any>> {

            let parkingPlaceId = this.user.data.parkingPlaceId;

            const startTimeStr = startTime.toString();
            const endTimeStr = endTime.toString();

            return axiosClient.get(`Slot/get-free-slots-by-time-duration/${parkingPlaceId}/${startTimeStr}/${endTimeStr}/${vehicleType}`)
                .then((res : any) => {
                    this.freeSlots = res.data.slots;
                    return res.data;
                })
                .catch((err : any) => {
                    throw err;
                })
        },
        async getSlotDetails(slotId : string) : Promise<AxiosResponse<any>> {
            return axiosClient.get(`Slot/get-slot-details-by-id/${slotId}`)
                .then((res : any) => {
                    console.log(res.data)
                    return res.data;
                })
                .catch((err : any) => {
                    throw err;
                })
        },
        async getReservedSlotDetails(slot : string): Promise<AxiosResponse<any>> {
            return axiosClient.get(`Slot/get-reserved-slot-details/${slot}`)
                .then((res : any) => {
                    return res.data;
                })
                .catch((err : any) => {
                    throw err;
                })
        },
        async updateSlotState(slotId : string, state : string) : Promise<AxiosResponse<any>> {

            console.log(slotId, state);
            return axiosClient.put(`Slot/update-slot-state/${slotId}/${state}`)
                .then((res : any) => {
                    return res.data;
                })
                .catch((err : any) => {
                    throw err;
                })
        },
        async getEmergencySlotDetails(slotId : string) : Promise<AxiosResponse<any>> {
            return axiosClient.get(`Slot/get-emergency-slot-details/${slotId}`)
                .then((res : any) => {
                    return res.data;
                })
                .catch((err : any) => {
                    throw err;
                })
        }
    }
})