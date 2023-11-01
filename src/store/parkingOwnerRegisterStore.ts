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
            password: '',
            NICNo: '',
            mobileNo: '',
            Address1: '',
            Address2: '',
            City: '',
            Province: '',
            IdentificationType: 'NIC',
            IdentificationFrontImage : '',
            IdentificationBackImage: '',
        },
        stories:1,
        LandDetails: {
            AddressNo: '',
            AddressStreet: '',
            parkingCity: '',
            parkingProvince: '',
            deedImage: '',
            landMapImage: '',
            landImages: '',
            latitude: 6.9005,
            longitude: 79.8612
        },
        parkingDetails: {
            parkAvailable:'1',
            parkName: '',
            parkDescription: '',
            width: 0,
            length: 0,
            parkingCategory: '1',
            noOfStories: 1,
            hasUndergroundParking: false,
            parkMapImage: '',
            storyList: [
                {
                    storyNo: "Underground",
                    available: false,
                    slots: {
                        car: 0,
                        threeWheeler: 0,
                        motorBike: 0,
                        van: 0,
                        lorry: 0,
                        bus: 0,
                    },
                },
                {
                    storyNo: "Ground",
                    available: true,
                    slots: {
                        car: 0,
                        threeWheeler: 0,
                        motorBike: 0,
                        van: 0,
                        lorry: 0,
                        bus: 0,
                    },
                },
            ],
        }
    }),
    getters: {
        getAvailableStories():any[] {
            return this.parkingDetails.storyList.filter((story:any) => story.available);
        }
    },
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
            console.log('sent')
            const data = {
                'fullName': this.personalDetails.firstName + ' ' + this.personalDetails.lastName,
                'email': this.personalDetails.email,
                'password': this.personalDetails.password,
                'addressLine1': this.personalDetails.Address1,
                'addressLine2': this.personalDetails.Address2,
                'city': this.personalDetails.City,
                'province': this.personalDetails.Province,
                'nic': this.personalDetails.NICNo,
                'contactNumber': this.personalDetails.mobileNo,
                'identificationMethod': this.personalDetails.IdentificationType,
                'identificationFrontImage': this.personalDetails.IdentificationFrontImage,
                'identificationBackImage': this.personalDetails.IdentificationBackImage,
                'landAddress1': this.LandDetails.AddressNo,
                'landStreet': this.LandDetails.AddressStreet,
                'landCity': this.LandDetails.parkingCity,
                'landProvince': this.LandDetails.parkingProvince,
                'landDeedImage': this.LandDetails.deedImage,
                'landMapImage': this.LandDetails.landMapImage,
                'landImages': this.LandDetails.landImages,
                'latitude': this.LandDetails.latitude,
                'longitude': this.LandDetails.longitude,
                'parkAvailable': this.parkingDetails.parkAvailable,
                'parkName': this.parkingDetails.parkName,
                'parkDescription': this.parkingDetails.parkDescription,
                'parkWidth': this.parkingDetails.width,
                'parkLength': this.parkingDetails.length,
                'parkCategory': this.parkingDetails.parkingCategory,
                'noOfStories': this.parkingDetails.noOfStories,
                'hasUndergroundParking': this.parkingDetails.hasUndergroundParking,
                'parkImage': this.parkingDetails.parkMapImage,
                // 'storyList': this.parkingDetails.storyList[1]
            };
            console.log(data)
            return axiosClient.post('parkingOwner/register-parking-owner', data
            )
                .then((res:any) => {
                    return res;
                    
                }).catch((e:any) => {
                    throw e;
                })
        },
        login(){
        },
        getDriverDetails(driverId:string){
            return axiosClient.get(`driver/get-driver/${driverId}`)
                .then((res:any) => {
                    return res.data;
                })
                .catch((e:any) => {
                throw e;
                })
        }


    }
})
