<template>
  <div class="bg-accent w-full flex">
    <SideBar/>
    <div class="w-full">
      <OperatorNav />
      <div class="px-16 py-10 max-h-[90vh] overflow-y-auto">
        <slot>

        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import OperatorNav from "../components/OperatorNav.vue";
</script>