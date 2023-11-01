<template>
  <OperatorLayout>
    <div class="flex w-full gap-3">
      <div class="w-44 h-10 late-departures-color rounded flex gap-2 px-2">
        <div class="flex justify-center items-center">
          <img class="w-5 h-5"   src="../../assets/images/warning.png" alt="">
        </div>
        <div class="flex justify-center items-center font-bold">
          Late Departures
        </div>
      </div>
      <div class="w-44 h-10 payment-history-color rounded flex gap-2 px-2">
        <div class="flex justify-center items-center">
          <img class="w-5 h-5"   src="../../assets/images/clock.png" alt="">
        </div>
        <div class="flex justify-center items-center font-bold">
          Payment History
        </div>
      </div>
    </div>
    <div class=" mt-6 w-[362px] h-10 bg-[#F12C38]/10 rounded flex gap-2 justify-center items-center" >
      <img class="w-5 h-5" src="../../assets/images/Vector.png" alt="">
      <p class="font-bold">Surcharge/30mins</p>
      <p class="price-tag-font-color font-bold text-xl">LKR 250.00</p>
    </div>
    <div class="bg-white h-[15vh] w-full mt-5 rounded drop-shadow-lg flex pl-6 ">

      <div class="flex flex-col justify-center items-center">
        <p class="font-bold text-2xl">Slot:</p>
        <p class="font-semibold text-5xl">#23</p>
      </div>
      <div class="flex justify-center items-center pl-8 pr-8">
        <div class="border-r-2  border-[#8D8D8D] h-[80%] "></div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="font-bold text-2xl">Customer Details:</p>
        <p class="font-semibold text-lg">CAZ 3655</p>
        <p class="font-semibold">Mr. Amal Jayasinghe</p>
      </div>
      <div class="flex justify-center items-center  pl-8 pr-8">
        <div class="border-r-2  border-[#8D8D8D] h-[80%] "></div>
      </div>

      <div class="flex flex-col justify-center items-center">
        <p class="font-bold text-2xl">Time Exceeded:</p>
        <p class="font-semibold">1 hour 28 minutes</p>
      </div>
      <div class="flex justify-center items-center  pl-8 pr-8">
        <div class="border-r-2  border-[#8D8D8D] h-[80%] "></div>
      </div>
      <div class=" mt-6 w-[200px] h-10 bg-[#F12C38]/10 rounded flex justify-center items-center">
        <p class="price-tag-font-color font-bold text-2xl">LKR 250.00</p>
      </div>

    </div>

  </OperatorLayout>
</template>

<script setup lang="ts">
import OperatorLayout from "../../layouts/OperatorLayout.vue";
</script>