<template>
  <div id="side-bar" class="h-[100vh] w-[20em] bg-[#005792]">
    <img class="w-[80%] pt-10 m-auto" src = "../assets/images/logo.png"
         alt = "Logo">
    <div class="relative left-[93%]">
      <ChevronRightIcon class="text-primary w-10 h-10 rounded-full bg-blue-100" @click="closeSideBar"/>
    </div>
    <div class="relative left-[93%]">
      <ChevronLeftIcon class="text-primary w-10 h-10 rounded-full bg-blue-100 hidden" @click="openSideBar"/>
    </div>
    <div class="flex-col w-full mt-20 space-y-10">
      <div class="flex items-center justify-center gap-5">
        <HomeIcon class="text-[#d1f4fa] w-8 h-8"/>
        <p class="text-white text-xl hover:bg-[#d1f4fa] py-2 px-3 hover:rounded-xl flex justify-center hover:text-black">Dashboard</p>
      </div>
      <div class="flex items-center justify-center gap-5">
        <HomeIcon class="text-[#d1f4fa] w-8 h-8"/>
        <p class="text-white text-xl hover:bg-[#d1f4fa] py-2 px-3 hover:rounded-xl flex justify-center hover:text-black">Dashboard</p>
      </div>
      <div class="flex items-center justify-center gap-5">
        <HomeIcon class="text-[#d1f4fa] w-8 h-8"/>
        <p class="text-white text-xl hover:bg-[#d1f4fa] py-2 px-3 hover:rounded-xl flex justify-center hover:text-black">Dashboard</p>
      </div>
      <div class="flex items-center justify-center gap-5">
        <HomeIcon class="text-[#d1f4fa] w-8 h-8"/>
        <p class="text-white text-xl hover:bg-[#d1f4fa] py-2 px-3 hover:rounded-xl flex justify-center hover:text-black">Dashboard</p>
      </div>
      <div class="flex items-center justify-center gap-5">
        <HomeIcon class="text-[#d1f4fa] w-8 h-8"/>
        <p class="text-white text-xl hover:bg-[#d1f4fa] py-2 px-3 hover:rounded-xl flex justify-center hover:text-black">Dashboard</p>
      </div>
    </div>
  </div>
</template>

<script setup
        lang = "ts">

import {ChevronLeftIcon, ChevronRightIcon, HomeIcon} from "@heroicons/vue/24/solid";

function closeSideBar(){
  document.getElementById('side-bar')?.classList.add('w-[5em]')
}

function openSideBar(){
  document.getElementById('side-bar')?.classList.remove('w-[5em]')
}
</script>
