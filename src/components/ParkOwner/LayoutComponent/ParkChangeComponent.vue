<script setup lang="ts">

import {onMounted, ref} from "vue";

const percentage = ref<number>(50);
const NotificationTrigger = ref<boolean>(false);
const currentPark = ref(
    {
      id: 1,
      name: 'Tibirigasyaya Park',
      location: 'Tibirigasyaya',
      rate: 4,
    }
);



const parks = ref([
  {
    id: 1,
    name: 'Tibirigasyaya Park',
    location: 'Tibirigasyaya',
    rate: 4,
  },
  {
    id: 2,
    name : 'Nugegoda Park',
    location: 'Nugegoda',
    rate: 1,
  },
  {
    id: 3,
    name: 'Borella Park',
    location: 'Borella',
    rate: 3,
  }
])

const closeNotification=()=> {
  NotificationTrigger.value = false;
}

const openNotification=(id:number)=> {
  NotificationTrigger.value = !NotificationTrigger.value;
}

const handleOuterClick = ()=>{
  window.addEventListener('click', (e)=>{
    if(NotificationTrigger.value){
      if(!(e.target as HTMLElement).closest('.notification-panel') && !(e.target as HTMLElement).closest('.notification-button')){
        NotificationTrigger.value = false;
      }
    }
  })
}

const changePark = (id:number)=>{
  currentPark.value = parks.value.find((park)=> park.id === id);
}

onMounted(()=>{
  handleOuterClick();
})
</script>

<template>
  <div class="absolute top-0 right-16 mt-4 mr-4">
    <div class="bg-white rounded-2xl p-3 text-blue-800 flex min-w-[260px] justify-between" >
      <div class="flex gap-1">
        <svg width="40" height="40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#ccc" stroke-width="4" />
          <circle cx="20" cy="20" r="18" fill="none" stroke="#119DF9" stroke-width="4" stroke-dasharray="113.097" stroke-dashoffset="28.274" transform="rotate(-90 20 20)" />
          <image xlink:href="/src/assets/icons/carIcon.svg" x="10" y="10" width="20" height="20" />
        </svg>
        <div class="ml-2 flex flex-col">
          <div class="text-md font-bold">
            {{currentPark.name}}
          </div>
          <div class="text-xs">
            {{currentPark.location}}
          </div>
        </div>
      </div>
<!--      down arrow -->
      <div class="ml-2 flex justify-center items-center cursor-pointer hover:bg-blue-400 hover:text-white hover:rounded-full px-2 notification-button" @click="openNotification" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" v-if="NotificationTrigger" class="notification-button">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" v-else class="notification-button">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 15l-6-6l-6 6"/>
        </svg>
      </div>

    </div>
  </div>
  <div class="absolute top-16 right-16 mt-5 mr-4 bg-white rounded-2xl flex flex-col gap-1 p-2" v-if="NotificationTrigger">
    <div class=" w-72 my-1 flex-col px-3 py-1 hover:bg-blue-400 hover:text-gray-200 rounded-lg cursor-pointer" v-for="(park,index) in parks" :key="index" @click="changePark(park.id)">
      <div class="flex flex-row justify-between items-center">
        <div class=" font-bold w-7/12">
          {{park.name}}
        </div>
        <div class="text-xs w-5/12">
          <n-rate :value="park.rate" :count="5" :allow-half="true" size="small" readonly/>
        </div>
      </div>
      <div class="text-sm">
        {{park.location}}
      </div>
      <hr class="mt-1"/>

    </div>
  </div>

</template>

<style>


</style>