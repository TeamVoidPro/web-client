<template>
    <div class="bg-accent w-full flex">
      <VerifierSidenav/>
      <div class="w-full">
        <div class="px-16 py-10 max-h-[100vh] overflow-y-auto">
          <slot>
  
          </slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import VerifierSidenav from "../components/Verifier/VerifierSidenav.vue";
 
  </script>