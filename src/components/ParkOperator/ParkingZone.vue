<template>
  <div>
    <div class="text-xl font-semibold mb-5">{{props.zone.zoneName}}</div>
    <table class="border-collapse w-full">
      <tr>
        <td class=" p-2 border-b-4 border-x-4 border-blue-950" v-for="slot in slotsList2">
          <AvailableSlot @click="getSlotDetails(slot.slotId)" v-if="slot.slotStatus === 'Available'" :slot="slot" :slotDetails="slotDetails">1</AvailableSlot>
          <ParkedSlot @click="getSlotDetails(slot.slotId)" v-if="slot.slotStatus === 'Parked'" :slot="slot" :slotDetails="slotDetails">1</ParkedSlot>
          <ReservedSlot @click="getReservedSlotDetails(slot.slotId)" v-if="slot.slotStatus === 'Reserved'" :slot="slot" :slotDetails="slotDetails">1</ReservedSlot>
          <EmergencySlot @click="getSlotDetails(slot.slotId)" v-if="slot.slotStatus === 'Emergency'" :slot="slot" :slotDetails="slotDetails">1</EmergencySlot>
        </td>
      </tr>
      <tr>
        <td class=" p-2  border-x-4 border-blue-950" v-for="slot in slotsList1">
          <AvailableSlot @click="getSlotDetails(slot.slotId)" v-if="slot.slotStatus === 'Available'" :slot="slot" :slotDetails="slotDetails">1</AvailableSlot>
          <ParkedSlot @click="getSlotDetails(slot.slotId)" v-if="slot.slotStatus === 'Parked'" :slot="slot" :slotDetails="slotDetails">1</ParkedSlot>
          <ReservedSlot @click="getReservedSlotDetails(slot.slotId)" v-if="slot.slotStatus === 'Reserved'" :slot="slot" :slotDetails="slotDetails">1</ReservedSlot>
          <EmergencySlot @click="getSlotDetails(slot.slotId)" v-if="slot.slotStatus === 'Emergency'" :slot="slot" :slotDetails="slotDetails">1</EmergencySlot>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">

import EmergencySlot from "../../components/ParkOperator/EmergencySlot.vue";
import ParkedSlot from "../../components/ParkOperator/ParkedSlot.vue";
import AvailableSlot from "../../components/ParkOperator/AvailableSlot.vue";
import ReservedSlot from "../../components/ParkOperator/ReservedSlot.vue";
import {slotStore} from "../../store/slotStore.ts";
import {onMounted, ref} from "vue";

const props = defineProps<{
  zone: object;
}>();

const slot_store = slotStore();

const slotsList1 = ref(Array());
const slotsList2 = ref(Array());
const slotDetails = ref(Object());

function splitArrayIntoTwoEqualSubArrays<T>(array:T[]) : [T[], T[]] {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(-half);
  return [firstHalf, secondHalf];
}

onMounted(() => {

  slot_store.getSlotsByZone(props.zone.zoneId).then((res) => {
    const slots = res.data;
    const splitSlots = splitArrayIntoTwoEqualSubArrays(slots);
    slotsList1.value = splitSlots[0];
    slotsList2.value = splitSlots[1].reverse();
  }).catch((err) => {
    console.log(err);
  })

})

function getSlotDetails(slot : string){
  slot_store.getSlotDetails(slot).then((res) => {
    slotDetails.value = res.data;
    console.log(slotDetails.value);
  }).catch((err) => {
    console.log(err);
  })
}

function getReservedSlotDetails(slot : string){
  slot_store.getReservedSlotDetails(slot).then((res : any) => {
    slotDetails.value = res.data;
    console.log(slotDetails.value);
  }).catch((err : any) => {
    console.log(err);
  })
}

</script>