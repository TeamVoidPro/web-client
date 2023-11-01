<script setup lang="ts">

import {useParkingOwnerRegistrationStore} from "@store/parkingOwnerRegisterStore.ts";

const store = useParkingOwnerRegistrationStore();




</script>

<template>
  <div class="bg-white h-fit rounded-3xl p-5 ">
    <div class="text-2xl font-bold flex text-center justify-center mb-4">
      Confirm your parking place details
    </div>
    <div class="flex justify-center gap-4">
    <div class=" p-4 flex flex-col gap-8 justify-between w-1/2">
      <div class="flex flex-col gap-4">
        <div class="text-3xl text-center font-bold mb-4">
          Personal Details
        </div>
        <div class="flex justify-around gap-3">
          <div class="flex flex-col gap-2 w-5/12">
            <div class="flex">
              Your First Name
            </div>
            <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem] min-h-[1rem]"  type="text" placeholder="First Name" >{{store.personalDetails.firstName}}</div>
          </div>
          <div class="flex flex-col gap-2 w-5/12">
            <div class="flex">
              Your Last Name
            </div>
            <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem] min-h-[1rem]"  type="text" placeholder="First Name" >{{store.personalDetails.lastName}}</div>
          </div>
        </div>
        <div class="flex justify-around gap-3">
          <div class="flex flex-col gap-2 w-5/12">
            <div class="flex">
              Email
            </div>
            <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem] min-h-[1rem]"  type="text" placeholder="First Name" >{{store.personalDetails.email}}</div>
          </div>
        </div>
        <div class="flex justify-around gap-3">
          <div class="flex flex-col gap-2 w-5/12">
            <div class="flex">
              Phone No
            </div>
            <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem] min-h-[1rem]"  type="text" placeholder="First Name" >{{store.personalDetails.mobileNo}}</div>

          </div>
          <div class="flex flex-col gap-2 w-5/12">
            <div class="flex">
              NIC No
            </div>
            <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem] min-h-[1rem]"  type="text" placeholder="First Name" >{{store.personalDetails.NICNo}}</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="text-3xl text-center font-bold mb-4">
          Land Location Details
        </div>
        <div class="flex justify-around gap-3">
          <div class="flex flex-col gap-2 w-5/12">
            <div class="flex">
              Address No
            </div>
            <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem] min-h-[1rem]"  type="text" placeholder="First Name" >{{store.LandDetails.AddressNo}}</div>
          </div>
          <div class="flex flex-col gap-2 w-5/12">
            <div class="flex">
              Address Street
            </div>
            <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem] min-h-[1rem]"  type="text" placeholder="First Name" >{{store.LandDetails.AddressStreet}}</div>

          </div>
        </div>
        <div class="flex justify-around gap-3">
          <div class="flex flex-col gap-2 w-5/12">
            <div class="flex">
              City
            </div>
            <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem] min-h-[1rem]"  type="text" placeholder="First Name" >{{store.LandDetails.parkingCity}}</div>

          </div>
          <div class="flex flex-col gap-2 w-5/12">
            <div class="flex">
              Province
            </div>
            <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem] min-h-[1rem]"  type="text" placeholder="First Name" >{{store.LandDetails.parkingProvince}}</div>

          </div>
        </div>

      </div>
    </div>
    <div class="flex flex-col w-1/2 gap-4 mt-4">
      <div class="text-3xl text-center font-bold mb-2">
        Park Details
      </div>
      <div class="flex flex-col gap-2 w-full">
        <div class="flex gap-2">
          Park Available
          <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem]"  type="text" placeholder="First Name" >{{store.parkingDetails.parkAvailable=="1"?"yes":"no"}}</div>
        </div>
        <div class="flex gap-2 mb-2" v-if="store.parkingDetails.parkAvailable==='2'">
          Length of the land
          <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem]"  type="text" placeholder="length" >{{store.parkingDetails.length}}</div>
        </div>
        <div class="flex gap-2" v-if="store.parkingDetails.parkAvailable==='2'">
          Width of the land
          <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem]"  type="text" placeholder="width" >{{store.parkingDetails.width}}</div>
        </div>
        <div class="flex gap-2" v-if="store.parkingDetails.parkAvailable==='1'">
          Park Category
          <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem]"  type="text" placeholder="First Name" >{{store.parkingDetails.parkingCategory=="1"?"Ground Level":"Multi Story"}}</div>
        </div>
        <div v-if='store.parkingDetails.parkingCategory==="2"' class="flex gap-2">
          Number of Stories
          <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem]"  type="text" placeholder="First Name" >{{store.parkingDetails.noOfStories}}</div>
        </div>
        <div v-if='store.parkingDetails.parkingCategory==="2"' class="flex gap-2">
          Has Underground Parking
          <div class="rounded-3xl border-2 border-gray-300 px-2 min-w-[10rem]"  type="text" placeholder="First Name" >{{store.parkingDetails.hasUndergroundParking==true?"Yes":"No"}}</div>
        </div>
        <div class="flex flex-col" v-if="store.parkingDetails.parkAvailable==='1'">
          <div class="text-lg">Parking Slots Details</div>
          <div>
              <n-table :single-line="false" class="w-fit mt-2">
                <thead>
                <tr>
                  <th>Story Number</th>
                  <th>Car</th>
                  <th>ThreeWheeler</th>
                  <th>Bike </th>
                  <th>Van </th>
                  <th>Lorry</th>
                  <th>Bus</th>
                  <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="story in store.getAvailableStories" :key="story.storyNo" >
                  <td>{{story.storyNo}}</td>
                  <td>{{story.slots.car}}</td>
                  <td>{{story.slots.threeWheeler}}</td>
                  <td>{{story.slots.motorBike}}</td>
                  <td>{{story.slots.van}}</td>
                  <td>{{story.slots.lorry}}</td>
                  <td>{{story.slots.bus}}</td>
                  <td>{{Object.values(story.slots).reduce((a, b) => a + b, 0)}}</td>
                </tr>
                </tbody>
              </n-table>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>