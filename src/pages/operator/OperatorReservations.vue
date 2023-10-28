<template>
  <OperatorLayout>
    <div>
      <div class="flex justify-between items-center">

        <div class="flex items-center p-2 bg-white shadow rounded gap-3">
          <form action="">
            <div class="flex items-center gap-3">
              <label class="font-semibold text-lg">Date</label>
              <input type="text" class="border-2 rounded h-8 px-2 font-semibold text-center" value="2023-07-17">
            </div>
          </form>
          <img src="../../assets/images/calender.svg" alt="Calender" class="w-8 h-8">
        </div>

        <div class="flex items-center p-2 bg-white shadow rounded gap-3">
          <form class="flex gap-3" action="">
            <div class="flex items-center gap-3">
              <label class="font-semibold text-lg">From</label>
              <input type="text" class="border-2 rounded h-8 w-20 px-2 font-semibold" value="8.00 AM">
            </div>
            <div class="flex items-center gap-3">
              <label class="font-semibold text-lg">To</label>
              <input type="text" class="border-2 rounded h-8 w-20 px-2 font-semibold" value="8.00 PM">
            </div>
            <div>
              <img src="../../assets/images/adjust-setting-tool-svgrepo-com.svg" class="w-8 h-8" alt="">
            </div>
          </form>
        </div>

        <div class="flex items-center p-2 bg-white shadow rounded gap-3">
          <form action="">
            <div class="flex items-center gap-3">
              <label class="font-semibold text-lg">Filter</label>
              <input type="text" class="border-2 rounded h-8 text-center font-semibold" value="Upcoming Reservations">
            </div>
          </form>
          <img src="../../assets/images/filter.svg" alt="Calender" class="w-8 h-8">
        </div>

      </div>

      <div class="mt-10 space-y-2">
        <div class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>Mr. Danodya Supun</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>8.00 A.M - 4.00 P.M</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>076 60 23 645</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>Toyota premio</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#24</div>
            </div>
          </div>
          <div >
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold" @click="OpenModel('Dinushan')"/>
          </div>
        </div>
        <div class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>Mr. Danodya Supun</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>8.00 A.M - 4.00 P.M</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>076 60 23 645</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>Toyota premio</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#24</div>
            </div>
          </div>
          <div >
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold" @click="OpenModel('Dinushan')"/>
          </div>
        </div>
        <div class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>Mr. Danodya Supun</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>8.00 A.M - 4.00 P.M</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>076 60 23 645</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>Toyota premio</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#24</div>
            </div>
          </div>
          <div >
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold" @click="OpenModel('Dinushan')"/>
          </div>
        </div>
        <div class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>Mr. Danodya Supun</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>8.00 A.M - 4.00 P.M</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>076 60 23 645</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>Toyota premio</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#24</div>
            </div>
          </div>
          <div >
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold" @click="OpenModel('Dinushan')"/>
          </div>
        </div>
        <div class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>Mr. Danodya Supun</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>8.00 A.M - 4.00 P.M</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>076 60 23 645</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>Toyota premio</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#24</div>
            </div>
          </div>
          <div >
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold" @click="OpenModel('Dinushan')"/>
          </div>
        </div>
        <div class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>Mr. Danodya Supun</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>8.00 A.M - 4.00 P.M</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>076 60 23 645</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>Toyota premio</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#24</div>
            </div>
          </div>
          <div >
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold" @click="OpenModel('Dinushan')"/>
          </div>
        </div>
        <div class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>Mr. Danodya Supun</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>8.00 A.M - 4.00 P.M</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>076 60 23 645</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>Toyota premio</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#24</div>
            </div>
          </div>
          <div >
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold" @click="OpenModel('Dinushan')"/>
          </div>
        </div>
        <div class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>Mr. Danodya Supun</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>8.00 A.M - 4.00 P.M</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>076 60 23 645</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>Toyota premio</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#24</div>
            </div>
          </div>
          <div >
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold" @click="OpenModel('Dinushan')"/>
          </div>
        </div>
        <div class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>Mr. Danodya Supun</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>8.00 A.M - 4.00 P.M</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>076 60 23 645</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>Toyota premio</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#24</div>
            </div>
          </div>
          <div >
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold" @click="OpenModel('Dinushan')"/>
          </div>
        </div>
        <div class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>Mr. Danodya Supun</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>8.00 A.M - 4.00 P.M</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>076 60 23 645</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>Toyota premio</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#24</div>
            </div>
          </div>
          <div >
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold" @click="OpenModel('Dinushan')"/>
          </div>
        </div>

      </div>

      <div class="mt-10 flex justify-center">
        <Pagination/>
      </div>
    </div>

    <div>
      <n-modal v-model:show="showModal">
        <n-card
            style="width: 60em;"
            class="rounded-xl"
            title="Reservation - R001"
            :bordered="false"
            role="dialog"
            aria-modal="true"
            header-style="font-size: 2em; font-weight: 600; color: #1F2937"
        >
          <template #header-extra>
            <CloseIcon class="w-5 h-5 text-red-700 cursor-pointer" @click="showModal = false"/>
          </template>
          <div>
            <div class="flex gap-10">
              <div class="w-[18em] p-2 border-2 rounded-xl">
                <div class="text-lg font-semibold">Slot:</div>
                <div class="flex justify-center text-5xl my-5 font-semibold">24</div>
                <div class="text-center text-xl">8.00 A.M - 2.00 P.M</div>
              </div>
              <div class="p-2 w-[38em]">
                <div class="flex gap-10">
                  <div class="w-[45%] space-y-8">
                    <div class="">
                      <div class="text-lg font-semibold">Name:</div>
                      <div class="ps-2">Danodya Supun</div>
                    </div>
                    <div class="">
                      <div class="text-lg font-semibold">Vehicle Number:</div>
                      <div class="ps-2">ABC - 1234</div>
                    </div>
                  </div>
                  <div class="w-[45%] space-y-8">
                    <div class="">
                      <div class="text-lg font-semibold">Contact:</div>
                      <div class="ps-2">0766023645</div>
                    </div>
                    <div class="">
                      <div class="text-lg font-semibold">Vehicle Type:</div>
                      <div class="ps-2">Car</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-6">
              <div class="flex gap-8">
                <div class="w-[30%] p-2">
                  <div class="text-lg font-semibold">Reservation Date:</div>
                  <div class="ps-2">Today</div>
                </div>
                <div class="w-[30%] p-2 ms-2">
                  <div class="text-lg font-semibold">Reserved At:</div>
                  <div class="ps-2">Yesterday at 16:32:00</div>
                </div>
                <div class="w-[30%] py-2">
                  <div class="text-lg font-semibold">Total Cost:</div>
                  <div class="ps-2">Rs 800.00</div>
                </div>
              </div>
              <div class="flex gap-8">
                <div class="w-[30%] p-2">
                  <div class="text-lg font-semibold">Payment Method:</div>
                  <div class="ps-2">Cash - Onsite</div>
                </div>
                <div class="w-[30%] p-2 ms-2">
                  <div class="text-lg font-semibold">Payment Status:</div>
                  <div class="ps-2">Not Paid</div>
                </div>
                <div class="w-[30%] py-2">
                  <div class="text-lg font-semibold">Zone:</div>
                  <div class="ps-2">Zone A</div>
                </div>
              </div>
              <div>
                <div class="text-lg font-semibold">Vehicle Description:</div>
                <div class="ps-2">Vehicle under restoration, avoid touching.</div>
              </div>
            </div>

            <div class="flex justify-between mt-10">
              <button class="w-[10em] flex items-center justify-center gap-2 border-none text-white rounded-lg text-xl py-2 bg-green-500 hover:bg-green-600 cursor-pointer"><PhoneIcon class="font-semibold"/> Contact</button>
              <button class="w-[10em] flex items-center justify-center gap-2 border-none text-white rounded-lg text-xl py-2 bg-red-500 hover:bg-red-600 cursor-pointer"><CloseIcon class="font-semibold"/> Cancel</button>
            </div>
          </div>
          <template #footer>
          </template>
        </n-card>
      </n-modal>
    </div>
  </OperatorLayout>

</template>

<script setup lang="ts">
import Pagination from "../../components/Pagination.vue";
import OperatorLayout from "../../layouts/OperatorLayout.vue";
import InfoIcon from "../../assets/icons/InfoIcon.vue";
import {ref } from 'vue'
import CloseIcon from "../../assets/icons/CloseIcon.vue";
import PhoneIcon from "@assets/icons/PhoneIcon.vue";

const showModal = ref(false)
const currentReservation = ref({
  name: 'Danodya Supun',
})

  const OpenModel = (name: string) => {
    console.log(name)
  showModal.value = true
  currentReservation.value.name = name
}



</script>