<template>
  <n-space vertical>
    <n-pagination v-model:page="page" :page-count="10" :page-slot="7" />
  </n-space>
</template>

<script setup lang="ts">

import {ref} from "vue";

const page = ref(1)
</script>
