

<template>
<!--  <ParkDrawer width=1000 height=800></ParkDrawer>-->
  <div class="w-full h-full flex flex-col items-center gap-1 justify-center">
    <ParkOwnerNavbar currentPage="home"   />
    <n-modal title="Question 1" v-model:show="questionNo[0].trigger">
      <n-card
          class="bg-white rounded text-center"
          title="Do you have Already have a park?"
          bordered
          style="width: 600px"
      >
        <n-radio-group v-model:value="questionNo[0].qNo" class="flex-col flex gap-2">
          <n-radio :value="1">Yes I already have a park</n-radio>
          <n-radio :value="2">No, I need to make my land a park</n-radio>
        </n-radio-group>
        <template #footer>
          <button
              class="w-full bg-blue-600 text-white p-2 rounded-md"
              @click="next()"
          >
            Next
          </button>
        </template>
      </n-card>
    </n-modal>
    <n-modal v-model:show="questionNo[1].trigger" title="Question 2" width="30%">
      <n-card
          class="bg-white rounded text-center"
          title="Do you have Already have a park?"
          bordered
          style="width: 600px"
      >
        <n-radio-group v-model:value="questionNo[1].qNo" class="flex-col flex gap-2">
          <n-radio :value="1">
            Ground Level  Vehicle Park
          </n-radio>
          <n-radio :value="2">
            Multi Story Vehicle Park
          </n-radio>
        </n-radio-group>
        <template #footer>
          <button
              class="w-full bg-blue-600 text-white p-2 rounded-md"
              @click="next()"
          >
            Next
          </button>
        </template>
      </n-card>
    </n-modal>
    <n-modal v-model:show="questionNo[2].trigger" title="Question 3" width="30%">
      <n-card
          class="bg-white rounded flex  w-4/5 justify-center text-center"
          title="Do you have Already have a park?"
          bordered
          style="width: 600px"
      >
        <div class="flex flex-col gap-1 items-center justify-center">
          <div class="flex flex-col items-start w-4/5 gap-1 justify-center">
            <div class="flex items-center justify-between w-full">
              <n-checkbox class="w-2/5 flex items-center justify-start" :value="parkSlots.car">
                <div class="flex items-center justify-between w-full">
                  Car Slots
                </div>
              </n-checkbox>
              <n-input-number v-model:value="parkSlots.car" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
            </div>
            <div class="flex items-center justify-between w-full">
              <n-checkbox class="w-2/5 flex items-center justify-start" v-model:value="parkSlots.threeWheel">
                <div class="flex items-center justify-between w-full">
                  Three Wheeler Slots
                </div>
              </n-checkbox>
              <n-input-number v-model:value="parkSlots.threeWheel" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
            </div>
            <div class="flex items-center justify-between w-full">
              <n-checkbox class="w-2/5 flex items-center justify-start" v-model:value="parkSlots.motorBike">
                <div class="flex items-center justify-between w-full">
                  Bike Slots
                </div>
              </n-checkbox>
              <n-input-number v-model:value="parkSlots.motorBike" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
            </div>
            <div class="flex items-center justify-between w-full">
              <n-checkbox class="w-2/5 flex items-center justify-start" v-model:value="parkSlots.van">
                <div class="flex items-center justify-between w-full">
                  Van Slots
                </div>
              </n-checkbox>
              <n-input-number v-model:value="parkSlots.van" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
            </div>
            <div class="flex items-center justify-between w-full">
              <n-checkbox class="w-2/5 flex items-center justify-start" v-model:value="parkSlots.lorry">
                <div class="flex items-center justify-between w-full">
                  Lorry Slots
                </div>
              </n-checkbox>
              <n-input-number v-model:value="parkSlots.lorry" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
            </div>
            <div class="flex items-center justify-between w-full">
              <n-checkbox class="w-2/5 flex items-center justify-start" v-model:value="parkSlots.bus">
                <div class="flex items-center justify-between w-full">
                  Bus Slots
                </div>
              </n-checkbox>
              <n-input-number v-model:value="parkSlots.bus" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
            </div>
          </div>
          <div class="flex items-center justify-center gap-16 my-3 text-lg w-full">
            <div class="flex gap-3">
              Total Slots
            </div>
            <div class="flex gap-3">
              {{totalSlots}}
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex gap-3 w-full">
            <button
                class="w-full bg-blue-600 text-white p-2 rounded-md"
                @click="prev()"
            >
              Previous
            </button>
            <button
                class="w-full bg-blue-600 text-white p-2 rounded-md"
                @click="questionNo[2].trigger = false"
            >
              Next
            </button>
          </div>
        </template>
      </n-card>
    </n-modal>

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
  </div>




</template><script setup lang="ts">
import ParkOwnerNavbar from "@/components/Navbar/ParkOwnerNavbar.vue";
import {computed, ref} from "vue";
import PersonalDetailRegistrationForm from "@components/ParkOwner/PersonalDetailRegistrationForm.vue";
import LandRegistrationForm from "@components/ParkOwner/LandRegistrationForm.vue";
import {useParkingOwnerRegistrationStore} from "@store/parkingOwnerRegisterStore.ts"
import ParkDrawer from "@components/ParkOwner/ParkDrawer/ParkDrawer3D.vue";
import {NModal,NRadio,NRadioGroup} from "naive-ui"

// import LandRegistrationForm from "@/components/ParkOwner/LandRegistrationForm.vue";

const store = useParkingOwnerRegistrationStore();

const currentQuestion = ref(0)
const questionNo = ref([
  {
    qNo: 1,
    trigger: false
  },
  {
    qNo: 2,
    trigger: false
  },
  {
    qNo: 3,
    trigger: false,
    checked: false
  },
  {
    qNo: 4,
    trigger: false
  }
])

const parkSlots = ref({
  car: 0,
  van: 0,
  bus: 0,
  lorry: 0,
  motorBike: 0,
  threeWheel: 0
});

const totalSlots = computed(() => {
  return Object.values(parkSlots.value).reduce((a, b) => a + b, 0);
});
const next = () => {
  // store.nextStep()
  if (currentQuestion.value>0){
    questionNo.value[currentQuestion.value-1].trigger = false
  }
  questionNo.value[currentQuestion.value].trigger = true
  currentQuestion.value++
}

const prev = () => {
  store.previousStep()
  console.log(store.registrationStep)
}

</script>

