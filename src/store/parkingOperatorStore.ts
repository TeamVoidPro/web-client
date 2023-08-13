import {defineStore} from "pinia";
import {authService} from "../services/authService";


export const parkingOperatorStore = defineStore('parkingOperator', {
    state: () => ({
        user: {
            data: JSON.parse(localStorage.getItem('user') || '{}'),
            token: localStorage.getItem('token') || '',
        }
    }),
    actions: {
        getParkingPlace() {
            const user = this.user.data.id;
            console.log(user)
            return authService('ParkingOperator/get-operator-parking?parkingOperatorId=EMP_1975_6231', 'get', this.user.token, {})
                .then((res: any) => {
                    return res;
                }).catch((error) => {
                    throw error;
                })
        }
    }
})