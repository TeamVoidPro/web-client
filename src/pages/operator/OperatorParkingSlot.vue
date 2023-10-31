<template>
  <OperatorLayout>
    <div class="flex justify-between">
      <div class="w-[57%] space-y-4">
        <div v-for="zone in zoneList">
          <ParkingZone :zone="zone" />
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
            <CloseIcon class="w-6 h-6 text-red-600" @click="showModal = false"/>
          </template>

          <div class="flex justify-between">
            <n-form class="w-[70%] space-y-5">
              <div class="flex w-full justify-between">
                <div class="w-[49%] space-y-2">
                  <label for="">Name</label>
                  <n-input v-model:value="formValues.name" placeholder="Enter name" />
                </div>
                <div class="w-[49%] space-y-2 ">
                  <label for="">Contact </label>
                  <n-input v-model:value="formValues.contact" placeholder="Enter contact number" />
                </div>
              </div>
              <div class="flex w-full justify-between">
                <div class="w-[49%] space-y-2 ">
                  <label for="">Vehicle Number</label>
                  <n-input v-model:value="formValues.vehicleNumber" placeholder="Enter vehicle number" />
                </div>
                <div class="w-[49%] space-y-2 ">
                  <label for="">Vehicle Type</label>
                  <n-select
                      v-model:value="formValues.vehicleType"
                      filterable
                      placeholder="Please select vehicle type"
                      :options="options"
                  />
                </div>
              </div>
              <div class="flex w-full justify-between">
                <div class="w-[49%] space-y-2 ">
                  <label for="">Reservation start at</label>
                  <n-time-picker v-model:value="formValues.startingTime" @confirm="confirmTime" value-format="H~m~s"/>
                </div>
                <div class="w-[49%] space-y-2">
                  <label for="">Reservation end at</label>
                  <n-time-picker v-model:value="formValues.endingTime" @confirm="confirmTime"/>
                </div>
              </div>
              <div class="flex w-full justify-between">
                <div class="w-[49%] space-y-2">
                  <label for="">Zone</label>
                  <div class="flex flex-wrap justify-around mt-3">
                    <n-radio-group v-model:value="formValues.zone" name="radioGroup">
                      <n-space>
                        <n-radio
                            v-for="zone in zones"
                            :key="zone.value"
                            :value="zone.value"
                            :label="zone.label"
                        />
                      </n-space>
                    </n-radio-group>
                  </div>
                </div>
                <div class="w-[49%] space-y-2">
                  <label for="">Payment Method</label>
                  <div class="flex flex-wrap justify-around mt-3">
                    <n-radio-group v-model:value="formValues.paymentMethod" name="radioGroup">
                      <n-space>
                        <n-radio
                            v-for="paymentMethod in paymentMethods"
                            :key="paymentMethod.value"
                            :value="paymentMethod.value"
                            :label="paymentMethod.label"
                        />
                      </n-space>
                    </n-radio-group>

                  </div>
                </div>
              </div>
            </n-form>

            <div class="w-[28%] ps-[2%] border-l-2">
              <div class="text-lg font-semibold">Available Slots</div>
              <div v-if="zonesList2.length === 0">Please select a reservation period.</div>
              <div class="mt-2" v-for="zone in zonesList2">
                <div class="text-md mt-1">{{zone}}</div>
                <table>
                  <tr class="flex flex-wrap">
                    <template v-for="slot in freeSlots">
                      <td v-if="slot.zoneName === zone" class="w-10 text-center" ><div @click="setSlotId(slot.slotId); clicked=slot.slotId" :class="clicked === slot.slotId ? 'p-2 rounded-lg bg-green-600/50 border-2 border-green-700' : 'p-2 rounded-lg bg-green-300/30 border-2 border-green-600'">{{slot.slotNumber}}</div></td>
                    </template>
                  </tr>
                </table>
              </div>
              <div class="my-5 text-lg font-semibold">Total Payment</div>
              <div class="w-full">
                <div class="text-2xl text-center">Rs. {{formValues.totalPayment}}</div>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-center">
            <button class="mt-10 px-10 py-2 text-lg font-semibold text-white rounded-lg" @click="makeReservation()">Make Reservation</button>
          </div>
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
import ReservationIcon from "@assets/icons/ReservationIcon.vue";
import CloseIcon from "@assets/icons/CloseIcon.vue";
import {parkingOperatorStore} from "../../store/parkingOperatorStore.ts";
import {zonesStore} from "../../store/zonesStore.ts";
import {onMounted, ref} from "vue";
import {slotStore} from "../../store/slotStore.ts";
import {reservationStore} from "@store/reservationStore.ts";

const showModal = ref(false);
const zoneList = ref(null);
const clicked = ref("");
const reservation_store = reservationStore();

onMounted(() => {
  const operatorStore = parkingOperatorStore();
  const zoneStore = zonesStore();

  const parkingPlace =  ref(null);

  operatorStore.getParkingPlace().then((res:any) => {
    parkingPlace.value = res.parking;

    const id = parkingPlace.value.parkingPlaceId;

    zoneStore.getZones(id).then((res:any) => {
      zoneList.value = res.data;
    });
  });
});

const options = Array();

const formValues = ref({
  name: "",
  contact: "",
  vehicleNumber: "",
  vehicleType: "",
  startingTime: null,
  endingTime: null,
  zone: "",
  paymentMethod: "",
  slotId: "",
  parkingPlaceId: "",
  operatorId: "",
  totalPayment : 0
});

function setSlotId(id : any) {
  formValues.value.slotId = id;

  reservation_store.calculateReservationCost(formValues.value.slotId,formValues.value.startingTime,formValues.value.endingTime)
      .then((res : any) => {
        formValues.value.totalPayment = res.totalCost
      }).catch((err : any) => {
        throw err
  })
}

onMounted(() => {
  reservation_store.getVehicleTypes().then((res:any) => {
    const categories = res.categories;
    categories.forEach((category:any) => {
      options.push({
        label: category,
        value: category
      })
    })
    console.log(options)
  });
})

function makeReservation()
{
  const slot_store = slotStore();

  formValues.value.parkingPlaceId = slot_store.user.data.parkingPlaceId
  formValues.value.operatorId = slot_store.user.data.id


  reservation_store.makeReservation(formValues.value)
      .then((res:any) => {
        console.log(res.message)
      }).catch((err : any) => {
        throw err
      });

}

const zonesList2 = ref(Array());
const freeSlots = ref(Array());

function confirmTime()
{
  const startingTime = formValues.value.startingTime;
  const endingTime = formValues.value.endingTime;
  const vehicleType = formValues.value.vehicleType;

  const slot_store = slotStore();

  if(startingTime !== null && endingTime !== null && vehicleType !== ""){
    slot_store.getFreeSlots(startingTime, endingTime, vehicleType).then((res:any) => {
      // console.log(res)
      zonesList2.value = res.zonesList
      freeSlots.value = res.slots;

      console.log(freeSlots.value)
    });
  }else{
    console.log("Please fill all the fields");
  }
}

const paymentMethods = [
  {
    label: "Cash",
    value: "cash",
  },
  {
    label: "Card",
    value: "card",
  }
].map((s) => {
  s.value = s.value.toLowerCase();
  return s;
});

const zones = [
  {
    label: "Zone A",
    value: "zoneA",
  },
  {
    label: "Zone B",
    value: "zoneB",
  }
].map((s) => {
  s.value = s.value.toLowerCase();
  return s;
});

</script>