<template>
  <div class="bg-accent w-full flex">
    <AdminSideBar/>
    <div class="w-[90vw]">
      <OperatorNav />
      <div class="px-10 py-10 max-h-[90vh] overflow-y-auto">
        <slot>

        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OperatorNav from "../components/OperatorNav.vue";
import AdminSideBar from "../components/Administrator/AdminSideBar.vue";
</script>