import {defineStore} from 'pinia'
import axiosClient from "@/plugins/axios.ts";

export const useParkingOwnerRegistrationStore = defineStore('parkingOwnerRegistration', {
    state: () => ({
        registrationStep: 1,
        userPersonalData: {
            FirstName : 'Dinushan',
            LastName: 'Vimukthi',
            Email:'stdinushan@gmail.com',
            NICNo: '200017800595',
            AddressLine1: 'No 353/10',
            AddressLine2: 'Camp Road',
            City: 'Negombo',
            ContactNumber: '0767620785',
            Password:'Dinushan',
            ConfirmPassword:'Dinushan',
            NIC:'200017800595',
            NICFrontImage: '',
            NICBackImage: ''
        }
    }),
    getters: {


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

        //Personal Details Register
        setFirstName(firstName: string) {
            this.userPersonalData.FirstName = firstName;
        },
        setLastName(lastName: string) {
            this.userPersonalData.LastName = lastName;
        },
        setPhoneNo(phoneNo: string) {
            this.userPersonalData.PhoneNo = phoneNo;
        },
        setNICNo(nicNo: string) {
            this.userPersonalData.NICNo = nicNo;
        },
        setAddressLine1(address1: string) {
            this.userPersonalData.AddressLine1 = address1;
        },
        setAddressLine2(address2: string) {
            this.userPersonalData.AddressLine2 = address2;
        },
        setCity(city: string) {
            this.userPersonalData.City = city;
        },
        setContactNumber(contactNumber: string) {
            this.userPersonalData.ContactNumber = contactNumber;
        },
        setNIC(nic: string) {
            this.userPersonalData.NIC = nic;
        },
        setNICFrontImage(nicFrontImage: string) {
            this.userPersonalData.NICFrontImage = nicFrontImage;
        },
        setNICBackImage(nicBackImage: string) {
            this.userPersonalData.NICBackImage = nicBackImage;
        },
        setEmail(email: string) {
            this.userPersonalData.Email = email;
        },
        setPassword(password: string) {
            this.userPersonalData.Password = password;
        },
        setConfirmPassword(confirmPassword: string) {
            this.userPersonalData.ConfirmPassword = confirmPassword;
        },




        // Axios call to register the user
        async addPersonalDetails() {
            if (this.userPersonalData.Password !== this.userPersonalData.ConfirmPassword) {
                return {error: 'Password and Confirm Password does not match'}
            }
            // Check whether the property is empty
            try{
                return await axiosClient.post('/ParkingOwner/Register', this.userPersonalData);
            }catch (e) {
                return e.response
            }

        }

    }
})
