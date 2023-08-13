import axiosClient from "../plugins/axios.ts";
import {authStore} from "../store/authStore.ts";

export const authService = (url: string , method: string ,token: string, data: object) => {
   if (method === 'get') {
       return axiosClient.get(url, {
              headers: {
                  Authorization: `Bearer ${token}`
              }
       }).then(({data}) => {
           return data;
       }).catch((error) => {
           if(error.response.status === 401) {
               const store = authStore()
               const result = store.regenerateToken()

                if(result != null) {
                    return axiosClient.get(url, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then(({data}) => {
                        return data;
                    }).catch((error) => {
                        throw error;
                    })
                }
           }
       })
   }else  {
         return axiosClient.post(url, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
         }).then(({data}) => {
                return data;
         }).catch((error) => {
                if(error.response.status === 401) {
                    const store = authStore()
                    const result = store.regenerateToken()

                     if(result != null) {
                         return axiosClient.post(url, data, {
                             headers: {
                                 Authorization: `Bearer ${token}`
                             }
                         }).then(({data}) => {
                             return data;
                         }).catch((error) => {
                             throw error;
                         })
                     }
                }
         })
    }
}