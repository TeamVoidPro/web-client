<template>
  <AdminLayout>
    <div class="flex justify-between">
      <div class="w-[20rem]">
        <n-input placeholder="Search Parking Place">
          <template #prefix>
            <n-icon :component="SearchOutline" />
          </template>
        </n-input>
      </div>
      <div>
        Overall Rating
        <div class="w-[20rem]">
        <n-space vertical>
          <n-slider v-model:value="value" range :marks="marks" :step="10" />
        </n-space>
      </div>
      </div>
       
    </div>
    <div class="mt-4">
      <n-table :bordered="false" :single-line="false">
        <thead>
        <tr>
          <th>Parking Place ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Parking Owner</th>
          <th>Parking Operator</th>
          <th>Parking Verifier</th>
          <th>  </th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="parkingPlace in parkingPlaces">

          <td>{{ parkingPlace.parkingPlaceId }}</td>
          <td>{{ parkingPlace.name }} </td>
          <td>{{parkingPlace.location}}</td>
          <td>{{ parkingPlace.parkingOwner }}</td>
          <td>{{ parkingPlace.parkingOperator }}</td>
          <td>{{ parkingPlace.parkingVerifier }}</td>
          <td>
            <router-link :to="{name: 'ParkingPlaceInfo'}"><InfoIcon class="text-blue-700 w-8 h-8"/></router-link>
          </td>

        </tr>
        </tbody>
      </n-table>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from "../../layouts/AdminLayout.vue";
import InfoIcon from "@assets/icons/InfoIcon.vue";
import { SearchOutline } from '@vicons/ionicons5'
import {ref, onMounted} from "vue";
import { parkingPlaceStore } from "../../store/parkingPlaceStore";//file ekk athule function ekak

const value =  ref([50, 70]);
const marks =  {
        0: 'Poor',
        50: 'Average',
        100: 'Excelent'
};
const parkingPlaces = ref(Array());

onMounted(() => {
  const parkingPlacesStore = parkingPlaceStore();
  parkingPlacesStore.getAllParkingPlaces()
  .then((res)=>{
    parkingPlaces.value = res.data;
    // console.log(parkingPlaces.value)
    
  })
  .catch((err)=> {
    throw err
  })
  
})
</script>