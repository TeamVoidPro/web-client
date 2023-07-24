<script setup lang="ts">

import {ref} from "vue";
import ParkOwnerLayout from "@layouts/ParkOwnerLayout.vue";
import {NEllipsis,NPagination,NProgress} from "naive-ui"

const reviews = ref([
  {
    reviewID: 1,
    picture:"/src/assets/images/user1.svg",
    name: "John Doe",
    rate: 4,
    Timestamp: "3 days ago",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl.",
  },
  {
    reviewID: 2,
    picture:"/src/assets/images/user1.svg",
    name: "David Peter",
    rate: 3,
    Timestamp: "3 days ago",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl.",
  },
  {
    reviewID: 3,
    picture:"/src/assets/images/user1.svg",
    name: "Nel Mandel",
    rate: 4,
    Timestamp: "3 days ago",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl.",
  },
])

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
              <div class="text-primary text-center text-2xl">
            4.0
            </div>
              <div>
               <div class="flex gap-1 mb-1">
                <img src="../../assets/icons/star.svg">
                <img src="../../assets/icons/star.svg">
                <img src="../../assets/icons/star.svg">
                <img src="../../assets/icons/star.svg">
              </div>
               Based on 54 reviews
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
        <div class="bg-white h-fit rounded-3xl p-5 w-3/5">
          <div class="text-lg">
            All Reviews(54)
          </div>
          <div class="flex flex-col">
              <div class="flex gap-2 border-b border-black py-2" v-for="review in reviews" :key="review.reviewID">
                <div class="w-2/5">
                  <img :src="review.picture" class="w-24 h-24" >
                </div>
                <div>
                  <div>
                    <div class="text-primary  text-xl mb-1">
                      {{review.name}}
                    </div>
                  </div>
                  <div class="flex gap-1 mb-1">
                    <img src="../../assets/icons/star.svg" class="h-3 w-3">
                    <img src="../../assets/icons/star.svg" class="h-3 w-3">
                    <img src="../../assets/icons/star.svg" class="h-3 w-3">
                    <img src="../../assets/icons/star.svg" class="h-3 w-3">
                  </div>
                  <div class="text-primary text-sm">
                    {{review.Timestamp}}
                  </div>
                  <div class="text-primary text-sm">
                    <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
                      {{review.review}}
                    </n-ellipsis>

                  </div>
                </div>
              </div>
          </div>
          <div class="w-full flex items-center justify-center mt-2">
            <n-pagination v-model:page="page" :page-count="10" />
          </div>
        </div>
    </div>
  </div>
  </ParkOwnerLayout>
</template>
<style scoped>

</style>