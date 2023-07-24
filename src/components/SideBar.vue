<template>
  <div>
    <div id="side-bar" class="min-h-[100vh] w-[20em] bg-white border-r-4">
      <img class="w-[80%] pt-10 m-auto" src = "../assets/images/logo-3.png"
           alt = "Logo">
      <div id="open-sidebar" class="relative left-[93%]">
        <ChevronRightIcon class="text-primary w-10 h-10 rounded-full bg-blue-100" @click="closeSideBar"/>
      </div>
      <div id="close-sidebar" class="relative left-[75%] hidden">
        <ChevronLeftIcon class="text-primary w-10 h-10 rounded-full bg-blue-100" @click="openSideBar"/>
      </div>
      <div id="items-container" class="flex flex-col items-center pr-5 pl-1 space-y-5 mt-10">

        <router-link v-for="item in sidebarItems" :to="{name: item.link}" class="w-full">
          <div id="sidebar-item" :key="item.id" :class="[item.id===active? 'flex items-center gap-3 py-3 w-full ps-14 rounded-r-2xl hover:bg-[#EDF9FC] border-l-4 border-[#0074D9] bg-accent ':'flex items-center gap-3 py-3 w-full ps-14 rounded-r-2xl hover:bg-[#EDF9FC]']" @click="clicked(item.id)">
            <img class="h-10 w-10" :src="item.icon" alt="Dashboard">
            <div id="item-name" class="font-semibold text-xl text-grey">{{item.name}}</div>
          </div>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script setup
        lang = "ts">

import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/vue/24/solid";
import {onMounted} from "vue";

let active: any = null;
const sidebarItems = [
  {
    id: 1,
    name: 'Dashboard',
    icon: "/src/assets/images/dashboard-svgrepo-com.svg",
    link: 'OperatorDashboard',
  },
  {
    id: 2,
    name: 'Reservations',
    icon: "/src/assets/images/reserve.svg",
    link: 'OperatorReservations'
  },
  {
    id: 3,
    name: 'Parking Slots',
    icon: "/src/assets/images/parking.svg",
    link: ''
  },
  {
    id: 4,
    name: 'Payments',
    icon: '/src/assets/images/dollar-square-svgrepo-com.svg',
    link: 'OperatorPayments'
  },
  {
    id: 5,
    name: 'Analytics',
    icon: '/src/assets/images/analytics-svgrepo-com.svg',
    link: ''
  },
  {
    id: 6,
    name: 'Settings',
    icon: '/src/assets/images/settings.svg',
    link: ''
  }
]

onMounted(() => {

})

function clicked(item: number){
  active = item;
  console.log(active);
}



function closeSideBar()
{
}

function openSideBar()
{

}


</script>
