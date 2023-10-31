<template>
<AdminLayout>
  <div class="flex justify-between mb-4">
    <div class="font-semibold text-xl">Kalutara Park</div>
    <div class="font-semibold text-xl">P0001</div>
  </div>
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
<!--      <div class="flex gap-20 justify-items-start">-->
<!--        <p class="font-bold">Location:</p>-->
<!--        <a  href="https://maps.app.goo.gl/K3hoj2uWMgfEJiz87" class="underline">https://maps.app.goo.gl/K3hoj2uWMgfEJiz87</a>-->
<!--      </div>-->
<!--      <div class="flex gap-20">-->
<!--        <p class="font-bold">Services Provide:</p>-->
<!--        <ul class="list-inside list-[square]">-->
<!--          <li>Mitigate Parking Abuse</li>-->
<!--          <li>Enhance Parking Efficiency</li>-->
<!--          <li>Improve Parking Experience</li>-->
<!--          <li>Reduce Traffic Congestion</li>-->
<!--          <li>Mitigate Carbon Footprint</li>-->
<!--          <li>Deter Anti-Social Behaviour</li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <div class="flex gap-20">-->
<!--        <p class="font-bold">Parking Owner:</p>-->
<!--        <p>Viharsha Jayathilaka</p>-->
<!--      </div>-->
<!--      <div class="flex gap-20">-->
<!--        <p class="font-bold">Parking Owner ID:</p>-->
<!--        <p>A0001</p>-->
<!--      </div>-->
<!--      <div class="flex gap-20">-->
<!--        <p class="font-bold">Parking Verifier:</p>-->
<!--        <p>Danodya Supun</p>-->
<!--      </div>-->
<!--      <div class="flex gap-20">-->
<!--        <p class="font-bold">Parking Place Verified Date:</p>-->
<!--        <p>27/04/2020</p>-->
<!--      </div>-->
<!--      <div class="flex gap-20">-->
<!--        <p class="font-bold">Compliance Monitoring Report</p>-->
<!--        <p>27/04/2020</p>-->
<!--      </div>-->
<!--      <div class="flex gap-20">-->
<!--        <p class="font-bold">Documents</p>-->
<!--        <p>27/04/2020</p>-->
<!--      </div>-->
<!--      <div class="flex gap-20">-->
<!--        <p class="font-bold">Ratings</p>-->
<!--        <div>-->
<!--          <button class="text-secondary" @click="showModal = true">Reviews</button>-->
<!--          <n-modal v-model:show="showModal">-->
<!--            <n-card-->
<!--                style="width: 600px"-->
<!--                title="P0001"-->
<!--                :bordered="false"-->
<!--                size="huge"-->
<!--                role="dialog"-->
<!--                aria-modal="true"-->
<!--            >-->
<!--              <template #header-extra>-->
<!--                <CloseIcon class="text-red-600 w-5 h-5" />-->
<!--              </template>-->
<!--              <div class="flex flex-col">-->
<!--                <div class="flex justify-center pt-0">-->
<!--                  <StarIcon class="text-yellow-300 w-14 h-20  "/>-->
<!--                  <p class="text-5xl font-medium">5.0</p>-->
<!--                </div>-->
<!--                <div class="flex flex-col">-->
<!--                  <div class="flex gap-2 text-center">-->
<!--                    <img class="w-10 h-10" src="../../assets/images/user.jpg">-->
<!--                    <div class="flex justify-center">Danodya Supun</div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->



<!--            </n-card>-->
<!--          </n-modal>-->
<!--        </div>-->
<!--      </div>-->

    </div>
  </div>
</AdminLayout>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>

<script setup lang="ts">
import AdminLayout from "@layouts/AdminLayout.vue";
import { defineComponent, ref } from 'vue'
import StarIcon from "@assets/icons/StarIcon.vue";
import CloseIcon from "@assets/icons/CloseIcon.vue";

const showModal = ref(false)
</script>