<template>
  <div>
    <div id="side-bar" class="min-h-[100vh] w-[15em] bg-white border-r-4">
      <img class="w-[80%] pt-10 m-auto" src = "../../assets/images/logo-3.png"
           alt = "Logo">
      <div id="open-sidebar" class="relative left-[93%]">
        <ChevronRightIcon class="text-primary w-10 h-10 rounded-full bg-blue-100" @click="closeSideBar"/>
      </div>
      <div id="close-sidebar" class="relative left-[75%] hidden">
        <ChevronLeftIcon class="text-primary w-10 h-10 rounded-full bg-blue-100" @click="openSideBar"/>
      </div>
      <div id="items-container" class="flex flex-col items-center pr-5 pl-1 space-y-5 mt-10">

        <router-link v-for="item in sidebarItems" :to="{name: item.link}" class="w-full">
          <div id="sidebar-item" :key="item.id" :class="[item.id===active? 'flex items-center gap-3 py-3 w-full ps-8 rounded-r-2xl hover:bg-[#EDF9FC] border-l-4 border-[#0074D9] bg-accent ':'flex items-center gap-3 py-3 w-full ps-8 rounded-r-2xl hover:bg-[#EDF9FC]']" @click="clicked(item.id)">
            <Component :is="item.icon" class="w-6 h-6 font-semibold"/>
            <div id="item-name" class="font-semibold ">{{item.name}}</div>
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
import DashboardIcon from "../../assets/icons/DashboardIcon.vue";
import EmployeeIcon from "@assets/icons/EmployeeIcon.vue";
import AnalyticsIcon from "@assets/icons/AnalyticsIcon.vue";
import FeedbacksAndRatingsIcon from "@assets/icons/FeedbacksAndRatingsIcon.vue";
import MonitoringsIcon from "@assets/icons/MonitoringsIcon.vue";
import pendingIcon from "@assets/icons/PendingIcon.vue";

let active: any = 1;
const sidebarItems = [
  {
    id: 1,
    name: 'Dashboard',
    icon: DashboardIcon,
    link: 'AdminDashboard'
  },
  {
    id: 2,
    name: 'Employees',
    icon: EmployeeIcon,
    link: 'AdminEmployees'
  },
  {
    id: 3,
    name: 'Analytics',
    icon: AnalyticsIcon,
    link: 'AdminAnalytics'
  },
  {
    id: 4,
    name: 'Feedbacks and Ratings',
    icon: FeedbacksAndRatingsIcon,
    link: 'AdminFeedbacksAndRatings'
  },
  {
    id: 5,
    name: 'Park Monitoring',
    icon: MonitoringsIcon,
    link: 'AdminParkMonitoring'
  },
  {
    id: 6,
    name: 'Pending Parks',
    icon: pendingIcon,
    link: 'AdminPendingParks'
  }
]

onMounted(() => {

})

function clicked(item: number){
  active = item;
}



function closeSideBar()
{
}

function openSideBar()
{

}


</script>
