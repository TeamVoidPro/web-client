import {defineStore} from "pinia";
import {authService} from "../services/authService";


export const zonesStore = defineStore('zones', {
    state: () => ({
        user: {
            data: JSON.parse(localStorage.getItem('user') || '{}'),
            token: localStorage.getItem('token') || '',
        },
        zones: [],
    }),
    actions: {
        getZones(parkingPlaceId: string) : Promise<any> {
            return authService(`Zone/get-zones-by-parking-place/${parkingPlaceId}`, 'get', this.user.token, {})
                .then((res: any) => {
                    this.zones = res.data;
                    return res;
                }).catch((error) => {
                    throw error;
                })
        }
    }
})