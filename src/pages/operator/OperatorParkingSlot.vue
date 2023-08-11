<template>
  <OperatorLayout>
    <div class="flex justify-between">
      <div class="w-[57%] space-y-4">
        <ParkingZone />
        <div>
          <div class="text-xl font-semibold mb-5">Zone B</div>
          <table class="border-collapse w-full">
            <tr>
              <td class=" p-2 border-b-4 border-x-4 border-blue-950">
                <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-green-300/30 border-2 border-green-600">
                  <div class="text-2xl">10</div>
                </div>
              </td>
              <td class=" p-2 border-b-4 border-x-4 border-blue-950">
                <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-red-300/30 border-2 border-red-600">
                  <div class="text-2xl">9</div>
                </div>
              </td>
              <td class=" p-2 border-b-4 border-x-4 border-blue-950">
                <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-red-300/30 border-2 border-red-600">
                  <div class="text-2xl">8</div>
                </div>
              </td>
              <td class=" p-2 border-b-4 border-x-4 border-blue-950">
                <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-green-300/30 border-2 border-green-600">
                  <div class="text-2xl">7</div>
                </div>
              </td>
              <td class=" p-2 border-b-4 border-x-4 border-blue-950">
                <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-yellow-300/30 border-2 border-yellow-600">
                  <div class="text-2xl">6</div>
                </div>
              </td>
            </tr>
            <tr>
              <td class=" p-2 border-t-4 border-x-4 border-blue-950" >
                <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-red-300/30 border-2 border-red-600">
                  <div class="text-2xl">1</div>
                </div>
              </td>
              <td class=" p-2 border-t-4 border-x-4 border-blue-950" >
                <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-green-300/30 border-2 border-green-600">
                  <div class="text-2xl">2</div>
                </div>
              </td>
              <td class=" p-2 border-t-4 border-x-4 border-blue-950" >
                <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-yellow-300/30 border-2 border-yellow-600">
                  <div class="text-2xl">3</div>
                </div>
              </td>
              <td class=" p-2 border-t-4 border-x-4 border-blue-950" >
                <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-red-300/30 border-2 border-red-600">
                  <div class="text-2xl">4</div>
                </div>
              </td>
              <td class=" p-2 border-t-4 border-x-4 border-blue-950" >
                <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-red-300/30 border-2 border-red-600">
                  <div class="text-2xl">5</div>
                </div>
              </td>
            </tr>
          </table>
        </div>

      </div>
      <div class="w-[39%]">
        <div>
          <div class="text-xl font-semibold mb-5">Parking place layout</div>
          <img src="../../assets/images/ParkingLot.png" alt=""
               class="rounded-lg shadow">
        </div>
        <div class="flex justify-between my-4">
          <div class="flex gap-1">
            <div class="p-2 rounded-full bg-green-300/30 border-2 border-green-600"></div>
            <div>-</div>
            <div>Available</div>
          </div>
          <div class="flex gap-1">
            <div class="p-2 rounded-full bg-yellow-300/30 border-2 border-yellow-600"></div>
            <div>-</div>
            <div>Reserved</div>
          </div>
          <div class="flex gap-1">
            <div class="p-2 rounded-full bg-red-300/30 border-2 border-red-600"></div>
            <div>-</div>
            <div>Parked</div>
          </div>
          <div class="flex gap-1">
            <div class="p-2 rounded-full bg-gray-300/30 border-2 border-gray-600"></div>
            <div>-</div>
            <div>Emergency</div>
          </div>
        </div>

        <div class="mt-10">
          <div class="text-xl font-semibold mb-6">Available slots</div>
          <n-table :bordered="false" :single-line="false" class="shadow">
            <thead>
            <tr class="text-center">
              <th>#</th>
              <th>Slot</th>
              <th>NRF</th>
              <th>NRT</th>
              <th>ATD</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Zone A - Slot 10</td>
              <td>2.00 PM</td>
              <td>5.00 PM</td>
              <td>3h 20mins</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Zone A - Slot 7</td>
              <td>2.00 PM</td>
              <td>5.00 PM</td>
              <td>3h 20mins</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Zone B - Slot 2</td>
              <td>2.00 PM</td>
              <td>5.00 PM</td>
              <td>3h 20mins</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Zone B - Slot 10</td>
              <td>2.00 PM</td>
              <td>5.00 PM</td>
              <td>3h 20mins</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Zone B - Slot 7</td>
              <td>2.00 PM</td>
              <td>5.00 PM</td>
              <td>3h 20mins</td>
            </tr>
            </tbody>
          </n-table>
          <div class="flex  justify-between flex-wrap">
            <div class="my-1.5">NRF - Next Reservation From</div>
            <div class="my-1.5">NRT - Next Reservation To</div>
            <div class="my-1.5">ATD - Available Time Duration</div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-10 right-10">
      <button @click="showModal = true" class="border-2 border-green-600 bg-green-300/30 rounded opacity-50 hover:opacity-100">
        <ReservationIcon class="w-12 h-12 text-green-600"/>
      </button>
      <n-modal v-model:show="showModal">
        <n-card
            style="width: 900px"
            title="Create Reservation"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
        >
          <template #header-extra>
            <CloseIcon class="w-6 h-6 text-red-600"/>
          </template>

          <template #footer>

          </template>
        </n-card>
      </n-modal>
    </div>
  </OperatorLayout>
</template>

<script lang="ts" setup>
import OperatorLayout from "../../layouts/OperatorLayout.vue";
import ParkingZone from "@components/ParkOperator/ParkingZone.vue";
import {ref} from "vue";
import ReservationIcon from "@assets/icons/ReservationIcon.vue";
import CloseIcon from "@assets/icons/CloseIcon.vue";
const showModal = ref(false);
</script>