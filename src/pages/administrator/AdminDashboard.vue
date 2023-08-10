<template>
  <AdminLayout>
    <div>Admin Dashboard</div>
    <router-link :to="{name: 'ParkingPlaces'}">go...</router-link>
  </AdminLayout>

</template>

<script setup lang="ts">
  import AdminLayout from "@layouts/AdminLayout.vue";
</script>