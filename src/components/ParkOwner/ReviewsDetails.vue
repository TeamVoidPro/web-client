<script setup lang="ts">

import {NEllipsis, NPagination} from "naive-ui";
import {onBeforeMount, onMounted, ref, watch} from "vue";
import {useParkingOwnerRegistrationStore} from "@store/parkingOwnerRegisterStore.ts";
import {parkingPlaceStore} from "@store/parkingPlaceStore.ts";

const parkingOwnerRegistrationStore= useParkingOwnerRegistrationStore();
const placeStore =parkingPlaceStore();


const reviews = ref({})
let driver=ref({})

onMounted(() => {
  placeStore.getReviewData()
      .then((res : any) => {
        reviews.value = res.parkingPlaceRatings
        const tmpRviews = res.parkingPlaceRatings
        for (const review of tmpRviews) {
          const driverID = review.driverId
          console.log(driverID)
          parkingOwnerRegistrationStore.getDriverDetails(driverID)
              .then((res:any)=>{
                driver.value=res.driver
                console.log(driver.value)
              }).catch((err:any)=>{
            throw err
          })
        }
      }).catch((err : any) => {
        throw err
      })


})

//watcher to get the current parking place id

watch(() => placeStore.currentParkingPlaceId, (newValue, oldValue) => {
  placeStore.getReviewData()
      .then((res : any) => {
        reviews.value = res.parkingPlaceRatings
        console.log(reviews.value)
      }).catch((err : any) => {
    throw err
  })
})
</script>

<template>
  <div class="bg-white h-fit rounded-3xl p-5 w-3/5">
    <div class="text-lg">
      All Reviews ({{reviews.length}})
    </div>
    <div class="flex flex-col">
      <div class="flex gap-2 border-b border-black py-2" v-for="review in reviews" :key="review.reviewID">
        <div class="w-2/5">
          <img src="../../assets/images/user1.svg" class="w-24 h-24" >
        </div>
        <div>
          <div>
            <div class="text-primary  text-xl mb-1">
              {{review.driver.firstName}} {{review.driver.lastName}}
            </div>
          </div>
          <div class="flex gap-1 mb-1" >
            <img src="../../assets/icons/star.svg" class="h-3 w-3"  v-for="i in Math.floor(review.rating)" :key="i">
          </div>
          <div class="text-primary text-sm font-bold">
            {{new Date(review.ratingDate).toDateString()}}
          </div>
          <div class="text-primary text-sm">
            <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
              {{review.comment}}
            </n-ellipsis>

          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center mt-2">
      <n-pagination v-model:page="page" :page-count="5" />
    </div>
  </div>
</template>

<style scoped>

</style>