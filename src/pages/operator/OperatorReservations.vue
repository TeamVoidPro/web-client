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

      <div class="mt-10 space-y-5">
        <div class="w-full py-2 px-10 bg-white shadow rounded-xl flex items-center justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" class="w-16 h-16 rounded-full p-0.5 border border-black" alt="User">
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Name:</div>
                <div>Ms. Viharsha Pramodi</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Time:</div>
                <div>8.00 AM - 4.00 PM</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Contact:</div>
                <div>071 23 45 678</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Number:</div>
                <div>WP ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Vehicle Type:</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Model:</div>
                <div>Toyota Premio</div>
              </div>
            </div>
            <div class="flex flex-col px-10">
              <div>
                <div class="font-semibold text-lg">Reserved Slot:</div>
                <div class="text-center font-semibold text-5xl">#10</div>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="py-1 px-10 border-r-2 border-black">
              <img class="w-24" src="../../assets/images/QR.png" alt="QR code">
            </div>
            <div class="flex flex-col ms-10">
              <button class="bg-secondary p-0.5 rounded">
                <img src="../../assets/images/info-circle-svgrepo-com.svg" class="w-8 h-8" alt="">
              </button>
            </div>
          </div>

        </div>
        <div class="w-full py-2 px-10 bg-white shadow rounded-xl flex items-center justify-between">
          <div class=" flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" class="w-16 h-16 rounded-full p-0.5 border border-black" alt="User">
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Name:</div>
                <div>Ms. Viharsha Pramodi</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Time:</div>
                <div>8.00 AM - 4.00 PM</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Contact:</div>
                <div>071 23 45 678</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Number:</div>
                <div>WP ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Vehicle Type:</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Model:</div>
                <div>Toyota Premio</div>
              </div>
            </div>
            <div class="flex flex-col px-10">
              <div>
                <div class="font-semibold text-lg">Reserved Slot:</div>
                <div class="text-center font-semibold text-5xl">#10</div>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="py-1 px-10 border-r-2 border-black">
              <img class="w-24" src="../../assets/images/QR.png" alt="QR code">
            </div>
            <div class="flex flex-col ms-10">
              <button class="bg-secondary p-0.5 rounded">
                <img src="../../assets/images/info-circle-svgrepo-com.svg" class="w-8 h-8" alt="">
              </button>
            </div>
          </div>

        </div>
        <div class="w-full py-2 px-10 bg-white shadow rounded-xl flex items-center justify-between">
          <div class=" flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" class="w-16 h-16 rounded-full p-0.5 border border-black" alt="User">
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Name:</div>
                <div>Ms. Viharsha Pramodi</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Time:</div>
                <div>8.00 AM - 4.00 PM</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Contact:</div>
                <div>071 23 45 678</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Number:</div>
                <div>WP ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Vehicle Type:</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Model:</div>
                <div>Toyota Premio</div>
              </div>
            </div>
            <div class="flex flex-col px-10">
              <div>
                <div class="font-semibold text-lg">Reserved Slot:</div>
                <div class="text-center font-semibold text-5xl">#10</div>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="py-1 px-10 border-r-2 border-black">
              <img class="w-24" src="../../assets/images/QR.png" alt="QR code">
            </div>
            <div class="flex flex-col ms-10">
              <button class="bg-secondary p-0.5 rounded">
                <img src="../../assets/images/info-circle-svgrepo-com.svg" class="w-8 h-8" alt="">
              </button>
            </div>
          </div>

        </div>
        <div class="w-full py-2 px-10 bg-white shadow rounded-xl flex items-center justify-between">
          <div class=" flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" class="w-16 h-16 rounded-full p-0.5 border border-black" alt="User">
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Name:</div>
                <div>Ms. Viharsha Pramodi</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Time:</div>
                <div>8.00 AM - 4.00 PM</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Contact:</div>
                <div>071 23 45 678</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Number:</div>
                <div>WP ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Vehicle Type:</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Model:</div>
                <div>Toyota Premio</div>
              </div>
            </div>
            <div class="flex flex-col px-10">
              <div>
                <div class="font-semibold text-lg">Reserved Slot:</div>
                <div class="text-center font-semibold text-5xl">#10</div>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="py-1 px-10 border-r-2 border-black">
              <img class="w-24" src="../../assets/images/QR.png" alt="QR code">
            </div>
            <div class="flex flex-col ms-10">
              <button class="bg-secondary p-0.5 rounded">
                <img src="../../assets/images/info-circle-svgrepo-com.svg" class="w-8 h-8" alt="">
              </button>
            </div>
          </div>

        </div>
        <div class="w-full py-2 px-10 bg-white shadow rounded-xl flex items-center justify-between">
          <div class=" flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" class="w-16 h-16 rounded-full p-0.5 border border-black" alt="User">
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Name:</div>
                <div>Ms. Viharsha Pramodi</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Time:</div>
                <div>8.00 AM - 4.00 PM</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Contact:</div>
                <div>071 23 45 678</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Number:</div>
                <div>WP ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Vehicle Type:</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Model:</div>
                <div>Toyota Premio</div>
              </div>
            </div>
            <div class="flex flex-col px-10">
              <div>
                <div class="font-semibold text-lg">Reserved Slot:</div>
                <div class="text-center font-semibold text-5xl">#10</div>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="py-1 px-10 border-r-2 border-black">
              <img class="w-24" src="../../assets/images/QR.png" alt="QR code">
            </div>
            <div class="flex flex-col ms-10">
              <button class="bg-secondary p-0.5 rounded">
                <img src="../../assets/images/info-circle-svgrepo-com.svg" class="w-8 h-8" alt="">
              </button>
            </div>
          </div>

        </div>
        <div class="w-full py-2 px-10 bg-white shadow rounded-xl flex items-center justify-between">
          <div class=" flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" class="w-16 h-16 rounded-full p-0.5 border border-black" alt="User">
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Name:</div>
                <div>Ms. Viharsha Pramodi</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Time:</div>
                <div>8.00 AM - 4.00 PM</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Contact:</div>
                <div>071 23 45 678</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Number:</div>
                <div>WP ABC - 1234</div>
              </div>
            </div>
            <div class="flex flex-col px-10 border-r-2 border-black">
              <div>
                <div class="font-semibold text-lg">Vehicle Type:</div>
                <div>Car</div>
              </div>
              <div>
                <div class="font-semibold text-lg">Vehicle Model:</div>
                <div>Toyota Premio</div>
              </div>
            </div>
            <div class="flex flex-col px-10">
              <div>
                <div class="font-semibold text-lg">Reserved Slot:</div>
                <div class="text-center font-semibold text-5xl">#10</div>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="py-1 px-10 border-r-2 border-black">
              <img class="w-24" src="../../assets/images/QR.png" alt="QR code">
            </div>
            <div class="flex flex-col ms-10">
              <button class="bg-secondary p-0.5 rounded">
                <img src="../../assets/images/info-circle-svgrepo-com.svg" class="w-8 h-8" alt="">
              </button>
            </div>
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
</script>