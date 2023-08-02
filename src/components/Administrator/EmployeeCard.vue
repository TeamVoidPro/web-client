<template>
  <n-card>
    <div class="flex justify-between items-center">
      <n-checkbox v-model:checked="value"/>
      <div class="px-3 py-0.5 bg-green-100 text-green-600 rounded-xl border border-green-600">Active</div>
    </div>
    <div class="flex flex-col items-center justify-center mt-3 text-center">
      <img src="../../assets/images/user2.jpg" alt=""
        class="w-24 h-24 rounded-full object-cover">
      <div class="text-xl font-semibold">Leslie Alexander</div>
      <div class="text">Parking Verifier</div>
    </div>
    <div class="p-2 bg-gray-100 mt-2">
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xs font-semibold">Employee ID</div>
          <div class="text-xs">EMP_0001_1234</div>
        </div>
        <div>
          <div class="text-xs font-semibold">Date Hired</div>
          <div class="text-xs">2020-03-23</div>
        </div>
      </div>
      <div class="mt-3">
        <div class="flex flex-col space-y-1">
          <div class="flex items-center gap-2">
            <EmailIcon class="w-4 h-4"/>
            <div>lesliealex@gmail.com</div>
          </div>
          <div class="flex items-center gap-2">
            <PhoneIcon class="w-4 h-4"/>
            <div>+94 76 602 3645</div>
          </div>
        </div>
      </div>
    </div>
  </n-card>
</template>

<style scoped>
.n-card {
  max-width: 260px;
}

.n-card__content{
  padding: 10px !important;
}

</style>

<script setup lang="ts">
import { ref } from "vue";
import EmailIcon from "../../assets/icons/EmailIcon.vue";
import PhoneIcon from "../../assets/icons/PhoneIcon.vue";
import {NConfigProvider, NCard, NCheckbox} from "naive-ui";

const value = ref(false);

</script>
