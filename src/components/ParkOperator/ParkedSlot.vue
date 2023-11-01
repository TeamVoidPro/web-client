
<template>
  <div class="cursor-pointer">
    <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-red-300/30 border-2 border-red-600" @click="showModal = true">
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
                <div class="text-center text-5xl mt-2">{{props.slot.slotNumber}}</div>
              </div>
              <div class="flex flex-col justify-center">
                <div class="text-xl font-semibold">Slot Status</div>
                <div class="text-center text-lg text-red-600 mt-2">{{props.slotDetails.slotStatus}}</div>
              </div>
            </div>
            <div class="space-y-5 mt-5">
              <div class="flex justify-between">
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Slot ID:</div>
                  <div>{{props.slotDetails.slotId}}</div>
                </div>
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Zone:</div>
                  <div>{{props.slotDetails.zoneName}}</div>
                </div>
              </div>
              <div class="flex justify-between">
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Slot Category:</div>
                  <div>{{props.slotDetails.slotCategory}}</div>
                </div>
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Dimensions:</div>
                  <div>17 x 8 Feets</div>
                </div>
              </div>
              <div>
                <div class="font-semibold">Slot Description:</div>
                <div class="text-justify px-5 mt-3">
                  {{props.slotDetails.slotDescription}}
                </div>
              </div>
              <div>
                <div class="font-semibold">Current Reservation:</div>
                <div class="flex justify-around mt-2">
                  <div class="flex gap-2">
                    <div class="font-semibold">From:</div>
                    <div>{{props.slotDetails.reservationStartedAt}}</div>
                  </div>
                  <div class="flex gap-2">
                    <div class="font-semibold">To:</div>
                    <div>{{props.slotDetails.reservationEndedAt}}</div>
                  </div>

                </div>
              </div>
              <div class="flex justify-between">
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Reservation ID:</div>
                  <div>{{props.slotDetails.reservationId}}</div>
                </div>
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Vehicle Number:</div>
                  <div>{{props.slotDetails.vehicleNumber}}</div>
                </div>
              </div>
              <div class="flex justify-between">
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Vehicle Owner:</div>
                  <div>{{props.slotDetails.vehicleOwner}}</div>
                </div>
                <div class="w-[45%] flex gap-2">
                  <div class="font-semibold">Contact Number:</div>
                  <div>{{props.slotDetails.contactNumber}}</div>
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

            <div class="w-full flex justify-center mt-10">
              <n-button type="primary" @click="showModal1 = true">
                Release Slot
              </n-button>
              <n-modal v-model:show="showModal1">
                <n-card
                    style="width: 35em"
                    title="Do you want to release this slot?"
                    :bordered="false"
                    size="huge"
                    role="dialog"
                    aria-modal="true"
                >
                  <template #header-extra>
                    <CloseIcon class="cursor-pointer text-red-600 w-6 h-6" @click="showModal1 = false" />
                  </template>

                  <div class="flex justify-around">
                    <n-button type="primary" round @click="updateSlot()">
                      Yes
                    </n-button>
                    <n-button type="warning" round @click="showModal1 =  false">
                      No
                    </n-button>
                  </div>

                  <template #footer>

                  </template>
                </n-card>
              </n-modal>

            </div>

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
import {slotStore} from "@store/slotStore.ts";
import {useMessage} from "naive-ui";

const props = defineProps<{
  slot: object;
  slotDetails: object;
}>();


const showModal = ref(false)
const showModal1 = ref(false)
const slot_store = slotStore()
const message = useMessage()

const rowProps = () => {
  return {
    class: "cursor-pointer",
    onclick: () => {
      message.info("Clicked!");
    },
  };
}


function updateSlot()
{
  slot_store.updateSlotState(props.slotDetails.slotId, "Available")
      .then((res : any) => {
        window.location.reload()
        message.create(res.message)
      }).catch((err : any) => {
        throw err;
  })
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