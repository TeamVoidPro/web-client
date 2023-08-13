<script setup lang="ts">

import {NEllipsis, NPagination} from "naive-ui";
import {ref} from "vue";

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
</script>

<template>
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
</template>

<style scoped>

</style>