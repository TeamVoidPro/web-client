<script setup lang="ts">

import {ref} from "vue";

const reviews = ref([
  {
    reviewID: 1,
    picture:"/src/assets/images/user 1.svg",
    name: "John Doe",
    rate: 4,
    Timestamp: "3 days ago",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl.",
  },
  {
    reviewID: 2,
    picture:"/src/assets/images/user 1.svg",
    name: "David Peter",
    rate: 3,
    Timestamp: "3 days ago",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl.",
  },
  {
    reviewID: 3,
    picture:"/src/assets/images/user 1.svg",
    name: "Nel Mandel",
    rate: 4,
    Timestamp: "3 days ago",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl. Sed euismod, diam sit amet dictum ultrices, nunc ipsum ultricies libero, vitae tincidunt justo arcu quis nisl.",
  },


])

</script>
<template>
  <div  class="flex bg-accent w-screen h-screen p-8">
    <div class="flex justify-between gap-10">
        <div class="bg-white rounded-3xl p-8 h-[75%] w-[50%]">
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
              <div class="flex items-center justify-center gap-2">
                <div class="text-primary font-bold text-2xl">
                  5
                </div>
                <div class="bg-gray-200 rounded-2xl h-5 w-full"></div>
                <div class="text-primary font-bold text-xl">50.27%</div>
              </div>
              <div class="flex items-center justify-center gap-2">
                <div class="text-primary font-bold text-2xl">
                  4
                </div>
                <div class="bg-gray-200 rounded-2xl h-5 w-full"></div>
                <div class="text-primary font-bold text-xl">30.27%</div>
              </div>
              <div class="flex items-center justify-center gap-2">
                <div class="text-primary font-bold text-2xl">
                  3
                </div>
                <div class="bg-gray-200 rounded-2xl h-5 w-full"></div>
                <div class="text-primary font-bold text-xl">20.47%</div>
              </div>
              <div class="flex items-center justify-center gap-2">
                <div class="text-primary font-bold text-2xl">
                  2
                </div>
                <div class="bg-gray-200 rounded-2xl h-5 w-full"></div>
                <div class="text-primary font-bold text-xl">05.17%</div>
              </div>
              <div class="flex items-center justify-center gap-2">
                <div class="text-primary font-bold text-2xl">
                  1
                </div>
                <div class="bg-gray-200 rounded-2xl h-5 w-full"></div>
                <div class="text-primary font-bold text-xl">01.27%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-3xl p-8  w-[50%]">
          <div class="text-lg">
            All Reviews(54)
          </div>
          <div class="flex flex-col">
            <div>
              <div class="flex gap-2 border-b border-black py-2" v-for="review in reviews" :key="review.reviewID">
                <div class="w-2/5">
                  <img :src="review.picture" class="w-24 h-24" >
                </div>
                <div>
                  <div>
                    <div class="text-primary font-bold text-xl mb-1">
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
                    {{review.review}}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>