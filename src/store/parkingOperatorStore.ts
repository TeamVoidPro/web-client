import {defineStore} from "pinia";
import {authService} from "../services/authService";


export const parkingOperatorStore = defineStore('parkingOperator', {
    state: () => ({
        user: {
            data: JSON.parse(localStorage.getItem('user') || '{}'),
            token: localStorage.getItem('token') || '',
        },
        parkingPlace: {},
    }),
    getters: {
        // getParkingPlace(): any {
        //     return this.parkingPlace;
        // }
    },
    actions: {
        getParkingPlace() {
            const user = this.user.data.id;
            return authService(`ParkingOperator/get-operator-parking?parkingOperatorId=${user}`, 'get', this.user.token, {})
                .then((res: any) => {
                    this.parkingPlace = res.parking;
                    return res;
                }).catch((error) => {
                    throw error;
                })
        }
    }
})