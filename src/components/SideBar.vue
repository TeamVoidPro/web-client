<template>
  <div id="side-bar" class="h-[100vh] w-[20em] bg-[#005792]">
    <img class="w-[80%] pt-10 m-auto" src = "../assets/images/logo-1.png"
         alt = "Logo">
    <div id="open-sidebar" class="relative left-[93%]">
      <ChevronRightIcon class="text-primary w-10 h-10 rounded-full bg-blue-100" @click="closeSideBar"/>
    </div>
    <div id="close-sidebar" class="relative left-[75%] hidden">
      <ChevronLeftIcon class="text-primary w-10 h-10 rounded-full bg-blue-100" @click="openSideBar"/>
    </div>
    <div class="flex-col w-full mt-20 space-y-10 h-[65vh]">
      <div class="flex items-center justify-center gap-5 max-md:gap-0">
        <HomeIcon class="text-[#d1f4fa] w-8 h-8"/>
        <p id="icon-name" class="text-white text-xl hover:bg-[#d1f4fa] py-2 px-3 hover:rounded-xl flex justify-center hover:text-black max-md:text-lg">Dashboard</p>
      </div>
      <div class="flex items-center justify-center gap-5 max-md:gap-0">
        <HomeIcon class="text-[#d1f4fa] w-8 h-8"/>
        <p id="icon-name" class="text-white text-xl hover:bg-[#d1f4fa] py-2 px-3 hover:rounded-xl flex justify-center hover:text-black max-md:text-lg">Dashboard</p>
      </div>
      <div class="flex items-center justify-center gap-5 max-md:gap-0">
        <HomeIcon class="text-[#d1f4fa] w-8 h-8"/>
        <p id="icon-name" class="text-white text-xl hover:bg-[#d1f4fa] py-2 px-3 hover:rounded-xl flex justify-center hover:text-black max-md:text-lg">Dashboard</p>
      </div>
      <div class="flex items-center justify-center gap-5 max-md:gap-0">
        <HomeIcon class="text-[#d1f4fa] w-8 h-8"/>
        <p id="icon-name" class="text-white text-xl hover:bg-[#d1f4fa] py-2 px-3 hover:rounded-xl flex justify-center hover:text-black max-md:text-lg">Dashboard</p>
      </div>
    </div>
    <div class="flex justify-center items-center gap-3 mt-5">
      <ArrowLeftOnRectangleIcon class="w-12 h-12 text-[#d1f4fa]"/>
      <div class="text-2xl text-[#d1f4fa]">Logout</div>
    </div>
  </div>
</template>

<script setup
        lang = "ts">

import {ChevronLeftIcon, ChevronRightIcon, HomeIcon} from "@heroicons/vue/24/solid";
import {ArrowLeftOnRectangleIcon} from "@heroicons/vue/24/outline";

function closeSideBar()
{
  document.getElementById('side-bar')?.classList.add('w-[5em]')
  document.getElementById('open-sidebar')?.classList.add('hidden')
  document.getElementById('close-sidebar')?.classList.remove('hidden')
  let icon_names = document.querySelectorAll('#icon-name')
  icon_names.forEach((icon_name) => {
    icon_name.classList.add('hidden')
  })
}

function openSideBar()
{
  document.getElementById('side-bar')?.classList.remove('w-[5em]')
  document.getElementById('open-sidebar')?.classList.remove('hidden')
  document.getElementById('close-sidebar')?.classList.add('hidden')
  let icon_names = document.querySelectorAll('#icon-name')
  icon_names.forEach((icon_name) => {
    icon_name.classList.remove('hidden')
  })
}
</script>
