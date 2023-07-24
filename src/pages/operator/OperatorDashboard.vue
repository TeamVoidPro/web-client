<template>
  <OperatorLayout>
    <div>
      <div class="flex gap-10">

        <div class="py-5 bg-white rounded-xl shadow flex flex-col items-center w-[20%] justify-center">
          <img src="../../assets/images/car-svgrepo-com.svg" alt=""
            class="w-12 h-12">
          <div class="text-4xl font-bold"><span class="text-green-500">35</span>/60</div>
          <div class="mt-2 font-semibold text-lg">Free Slots</div>
          <div class="flex gap-3 items-center">
            <img src="../../assets/images/refresh-svgrepo-com.svg" alt="" class="w-5 h-5">
            <div>Last 5 minutes</div>
          </div>
        </div>

        <div class="py-5 px-10 bg-white rounded-xl shadow flex flex-col items-center w-[20%]">
          <img src="../../assets/images/booking.png" alt=""
            class="w-12 h-12">
          <div class="text-4xl font-bold">23</div>
          <div class="mt-2 font-semibold text-lg text-center">Upcoming Reservations</div>
          <div class="flex gap-3 items-center">
            <img src="../../assets/images/fast-forward-double-right-arrows-symbol.png" alt="" class="w-5 h-5">
            <div>For Today</div>
          </div>
        </div>

      </div>
    </div>
  </OperatorLayout>
</template>

<script setup
        lang = "ts">

import OperatorLayout from "../../layouts/OperatorLayout.vue";
</script>
