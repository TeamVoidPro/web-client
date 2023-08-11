import axiosClient from "../plugins/axios.ts";
import {authStore} from "../store/authStore.ts";

export const authService = (url: string , token: string, data: object) => {
    if(Object.keys(data).length === 0 && data.constructor === Object) {
        return axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({data}) => {
            return data
        }).catch((error) => {
            if(error.response && error.response.status === 401){
                const auth = authStore()
                const result = auth.regenerateToken()

                if(result != null){
                    return axiosClient.get(url, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then(({data}) => {
                        return data
                    }).catch((error) => {
                        throw error
                    })
                }
            }
        });
    }else{
        return axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data
        }).then(({data}) => {
            return data
        }).catch((error) => {
            if(error.response && error.response.status === 401){
                const auth = authStore()
                const result = auth.regenerateToken()

                if(result != null){
                    return axiosClient.get(url, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                        data
                    }).then(({data}) => {
                        return data
                    }).catch((error) => {
                        throw error
                    })
                }
            }
        });
    }
}