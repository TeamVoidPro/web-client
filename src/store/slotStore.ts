import {defineStore} from "pinia";
import {authService} from "../services/authService";


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
        async getFreeSlots(startTime : String, endTime : String) : Promise<any> {

            let parkingPlaceId = this.user.data.parkingPlaceId;

            try {
                let res = await authService(`Slot/get-free-slots-by-time-duration/${parkingPlaceId}/${startTime}/${endTime}`,'get', this.user.token ,{});
                this.freeSlots = res.data;
                return res;
            }catch (error){
                throw error
            }
        }
    }
})