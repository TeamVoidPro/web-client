p<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="absolute  top-0 w-full flex flex-row justify-between items-center bg-white text-black p-4">
    <div class="text-4xl text-white">
      <router-link to="/">Home</router-link>
    </div>
    <div class="text-4xl text-white">
      <router-link to="/about">
        {{props.title}}
      </router-link>
    </div>
    <div class="text-4xl text-white">
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>