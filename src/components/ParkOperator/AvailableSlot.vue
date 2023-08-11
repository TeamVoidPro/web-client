<template>
  <div class="w-full h-40 flex items-center justify-center p-1 rounded bg-green-300/30 border-2 border-green-600" @click="showModal = true">
    <div class="text-2xl"><slot></slot></div>
  </div>
  <n-modal v-model:show="showModal">
    <n-card
        style="width: 900px"
        title="Modal"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <template #header-extra>
        Oops!
      </template>
      Content
      <template #footer>
        Footer
      </template>
    </n-card>
  </n-modal>

</template>

<script setup lang="ts">
import {ref} from "vue";

const showModal = ref(false)
</script>