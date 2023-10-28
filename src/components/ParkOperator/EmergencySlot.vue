<template>
  <div class="cursor-pointer">
    <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-gray-300/30 border-2 border-gray-600" @click="showModal = true">
      <div class="text-2xl">{{props.slot.slotNumber}}</div>
    </div>
    <n-modal v-model:show="showModal">
      <n-card
          style="width: 900px"
          title="Slot Details"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
      >
        <template #header-extra>
          <CloseIcon class="w-6 h-6 text-red-600" @click="showModal = false"/>
        </template>

          <div class="flex justify-between">
            <div class="w-[65%]">
              <div class="flex justify-around items-baseline">
                <div class="flex flex-col justify-center">
                  <div class="text-xl font-semibold">Slot Number</div>
                  <div class="text-center text-5xl mt-2">2</div>
                </div>
                <div class="flex flex-col justify-center">
                  <div class="text-xl font-semibold">Slot Status</div>
                  <div class="text-center text-lg text-gray-600 mt-2">Emergency</div>
                </div>
              </div>
              <div class="space-y-5 mt-5">
                <div class="flex justify-between">
                  <div class="w-[45%] flex gap-2">
                    <div class="font-semibold">Slot ID:</div>
                    <div>SLOT_1234_5678</div>
                  </div>
                  <div class="w-[45%] flex gap-2">
                    <div class="font-semibold">Zone:</div>
                    <div>Zone A</div>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="w-[45%] flex gap-2">
                    <div class="font-semibold">Slot Category:</div>
                    <div>Car/Van</div>
                  </div>
                  <div class="w-[45%] flex gap-2">
                    <div class="font-semibold">Dimensions:</div>
                    <div>17 x 8 Feets</div>
                  </div>
                </div>
                <div>
                  <div class="font-semibold">Slot Description:</div>
                  <div class="text-justify px-5 mt-3">
                    This is a parking slot that is specifically designed for electric vehicles. It typically has a charging station nearby.
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[30%] ps-[3%] border-l-2">
              <div class="text-lg font-semibold mb-3">Upcoming Reservations</div>
              <n-data-table
                  :columns="columns"
                  :data="data"
                  :row-props="rowProps"
                  :bordered="true"
                  :single-line="false"
              />
            </div>
          </div>
          <div class="w-full flex justify-center">
            <button class="px-20 rounded-lg cursor-pointer py-2 text-xl font-semibold bg-secondary text-white mt-10">Use Slot</button>
          </div>
        <template #footer>

        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import CloseIcon from "@assets/icons/CloseIcon.vue";
import {param} from "ts-interface-checker";

const showModal = ref(false)

const props = defineProps<{
  slot: object;
}>();

</script>