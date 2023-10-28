<template>
  <div>
    <div class="text-xl font-semibold mb-5">{{props.zone.zoneName}}</div>
    <table class="border-collapse w-full">
      <tr>
        <td class=" p-2 border-b-4 border-x-4 border-blue-950" v-for="slot in slotsList2">
          <AvailableSlot v-if="slot.slotStatus === 'Available'" :slot="slot">1</AvailableSlot>
          <ParkedSlot v-if="slot.slotStatus === 'Parked'" :slot="slot">1</ParkedSlot>
          <ReservedSlot v-if="slot.slotStatus === 'Reserved'" :slot="slot">1</ReservedSlot>
          <EmergencySlot v-if="slot.slotStatus === 'Emergency'" :slot="slot">1</EmergencySlot>
        </td>
      </tr>
      <tr>
        <td class=" p-2  border-x-4 border-blue-950" v-for="slot in slotsList1">
          <AvailableSlot v-if="slot.slotStatus === 'Available'" :slot="slot">1</AvailableSlot>
          <ParkedSlot v-if="slot.slotStatus === 'Parked'" :slot="slot">1</ParkedSlot>
          <ReservedSlot v-if="slot.slotStatus === 'Reserved'" :slot="slot">1</ReservedSlot>
          <EmergencySlot v-if="slot.slotStatus === 'Emergency'" :slot="slot">1</EmergencySlot>
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

const slotsList1 = ref(Array());
const slotsList2 = ref(Array());

function splitArrayIntoTwoEqualSubArrays<T>(array:T[]) : [T[], T[]] {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(-half);
  return [firstHalf, secondHalf];
}

onMounted(() => {
  const slot = slotStore();

  slot.getSlotsByZone(props.zone.zoneId).then((res) => {
    const slots = res.data;
    const splitSlots = splitArrayIntoTwoEqualSubArrays(slots);
    slotsList1.value = splitSlots[0];
    slotsList2.value = splitSlots[1].reverse();
  }).catch((err) => {
    console.log(err);
  })

})

</script>