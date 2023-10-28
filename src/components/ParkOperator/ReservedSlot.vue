<template>
  <div class="cursor-pointer">
    <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-yellow-300/30 border-2 border-yellow-600" @click="showModal = true">
      <div class="text-2xl">{{ props.slot.slotNumber }}</div>
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
                <div class="text-center text-5xl mt-2">6</div>
              </div>
              <div class="flex flex-col justify-center">
                <div class="text-xl font-semibold">Slot Status</div>
                <div class="text-center text-lg text-yellow-600 mt-2">Reserved</div>
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
              <div>
                <div class="font-semibold">Current Reservation:</div>
                <div class="flex justify-around mt-2">
                  <div class="flex gap-2">
                    <div class="font-semibold">From:</div>
                    <div>8.00 AM</div>
                  </div>
                  <div class="flex gap-2">
                    <div class="font-semibold">To:</div>
                    <div>11.00 AM</div>
                  </div>

                </div>
              </div>
              <div class="flex justify-between">
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Reservation ID:</div>
                  <div>RES_1234_5678</div>
                </div>
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Vehicle Number:</div>
                  <div>ABC-1945</div>
                </div>
              </div>
              <div class="flex justify-between">
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Vehicle Owner:</div>
                  <div>Raveen Shahasra</div>
                </div>
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Contact Number:</div>
                  <div>077 23 96 456</div>
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

        <template #footer>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import CloseIcon from "@assets/icons/CloseIcon.vue";
import {useMessage} from "naive-ui";

const message = useMessage();

const showModal = ref(false)

const props = defineProps<{
  slot: object;
}>();

const rowProps = () => {
  return {
    class: "cursor-pointer",
    onclick: () => {
      message.info("Clicked!");
    },
  };
}

const columns = [
  {
    title: 'From',
    key: 'from'
  },
  {
    title: 'To',
    key: 'to'
  },
]

const data = [
  {
    key: 0,
    from: '8:00 AM',
    to: '12:00 PM'
  },
  {
    key: 0,
    from: '1:00 PM',
    to: '3:00 PM'
  },
  {
    key: 0,
    from: '4:00 PM',
    to: '6:00 PM'
  },
  {
    key: 0,
    from: '8:30 PM',
    to: '11:00 PM'
  }
]
</script>