import {defineStore} from 'pinia'
// @ts-ignore
import axiosClient from "@plugins/axios.ts";

export const useParkingOwnerRegistrationStore = defineStore('parkingOwnerRegistration', {
    state: () => ({
        registrationStep: 1,
        personalDetails: {
            firstName: '',
            lastName: '',
            email: '',
            NICNo: '',
            mobileNo: '',
            Address1: '',
            Address2: '',
            City: '',
            Province: '',
            IdentificationType: 'NIC',
            IdentificationFrontImage: null,
            IdentificationBackImage: ''
        },
        stories:1,
    }),
    actions: {
        nextStep() {
            this.registrationStep++;
        },
        previousStep() {
            if (this.registrationStep > 1) {
                this.registrationStep--;
            }
        },
        registerOwner(){
            return axiosClient.post('parkOwner/register-park-owners', this.personalDetails)
                .then((res:any) => {
                    return res;
                    
                }).catch((e:any) => {
                    throw e;
                })
        }
    }
})
