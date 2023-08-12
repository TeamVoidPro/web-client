<script setup lang="ts">
import ParkOwnerLayout from "@layouts/ParkOwnerLayout.vue";
import Button from "@components/Button.vue";
import {ref} from "vue";

const tags= ref(
    [
        {
            id:1,
            name:"Security",
            color:"bg-green-400"
        },
        {
            id:2,
            name:"24/7 service",
            color:"bg-yellow-200"
        },
        {
            id:3,
            name:"CCTV",
            color:"bg-yellow-200"
        }
    ]
)
</script>

<template>
  <ParkOwnerLayout>
      <div class="flex bg-white my-5 mx-[150px] py-3 px-4 rounded-2xl h-[300px]">
        <div class="flex gap-1 w-2/3 mx-2">
          <div >
            <img src="../../assets/images/parking_area.jpg" class="w-full h-full rounded-2xl">
          </div>
          <div class="">
            <img src="../../assets/images/parking_place2.jpg" class="rounded-2xl h-[135px] w-[200px] mb-1">
            <img src="../../assets/images/parking_place2.jpg" class="rounded-2xl h-[135px] w-[200px]">
          </div>
        </div>
        <div>
          <div class="text-primary align-baseline text-md my-2.5 ml-2">
            <div class="text-center text-lg">Thimbirigasyaya Parking Area</div>
            <div class="flex gap-2 mt-2">
              <img src="../../assets/icons/location.svg">
              No: 123, Thimbirigasyaya Road, Colombo 05
            </div>
            <div class="flex gap-2 mt-2">
              <img src="../../assets/icons/phone.svg">
              +94 77 123 4567
            </div>
            <div class="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus luctus, nisl
            </div>
            <div class="flex justify-evenly mt-3">
              <div class="flex justify-end rounded-2xl bg-green-400 px-3" v-for="tag in tags">
                {{tag.name}}
                <img src="../../assets/icons/cross.svg" class="ml-1">
              </div>
            </div>
            <div class="flex justify-center align-middle mt-2">
              <button class="flex gap-2 border-2 border-blue-400 mt-2 px-1 py-2 bg-white rounded-2xl h-[50px]" type="primary">
                <img src="../../assets/icons/edit.svg">
                Edit Park Details</button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col bg-white my-10 mx-[150px] py-3 px-4 rounded-2xl">
        <div class="text-center text-lg font-bold text-primary mt-2 mb-4">Manage Zones and Slots</div>
        <div class="flex justify-evenly gap-1">
          <div>
            <div class="flex justify-evenly gap-4 mb-3">
              <button type="primary" class="border-green-400 border-2 bg-green-200 rounded-2xl px-2 py-2" >Add Zone</button>
              <button type="primary" class="border-red-400 border-2 bg-red-200 rounded-2xl px-2 py-2" >Remove Zone</button>
            </div>
            <hr class="h-[4px]">
            <div class="mt-2">
              <div class="text-center text-lg">Finding parking slot</div>
              <div class="flex justify-between mt-2">
                Search Zone
                <select class="border-2 border-gray-300 rounded-2xl px-2 py-1 w-1/2">
                  <option value="volvo">Zone 1</option>
                  <option value="saab">Zone 2</option>
                  <option value="mercedes">Zone 3</option>
                  <option value="audi">Zone 4</option>
                </select>
              </div>
              <div class="flex justify-between mt-2">
                Search Slot
                <select class="border-2 border-gray-300 rounded-2xl px-2 py-1 w-1/2">
                  <option value="volvo">Slot 1</option>
                  <option value="saab">Slot 2</option>
                  <option value="mercedes">Slot 3</option>
                  <option value="audi">Slot 4</option>
                </select>
              </div>
              <div class="flex justify-center">
                <button type="primary" class="flex gap-2 border-blue-400 border-2 bg-white rounded-2xl px-1 py-2 mt-2 h-[40px]" >
                  <img src="../../assets/icons/eye.svg">
                  View on Map
                </button>
              </div>
            </div>
            <div>
              <div class="flex flex-col border border-black rounded-2xl my-2 px-2 py-2">
                <div class="my-1">Zone Name: Zone 1</div>
                <div class="my-1">No of Slots: 10</div>
                <div class="my-1">Zone Price: 100 per hour</div>
                <button type="primary" class="border-blue-400 border-2 bg-blue-200 rounded-2xl px-2 py-2 mt-2" >
                  Change Price
                </button>
                <button type="primary" class="border-red-400 border-2 bg-red-200 rounded-2xl px-2 py-2 mt-2" >
                  Unable Zone
                </button>
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <img src="../../assets/images/parking_slots.jpg" class="rounded-2xl">
          </div>
        </div>
      </div>
  </ParkOwnerLayout>
</template>

<style scoped>

</style>