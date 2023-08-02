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
                <div class="text-2xl font-semibold text-[#77b43f]">slot #20</div>
              </div>
              <div class="mt-5 space-y-3">
                <div>
                  <div class="font-semibold text-lg">Parking duration</div>
                  <div class="ps-5"><span>8.00 A.M</span> to <span>2.00 P.M</span></div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Vehicle type:</div>
                  <div class="ps-5">Car</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Reservation type:</div>
                  <div class="ps-5">Zone Reservation</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Reservation fee:</div>
                  <div class="ps-5">Rs 1600.00</div>
                </div>
              </div>
            </div>
            <div class="w-[49%]">
              <div class="space-y-3">
                <div>
                  <div class="font-semibold text-lg">Reservation ID:</div>
                  <div class="ps-5">RES-1234-1234</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Customer name:</div>
                  <div class="ps-5">Mr. Danodya Supun Ariyasinghe</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Reserved at:</div>
                  <div class="ps-5">2023-07-31 15:22</div>
                </div>
              </div>
              <div class="mt-5 space-y-2">
                <div>
                  <div class="font-semibold text-lg">Vehicle number:</div>
                  <div class="ps-5">ABC - 1234</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Vehicle model:</div>
                  <div class="ps-5">Premio</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Reservation zone:</div>
                  <div class="ps-5">Green Zone</div>
                </div>
                <div>
                  <div class="font-semibold text-lg">Reservation status:</div>
                  <div class="ps-5">Active</div>
                </div>

              </div>
            </div>
          </div>
          <div class="w-full mt-3">
            <div class="font-semibold text-lg">Additional notes:</div>
            <div class="ps-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut in iste! Aliquam, animi autem blanditiis, consectetur dolor eaque ipsam iusto labore.</div>
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

const isShowingCamera = ref(false);
const result = ref("");
const showModal = ref(false);
const props = defineProps<{
  message: boolean;
}>();

isShowingCamera.value = props.message;

function onDecode(content: string) {
  console.log(content);
}

async function onDetect(promise: any) {
  try {
    result.value = await promise;
    if(result.value) {
      console.log(result.value);
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

