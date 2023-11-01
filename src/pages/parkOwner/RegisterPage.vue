<template>
<!--  <ParkDrawer width=1000 height=800></ParkDrawer>-->
  <div class="w-full h-full flex flex-col items-center gap-1 justify-center">
    <ParkOwnerNavbar currentPage="home"   />

    <div class="w-9/12 bg-white mb-3 p-8 rounded-3xl drop-shadow-md flex flex-col items-center">
      <n-space vertical class="w-10/12">
        <n-steps :current="store.registrationStep">
          <n-step
              class="text-blue-600"
              title="Owner Registration"
              description="Detail of the owner"
          />
          <n-step
              title="Land Registration"
              description="Detail of the land"
          />
          <n-step
              title="Park Details"
              description="Detail of the park"
          />
<!--          <n-step-->
<!--              title="Make your park"-->
<!--              description="View of your park"-->
<!--          />-->
          <n-step
              title="Verify your park"
              description="Verify your park"
          />
        </n-steps>
      </n-space>
      <n-divider />
      <div class="w-full" style="min-height: 64vh">
        <PersonalDetailRegistrationForm v-if="store.registrationStep === 1" />
        <LandRegistrationForm v-if="store.registrationStep === 2" />
        <ParkDetails v-if="store.registrationStep === 3" />
<!--        <ParkDrawer class="h-full" v-if="store.registrationStep === 4" />-->
        <ParkVerification v-if="store.registrationStep===4"/>
      </div>
      <div class="w-full flex items-center justify-center gap-3 mt-4">
        <button class="bg-primary text-white rounded-3xl text-xl px-6 py-2" @click="prevStep()">
          Back
        </button>
        <button class="bg-primary text-white rounded-3xl text-xl px-6 py-2" @click="nextStep()" v-if="store.registrationStep!=4">
          Next
        </button>
        <button class="bg-primary text-white rounded-3xl text-xl px-6 py-2" @click="nextStep()" v-if="store.registrationStep===4">
          Submit
        </button>
      </div>
    </div>
  </div>




</template>
<script setup lang="ts">
import ParkOwnerNavbar from "@/components/Navbar/ParkOwnerNavbar.vue";
import PersonalDetailRegistrationForm from "@components/ParkOwner/PersonalDetailRegistrationForm.vue";
import LandRegistrationForm from "@components/ParkOwner/LandRegistrationForm.vue";
import ParkDetails from "@components/ParkOwner/ParkDetails.vue";
// import ParkDrawer from "@components/ParkOwner/ParkDrawer/ParkDrawer2D.vue";
import ParkVerification from "@components/ParkOwner/ParkVerification.vue";
import {useParkingOwnerRegistrationStore} from "@store/parkingOwnerRegisterStore.ts"
import {useMessage} from "naive-ui";
import router  from "@/router";

// import LandRegistrationForm from "@/components/ParkOwner/LandRegistrationForm.vue";
//

const message = useMessage()
const store = useParkingOwnerRegistrationStore();

let showAlert = false;

const navigateTo = (path: string) => {
  router.push(path);
};


async  function submitForm () {
  let response= await store.registerOwner();
  if(response && response.status===200){
    message.success("Parking Owner Registered Successfully")
    //navigate to login page
    await router.push({name: "Login"})
    return true
  }
  else{
    message.success("Parking Owner Registered Successfully")
    await router.push({name: "Login"})
    return true
  }
}


const prevStep = () => {
  store.previousStep()
  console.log(store.registrationStep)
}

const nextStep = () => {
  if(store.registrationStep === 4){
    submitForm()
    return
  }
  store.nextStep()
  console.log(store.registrationStep)

}

</script>

