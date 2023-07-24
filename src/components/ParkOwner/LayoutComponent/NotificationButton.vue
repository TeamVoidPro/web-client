<script setup lang="ts">
import {Close as CashIcon} from '@vicons/ionicons5'
import {onMounted, ref} from "vue";

const NotificationTrigger = ref<boolean>(false);

const notifications = ref([
  {
    title: 'Notification 1',
    message: 'but also the leap into electronic typesetting, remaining essentially unchanged ',
    read: false,
  },
  {
    title: 'Notification 2',
    message: 'This is notification 2.',
    read: true,
  },
  {
    title: 'Notification 3',
    message: 'This is notification 3.',
    read: false,
  },
])

const markAsRead = (index:number)=>{
  console.log(index)
  notifications.value[index].read = false;
}


const triggerNotification=()=> {
  NotificationTrigger.value = !NotificationTrigger.value;
}

const handleOuterClick = ()=>{
  window.addEventListener('click', (e)=>{
    if(NotificationTrigger.value){
      if(!(e.target as HTMLElement).closest('.notification-panel') && !(e.target as HTMLElement).closest('.notification-button')){
        NotificationTrigger.value = false;
      }
    }
  })
}

onMounted(()=>{
  handleOuterClick();
})



</script>
<!--        class="bg-white rounded-2xl p-3 text-blue-700 shadow-2xl hover:bg-blue-500 hover:text-white hover:cursor-pointer notification-button" -->

<template>
  <div class="absolute top-0 right-0 mt-4 mr-4">
    <div
    :class="NotificationTrigger ? 'bg-blue-700 text-white rounded-2xl p-3 shadow-2xl notification-button' : 'bg-white rounded-2xl p-3 text-blue-700 shadow-2xl hover:bg-blue-500 hover:text-white hover:cursor-pointer notification-button'"
        @click="triggerNotification">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="notification-button">
        <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
      </svg>
    </div>
  </div>
  <!--    Notification Panel -->
  <div class="absolute top-16 right-0 mt-5 mr-4 bg-white rounded-2xl flex flex-col gap-1 p-2" v-if="NotificationTrigger">
      <div
          :class="notification.read ? 'bg-gray-100 p-2 rounded-lg hover:cursor-pointer' : 'bg-white p-2 rounded-md hover:cursor-pointer'"
          @click="markAsRead(index)"
           v-for="(notification,index) in notifications"
          :key="index">
        <div class="flex flex-row justify-between items-center">
          <div class=" font-bold">
            {{notification.title}}
          </div>
          <div class="text-xs">
            2021-10-10
          </div>
        </div>
        <div class="text-sm">
          {{notification.message.length > 50 ? notification.message.substring(0,50) + '...' : notification.message}}
        </div>
      </div>
  </div>
</template>

<style scoped>

</style>
