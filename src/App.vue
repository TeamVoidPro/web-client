<script setup lang="ts">

</script>

<template>
  <main>
    <n-message-provider>
      <n-notification-provider>
        <RouterView />
      </n-notification-provider>
    </n-message-provider>
  </main>
</template>

<style scoped>
main{
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}
</style>
