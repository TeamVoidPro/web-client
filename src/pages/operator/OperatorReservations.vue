<template>
  <OperatorLayout>
    <div>
      <div class="flex justify-between items-center">

        <div class="flex items-center p-2 bg-white shadow rounded gap-3">
          <form action="">
            <div class="flex items-center gap-3">
              <label class="font-semibold text-lg">Date</label>
              <n-date-picker
                v-model:formatted-value="formattedValue"
                value-format="yyyy-MM-dd"
                type="date"
                clearable
              />
            </div>
          </form>
        </div>

        <div class="flex items-center p-2 bg-white shadow rounded gap-3">
          <form class="flex gap-3" action="">
            <div class="flex items-center gap-3">
              <label class="font-semibold text-lg">From</label>
              <n-time-picker v-model:formatted-value="from"/>
            </div>
            <div class="flex items-center gap-3">
              <label class="font-semibold text-lg">To</label>
              <n-time-picker v-model:formatted-value="to"/>
            </div>
          </form>
        </div>

        <div class="flex items-center p-2 bg-white shadow rounded gap-3">
          <form action="">
            <div class="flex items-center gap-3">
              <label class="font-semibold text-lg">Filter</label>
              <n-select
                v-model:value="filterBy"
                filterable
                placeholder="All"
                :options="options"
              />            
            </div>
          </form>
        </div>

        <n-button strong secondary type="info" size="large" @click="getReservations">
          Filter
        </n-button>

      </div>

      <div class="mt-10 space-y-2">
        <div v-for="reservation in reservationList" class="px-5 py-2 w-full bg-white rounded-xl flex items-center shadow justify-between">
          <div class="flex items-center">
            <div>
              <img src="../../assets/images/user.jpg" alt=""
                   class="w-14 h-14 rounded-full p-0.5 border border-black">
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Name</div>
                <div>{{ reservation.name }}</div>
              </div>
              <div>
                <div class="font-semibold">Time</div>
                <div>{{ reservation.reservationStartedAt }} - {{ reservation.reservationEndedAt }}</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Contact</div>
                <div>{{ reservation.contactNumber }}</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle number</div>
                <div>{{ reservation.vehicleNumber }}</div>
              </div>
            </div>
            <div class="flex flex-col px-4 border-r-2">
              <div>
                <div class="font-semibold">Vehicle type</div>
                <div>{{ reservation.vehicleType }}</div>
              </div>
              <div>
                <div class="font-semibold">Vehicle model</div>
                <div>{{ reservation.vehicleModel }}</div>
              </div>
            </div>
            <div class="px-4">
              <div class="font-semibold">Slot number</div>
              <div class="text-4xl font-semibold text-center">#{{ reservation.slotNumber }}</div>
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
import {ref, onMounted } from 'vue'
import CloseIcon from "../../assets/icons/CloseIcon.vue";
import PhoneIcon from "@assets/icons/PhoneIcon.vue";
import {reservationStore} from "../../store/reservationStore.ts"

const showModal = ref(false)
const currentReservation = ref({
  name: 'Danodya Supun',
})

  const OpenModel = (name: string) => {
    console.log(name)
  showModal.value = true
  currentReservation.value.name = name
}

const filterBy = ref("Upcoming")

const currentTime = new Date();
const year = currentTime.getFullYear();
const month = currentTime.getMonth() + 1;
const day = currentTime.getDate();

const formattedDate = `${year}-${month}-${day}`

const formattedValue = ref(formattedDate)

const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`

const from = ref(formattedTime);
const to = ref("21:00:00");

const options = ref( [
        {
          label: 'Upcoming Reservations',
          value: 'Upcoming'
        },
        {
          label: 'Cancelled Reservations',
          value: 'Cancelled'
        },
        {
          label: "Completed Reservations",
          value: 'Completed'
        }
      ])

const reservation_store = reservationStore();

onMounted(() => {
  reservation_store.getUpcomingReservations(formattedValue.value, from.value, to.value)
  .then((res) => {
    reservationList.value = res.reservations;
  })
  .catch((err) => console.log(err))
})

const reservationList = ref([])

function getReservations(){

  if(filterBy.value === "Upcoming")
  {
    reservation_store.getUpcomingReservations(formattedValue.value, from.value, to.value)
    .then((res) => {
      reservationList.value = res.reservations;
    })
    .catch((err) => console.log(err))
  }
  else if(filterBy.value === "Cancelled")
  {
    reservation_store.getCancelledReservations(formattedValue.value, from.value, to.value)
    .then((res) => {
      reservationList.value = res.reservations
    })
    .catch((err) => console.log(err))
  }
  else if(filterBy.value === "Completed")
  {
    reservation_store.getCompletedReservations(formattedValue.value, from.value, to.value)
    .then((res) => {
      reservationList.value = res.reservations
    })
    .catch((err) => console.log(err))
  }
}
</script>