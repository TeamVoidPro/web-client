<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#6C3CFE',
    textColor1: '#6C3CFE',
  },
  Table: {
    headerColor: '#ee02ff',
  },
  Button:{
    color: '#6C3CFE',
    textColor: '#000000',
    colorHover: '#6C3CFE',
  },
  Checkbox:{

  },
  Card:{
    titleTextColor: '#101010',
    titleFontSizeLarge: '1.5rem',
  },
  Radio:{
    dotColor: '#6C3CFE',
    dotColorActive: '#6C3CFE',
  },
}
</script>

<template>
  <main>
    <n-config-provider :theme-overrides="themeOverrides" class="w-full">
      <n-notification-provider>
        <n-message-provider>
          <RouterView />
        </n-message-provider>
      </n-notification-provider>
    </n-config-provider>
  </main>
</template>

<style scoped>
main{
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
