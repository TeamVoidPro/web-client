<template>
  <div class="w-full h-30em">
    <qrcode-stream v-if="isShowingCamera" @init="onInit" @detect="onDetect" @decode="onDecode"></qrcode-stream>
    <div class="text-xl flex gap-3 font-semibold mt-3">
      <div>Scanning</div>
      <n-space>
        <n-spin size="small"></n-spin>
      </n-space>
    </div>

    <div>
<!--      <n-button @click="showModal = true">-->
<!--        Start Me up-->
<!--      </n-button>-->
      <n-modal v-model:show="showModal">
        <n-card
            style="width: 45em"
            title="Reservation Details"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
        >
          <template #header-extra>
            <CloseIcon class="cursor-pointer text-red-600 w-6 h-6" @click="showModal = false" />
          </template>

          <div class="flex justify-between">
            <div class="w-[49%]">
              <div class="flex flex-col items-center text-center space-y-3">
                <img src="../../assets/images/Success.gif" alt=""
                  class="object-cover transform  w-20 h-20">
                <div class="text-2xl font-semibold text-[#77b43f]">Vehicle parked in</div>
                <div class="text-2xl font-semibold text-[#77b43f]">slot #{{results.slotNumber}}</div>
              </div>
              <div class="mt-5 space-y-3">
                <div>
                  <div class="font-semibold text-lg">Parking duration</div>
                  <div class="ps-5"><span>{{results.reservationStartedAt}}</span> to <span>{{results.reservationEndedAt}}</span></div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Vehicle type:</div>
                  <div class="ps-5">{{results.vehicleType}}</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Reservation type:</div>
                  <div class="ps-5">Zone Reservation</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Reservation fee:</div>
                  <div class="ps-5">Rs {{results.reservationAmount}}.00</div>
                </div>
              </div>
            </div>
            <div class="w-[49%]">
              <div class="space-y-3">
                <div>
                  <div class="font-semibold text-lg">Reservation ID:</div>
                  <div class="ps-5">{{results.reservationId}}</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Customer name:</div>
                  <div class="ps-5">{{results.name}}</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Reserved at:</div>
                  <div class="ps-5">{{results.reservedAt}}</div>
                </div>
              </div>
              <div class="mt-5 space-y-2">
                <div>
                  <div class="font-semibold text-lg">Vehicle number:</div>
                  <div class="ps-5">{{results.vehicleNumber}}</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Vehicle model:</div>
                  <div class="ps-5">{{results.vehicleModel}}</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Reservation zone:</div>
                  <div class="ps-5">{{results.zoneName}}</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Reservation status:</div>
                  <div class="ps-5">{{results.reservationStatus}}</div>
                </div>

              </div>
            </div>
          </div>
          <div class="w-full mt-3">
            <div class="font-semibold text-lg">Additional notes:</div>
            <div class="ps-5">{{results.additionalNote}}</div>
          </div>

          <template #footer>

          </template>
        </n-card>
      </n-modal>
    </div>
  </div>
</template>

<style>
canvas {
  display: none;
}
</style>

<script setup lang="ts">
import {QrcodeStream} from "vue-qrcode-reader";
import {ref} from "vue";
import CloseIcon from "@assets/icons/CloseIcon.vue";
import {reservationStore} from "@store/reservationStore.ts";
import {slotStore} from "@store/slotStore.ts";

const isShowingCamera = ref(false);
const result = ref("");
const showModal = ref(false);
const props = defineProps<{
  message: boolean;
}>();

isShowingCamera.value = props.message;

const reservation_store = reservationStore();
const results = ref<any>([]);

function onDecode(content: string) {
  console.log(content);
}

async function onDetect(promise: any) {
  try {
    result.value = await promise;
    if(result.value) {
      reservation_store.getReservationById(result.value[0].rawValue)
          .then((response: any) => {
            results.value = response.data;

            const slot_store = slotStore()

            slot_store.updateSlotState(results.value.slotId, "Parked")
                .then((response: any) => {
                  console.log(response);
                }).catch((error: any) => {
              console.log(error);
            });
          }).catch((error: any) => {
        console.log(error);
      });
      showModal.value = true;
    }
  } catch (error: any) {
    console.log(error);
  }
}

async function onInit (promise: any) {
  // show loading indicator

  try {
    const { capabilities } = await promise
    console.log('Camera capabilities', capabilities)
    // successfully initialized
  } catch (error: any) {
    if (error.name === 'NotAllowedError') {
      // user denied camera access permisson
      console.log('User denied camera access permission')
    } else if (error.name === 'NotFoundError') {
      // no suitable camera device installed
      console.log('No suitable camera device installed')
    } else if (error.name === 'NotSupportedError') {
      // page is not served over HTTPS (or localhost)
      console.log('Page is not served over HTTPS (or localhost)')
    } else if (error.name === 'NotReadableError') {
      // maybe camera is already in use
      console.log('Camera is already in use')
    } else if (error.name === 'OverconstrainedError') {
      // did you requested the front camera although there is none?
      console.log('Front camera unavailable')
    } else if (error.name === 'StreamApiNotSupportedError') {
      // browser seems to be lacking features
      console.log('Browser seems to be lacking features (WebRTC, Canvas)')
    }
  } finally {
    // hide loading indicator
  }
}
</script>

