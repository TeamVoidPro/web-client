<style scoped>
.n-card {
  max-width: 300px;
}
</style>

<template>
  <AdminLayout>
    <div class=" flex flex-row justify-between">
      <div class="text-xl flex gap-2"><span class="font-semibold">32</span><span>Parking Places</span></div>
      <div class="w-[25em]">
      <n-select
        v-model:value="selectedValue"
        filterable
        placeholder="Please select a Type"
        :options="options"
      />
    </div>
    <div class="w-[25em]">
      <n-input placeholder="Search the Parking Place">
        <template #prefix>
          <n-icon :component="SearchOutline" />
        </template>
      </n-input>
    </div>
    </div>

    <div class="flex flex-wrap gap-3 mt-8">
      <n-card title="UCSC Parking">
        <template #cover>
          <img src="../../assets/images/parking-place.png">
        </template>
        <div>
          <div class="bg-gray-100 rounded px-2 py-4">
            <div class="flex items-center gap-2">
              <div>
                <ParkingPlaceIdIcon class="w-4 h-4"/>
              </div>
              <div>
                P0002
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <ParkingPlaceLocation class="w-4 h-4"/>
              </div>
              <div>
                Reid Avenue, Colombo 7
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <PersonIcon class="w-4 h-4"/>
              </div>
              <div>
                Viharsha Jayathilaka
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <PhoneIcon class="w-4 h-4"/>
              </div>
              <div>
                +94773921108
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <EmailIcon class="w-4 h-4"/>
              </div>
              <div>
                viharshapramodi@gmail.com
              </div>
            </div>
            <router-link :to="{name:'PendingParkingPlaceInfo'}">
              <div class=" w-full flex justify-center mb-2 mt-2"><button class="text-white py-1 px-6 rounded ">More Details</button></div>
            </router-link>
          </div>
          </div>
      </n-card>
      <n-card title="UCSC Parking">
        <template #cover>
          <img src="../../assets/images/parking-place.png">
        </template>
        <div>
          <div class="bg-gray-100 rounded px-2 py-4">
            <div class="flex items-center gap-2">
              <div>
                <ParkingPlaceIdIcon class="w-4 h-4"/>
              </div>
              <div>
                P0002
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <ParkingPlaceLocation class="w-4 h-4"/>
              </div>
              <div>
                Reid Avenue, Colombo 7
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <PersonIcon class="w-4 h-4"/>
              </div>
              <div>
                Viharsha Jayathilaka
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <PhoneIcon class="w-4 h-4"/>
              </div>
              <div>
                +94773921108
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <EmailIcon class="w-4 h-4"/>
              </div>
              <div>
                viharshapramodi@gmail.com
              </div>
            </div>
            <router-link :to="{name:'PendingParkingPlaceInfo'}">
              <div class=" w-full flex justify-center mb-2 mt-2"><button class="text-white py-1 px-6 rounded ">More Details</button></div>
            </router-link>
          </div>
          </div>
      </n-card>
      <n-card title="UCSC Parking">
        <template #cover>
          <img src="../../assets/images/parking-place.png">
        </template>
        <div>
          <div class="bg-gray-100 rounded px-2 py-4">
            <div class="flex items-center gap-2">
              <div>
                <ParkingPlaceIdIcon class="w-4 h-4"/>
              </div>
              <div>
                P0002
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <ParkingPlaceLocation class="w-4 h-4"/>
              </div>
              <div>
                Reid Avenue, Colombo 7
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <PersonIcon class="w-4 h-4"/>
              </div>
              <div>
                Viharsha Jayathilaka
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <PhoneIcon class="w-4 h-4"/>
              </div>
              <div>
                +94773921108
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <EmailIcon class="w-4 h-4"/>
              </div>
              <div>
                viharshapramodi@gmail.com
              </div>
            </div>
            <router-link :to="{name:'PendingParkingPlaceInfo'}">
              <div class=" w-full flex justify-center mb-2 mt-2"><button class="text-white py-1 px-6 rounded ">More Details</button></div>
            </router-link>
          </div>
          </div>
      </n-card>
      <n-card title="UCSC Parking">
        <template #cover>
          <img src="../../assets/images/parking-place.png">
        </template>
        <div>
          <div class="bg-gray-100 rounded px-2 py-4">
            <div class="flex items-center gap-2">
              <div>
                <ParkingPlaceIdIcon class="w-4 h-4"/>
              </div>
              <div>
                P0002
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <ParkingPlaceLocation class="w-4 h-4"/>
              </div>
              <div>
                Reid Avenue, Colombo 7
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <PersonIcon class="w-4 h-4"/>
              </div>
              <div>
                Viharsha Jayathilaka
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <PhoneIcon class="w-4 h-4"/>
              </div>
              <div>
                +94773921108
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <EmailIcon class="w-4 h-4"/>
              </div>
              <div>
                viharshapramodi@gmail.com
              </div>
            </div>
            <router-link :to="{name:'PendingParkingPlaceInfo'}">
              <div class=" w-full flex justify-center mb-2 mt-2"><button class="text-white py-1 px-6 rounded ">More Details</button></div>
            </router-link>
          </div>
          </div>
      </n-card>
    </div>
    <div class="w-full flex justify-center">
      <Pagination class="mt-10" :total="100" :page-size="10" />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import AdminLayout from "../../layouts/AdminLayout.vue";
import { SearchOutline } from '@vicons/ionicons5';
import ParkingPlaceLocation from '../../assets/icons/ParkingPlaceLocation.vue';
import PersonIcon from '../../assets/icons/PersonIcon.vue';
import  PhoneIcon  from '../../assets/icons/PhoneIcon.vue';
import EmailIcon from '../../assets/icons/EmailIcon.vue';
import ParkingPlaceIdIcon from '../../assets/icons/ParkingPlaceIdIcon.vue';
import Pagination from '../../components/Pagination.vue';


const selectedValue =  ref(null);
const options =  [
        {
          label: 'Newly Registered Parkings',
          value: 'new'
        },
        {
          label: 'Parkings Under Inspections',
          value: 'under_inspections'
        },
        {
          label: "Verified Parkings",
          value: 'verified'
        }   
];
</script>