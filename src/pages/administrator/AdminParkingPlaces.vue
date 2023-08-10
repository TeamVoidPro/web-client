<template>
  <AdminLayout>
    <div>
      <n-table :bordered="false" :single-line="false">
        <thead>
        <tr>
          <th>Parking Place ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Parking Owner</th>
          <th>Parking Operator</th>
          <th>  </th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td>P0001</td>
          <td>Bela Parking</td>
          <td>No 2, Queens Road, Colombo 7</td>
          <td>Viharsha Jayathilaka</td>
          <td>Danodya Supun</td>
          <td>
            <router-link :to="{name: 'ParkingPlaceInfo'}"><InfoIcon class="text-blue-700 w-8 h-8"/></router-link>
          </td>
        </tr>
        </tbody>
      </n-table>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from "../../layouts/AdminLayout.vue";
import InfoIcon from "@assets/icons/InfoIcon.vue";

// import {ref} from "vue";
</script>