<template>
  <OperatorLayout>
    <div class="flex gap-3">
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
    <div class="bg-amber-200 h-[15vh] w-full mt-5 rounded drop-shadow-lg flex ">

      <div class="flex flex-col justify-center items-center">
        <p class="font-bold">Slot:</p>
        <p class="font-semibold text-5xl">#23</p>
      </div>
      <div class=" h-[10vh] border-l border-black m-4 scale-100">

      </div>
      <div class="flex flex-col justify-center items-center border-r-4">
        <p class="font-bold">Slot:</p>
        <p class="font-semibold text-5xl">#23</p>
      </div>
      <div class="flex flex-col justify-center items-center border-r-4">
        <p class="font-bold">Slot:</p>
        <p class="font-semibold text-5xl">#23</p>
      </div>

    </div>

  </OperatorLayout>
</template>

<script setup lang="ts">
import OperatorLayout from "../../layouts/OperatorLayout.vue";
</script>