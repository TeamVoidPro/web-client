import {defineStore} from 'pinia'

export const useParkingOwnerRegistrationStore = defineStore('parkingOwnerRegistration', {
    state: () => ({
        registrationStep: 1,
    }),
    actions: {
        nextStep() {
            this.registrationStep++;
        },
        previousStep() {
            if (this.registrationStep > 1) {
                this.registrationStep--;
            }
        }
    }
})
