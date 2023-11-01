<script setup lang="ts">

import {ref} from "vue";
import ParkOwnerLayout from "@layouts/ParkOwnerLayout.vue";
import {NEllipsis,NPagination,NProgress} from "naive-ui"
import ReviewsDetails from "@components/ParkOwner/ReviewsDetails.vue";
import {parkingPlaceStore} from "@store/parkingPlaceStore.ts";


const ratings = ref([
  {
    ratingID: 1,
    rate: 5,
    percentage: 50,
  },
  {
    ratingID: 2,
    rate: 4,
    percentage: 30,
  },
  {
    ratingID: 3,
    rate: 3,
    percentage: 10,
  },
  {
    ratingID: 4,
    rate: 2,
    percentage: 12,
  },
  {
    ratingID: 5,
    rate: 1,
    percentage: 8,
  },
])

const placeStore =parkingPlaceStore();

</script>
<template>
  <ParkOwnerLayout>
  <div  class="flex w-full h-full pt-3">
    <div class="flex justify-center gap-4 items-start">
        <div class="bg-white flex flex-col rounded-3xl p-8 w-1/3 ml-2">
          <div class="flex flex-col">
            <div class="text-primary font-bold text-3xl mb-1.5">
              Reviews and Ratings
            </div>
            <div class="flex flex-between gap-3">
              <div class="text-primary text-center text-2xl">4.0</div>
              <div>
               <div class="flex gap-1 mb-1">
                <img src="../../assets/icons/star.svg">
                <img src="../../assets/icons/star.svg">
                <img src="../../assets/icons/star.svg">
                <img src="../../assets/icons/star.svg">
              </div>
               Based on {{(placeStore.reviewData.parkingPlaceRatings).length}} reviews
              <div>
          </div>
        </div>
            </div>
            <div class="bg-primary h-0.5"></div>
            <div class="mb-4 mt-4">
              <div class="flex items-center justify-center gap-2" v-for="rating in ratings" :key="rating.ratingID">
                <div class="text-primary font-bold text-2xl w-5">
                  {{rating.rate}}
                </div>
                <n-progress
                    type="line"
                    :percentage="rating.percentage"
                    :height="24"
                    :border-radius="4"
                    :fill-border-radius="0"
                />
              </div>
            </div>
          </div>
        </div>
        <ReviewsDetails></ReviewsDetails>
    </div>
  </div>
  </ParkOwnerLayout>
</template>
<style scoped>

</style>