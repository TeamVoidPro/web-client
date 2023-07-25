<script setup lang="ts">
import ParkOwnerNavbar from "@/components/Navbar/ParkOwnerNavbar.vue";
import {ref} from "vue";
import PersonalDetailRegistrationForm from "@/components/ParkOwner/PersonalDetailRegistrationForm.vue";
import LandRegistrationForm from "@/components/ParkOwner/LandRegistrationForm.vue";
import {useParkingOwnerRegistrationStore} from "@/store/parkingOwnerRegisterStore.ts"
import ParkDrawer from "@/components/ParkOwner/ParkDrawer/ParkDrawer3D.vue";

// import LandRegistrationForm from "@/components/ParkOwner/LandRegistrationForm.vue";

const store = useParkingOwnerRegistrationStore();

const next = () => {
  store.nextStep()
  console.log(store.registrationStep)
}

const prev = () => {
  store.previousStep()
  console.log(store.registrationStep)
}

</script>

<template>
<!--  <ParkDrawer width=1000 height=800></ParkDrawer>-->
  <ParkOwnerNavbar currentPage="home"  />
<!--  <PersonalDetailRegistrationForm />-->
<!--  <LandRegistrationForm />-->

  <div class="w-9/12 bg-white mb-3 p-8 rounded-3xl  drop-shadow-md flex flex-col items-center">
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
            title="Make your park"
            description="Detail of the park"
        />
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
      <ParkDrawer class="h-full" v-if="store.registrationStep === 3" />
    </div>
    <div class="w-full flex items-center justify-center gap-3 mt-4">
      <button class="bg-primary text-white rounded-3xl text-xl px-6 py-2" @click="prev()">
        Back
      </button>
      <button class="bg-primary text-white rounded-3xl text-xl px-6 py-2" @click="next()">
        Next
      </button>
    </div>
  </div>





</template>

<style>
.n-steps .n-step-indicator{
  background-color: #0074D9 !important;
  box-shadow: 0 0 0 0.25rem #0074D9 !important;
}

.n-radio .n-radio__dot::before{
  background: #ffffff !important;
}

.n-radio .n-radio__dot.n-radio__dot--checked{
  box-shadow: 0 0 0 0.05rem #ffffff !important;
}
</style>