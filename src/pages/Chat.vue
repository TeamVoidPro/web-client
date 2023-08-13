

<template>
  <div>
    <h1>Chat</h1>
    <div v-for="offer in offers" :key="offer.id">
      <h3>{{offer}}</h3>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {HubConnectionBuilder} from "@microsoft/signalr";


const offers = ref([]);

onMounted(() => {
  let hubConnectionBuilder = new HubConnectionBuilder().withUrl('https://localhost:44397/offers').build();
  hubConnectionBuilder.start().then(() => console.log('Connection started.......!')).catch(() => console.log('Error while connect with server'));
  hubConnectionBuilder.on('SendOffersToUser', (result: any) => {
    console.log(result);
    offers.value = result;
  });
  console.log("Chat");
});

</script>