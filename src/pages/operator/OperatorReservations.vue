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
          <div>
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold"/>
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
          <div>
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold"/>
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
          <div>
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold"/>
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
          <div>
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold"/>
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
          <div>
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold"/>
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
          <div>
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold"/>
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
          <div>
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold"/>
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
          <div>
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold"/>
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
          <div>
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold"/>
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
          <div>
            <InfoIcon class="w-14 h-14 text-blue-500 font-semibold"/>
          </div>
        </div>

      </div>

      <div class="mt-5 flex justify-center">
        <Pagination/>
      </div>
    </div>
  </OperatorLayout>

</template>

<script setup lang="ts">

import Pagination from "../../components/Pagination.vue";
import OperatorLayout from "../../layouts/OperatorLayout.vue";
import InfoIcon from "../../assets/icons/InfoIcon.vue";
</script>