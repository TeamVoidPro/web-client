<template>
  <div>
    <div class="text-xl font-semibold mb-5">Zone A</div>
    <table class="border-collapse w-full">
      <tr>
        <td class=" p-2 border-b-4 border-x-4 border-blue-950">
          <AvailableSlot >10</AvailableSlot>
        </td>
        <td class=" p-2 border-b-4 border-x-4 border-blue-950">
          <ParkedSlot >9</ParkedSlot>
        </td>
        <td class=" p-2 border-b-4 border-x-4 border-blue-950">
          <ParkedSlot>8</ParkedSlot>
        </td>
        <td class=" p-2 border-b-4 border-x-4 border-blue-950">
          <AvailableSlot>7</AvailableSlot>
        </td>
        <td class=" p-2 border-b-4 border-x-4 border-blue-950">
          <ReservedSlot>6</ReservedSlot>
        </td>
      </tr>
      <tr>
        <td class=" p-2 border-t-4 border-x-4 border-blue-950" >
          <ReservedSlot>1</ReservedSlot>
        </td>
        <td class=" p-2 border-t-4 border-x-4 border-blue-950" >
          <EmergencySlot>2</EmergencySlot>
        </td>
        <td class=" p-2 border-t-4 border-x-4 border-blue-950" >
          <ReservedSlot>3</ReservedSlot>
        </td>
        <td class=" p-2 border-t-4 border-x-4 border-blue-950" >
          <ParkedSlot>4</ParkedSlot>
        </td>
        <td class=" p-2 border-t-4 border-x-4 border-blue-950" >
          <ParkedSlot>5</ParkedSlot>
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
</script>