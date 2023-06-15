<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: 'Home',
  setup() {
    return {
      msg: 'Welcome to Your Vue.js + TypeScript App'
    }
  }
})

</script>

<template>
  <h1>
    Hello World {{ msg }}
  </h1>
</template>

<style scoped>

</style>