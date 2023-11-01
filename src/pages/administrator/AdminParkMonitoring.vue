<style scoped>
    .carousel-img {
      width: 100%;
      height: 240px;
      object-fit: cover;
    }
    </style>
<template>
  <AdminLayout>
    <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th>Parking Place ID</th>
        <th>Parking Place Name</th>
        <th>Verifier</th>
        <th>Verified Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="parkingPlace in parkingPlaces">
        <td>{{ parkingPlace.parkingPlaceId }}</td>
        <td>{{ parkingPlace.name }}</td>
        <td>{{ parkingPlace.parkingVerifier }}</td>
        <td>{{ parkingPlace.date }}</td>
        <td>
          <button @click="showModal = true" class="bg-white">
            <InfoIcon class="text-blue-700 w-8 h-8"/> 
          </button>
          <n-modal v-model:show="showModal">
            <n-card
              style="width: 1000px"
              title="Modal"
              :bordered="false"
              size="huge"
              role="dialog"
              aria-modal="true"
            >
            <template #header-extra>
              <CloseIcon @click = "showModal = false"  class="w-5 h-5 text-red-600"/>
            </template>
            <div class="flex">
        <div class="w-1/3 bg-white flex flex-col gap-5">
          <div>
            <n-carousel show-arrow>
              <img
                  class="carousel-img"
                  src="../../assets/images/parking-place.jpg"
              >
              <img
                  class="carousel-img"
                  src="../../assets/images/parking-place-2.jpg"
              >
              <img
                  class="carousel-img"
                  src="../../assets/images/parking-place-3.jpg"
              >
              <img
                  class="carousel-img"
                  src="../../assets/images/parking-place-4.jpg"
              >
            </n-carousel>
          </div>
          <div class="text-left px-4 pb-4">Parking is the act of stopping and disengaging a vehicle and leaving it unoccupied. Parking on one or both sides of a road is often permitted, though sometimes with restrictions. Some buildings have parking facilities for use of the buildings' users. Countries and local governments have rules[1] for design and use of parking spaces.
    
            Car parking is essential to car-based travel. Cars are typically stationary around 95 per cent of the time.[2] The availability and price of car parking supports and subsidize car dependency.[3] Car parking uses up a lot of urban land, especially in North America - as much as half in many North American city centers.[4]</div>
    
        </div>
    
        <div class="w-2/3 bg-white ml-4 pl-20 pt-3 flex flex-col gap-3">
          <n-table single-column :single-line="false">
            <tbody>
            <tr>
              <td>Location:</td>
              <td><a  href="https://maps.app.goo.gl/K3hoj2uWMgfEJiz87" class="underline">https://maps.app.goo.gl/K3hoj2uWMgfEJiz87</a></td>
            </tr>
            <tr>
              <td>Services Provide:</td>
              <td>
                <ul class="list-inside list-[square]">
                  <li>Mitigate Parking Abuse</li>
                  <li>Enhance Parking Efficiency</li>
                  <li>Improve Parking Experience</li>
                  <li>Reduce Traffic Congestion</li>
                  <li>Mitigate Carbon Footprint</li>
                  <li>Deter Anti-Social Behaviour</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Parking Owner:</td>
              <td>Viharsha Jayathilaka</td>
            </tr>
            <tr>
              <td>Parking Owner ID:</td>
              <td>A0001</td>
            </tr>
            <tr>
              <td>Parking Verifier:</td>
              <td>Danodya Supun</td>
            </tr>
            <tr>
              <td>Parking Place Verified Date:</td>
              <td>07/07/2020</td>
            </tr>
            <tr>
              <td>Compliance Monitoring Report</td>
              <td> </td>
            </tr>
            <tr>
              <td>Ratings</td>
              <td> </td>
            </tr>
            </tbody>
          </n-table>
        </div>
      </div>
            <template #footer>
              Footer
            </template>
          </n-card>
        </n-modal>
        </td>
      </tr>
     
    </tbody>
  </n-table>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from "../../layouts/AdminLayout.vue";
import InfoIcon from "../../assets/icons/InfoIcon.vue";
import {ref, onMounted} from "vue";
import CloseIcon from "../../assets/icons/CloseIcon.vue";
import {parkingPlaceStore} from "../../store/parkingPlaceStore";

const showModal = ref(false);
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
