<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import SidebarComponent from "@/components/ParkOwner/LayoutComponent/SidebarComponent.vue";
import {SidebarItem} from "@types/SidebarItems.ts";
import NotificationButton from "@/components/ParkOwner/LayoutComponent/NotificationButton.vue";
import ParkChange from "@/components/ParkOwner/LayoutComponent/ParkChangeComponent.vue";

const userName = "Isurika Arunodi";
const userImage = "/src/assets/images/user1.svg";

const props = defineProps({
  parkSelector: {
    type: Boolean,
    default: true,
  },
});
console.log(props.parkSelector);

const sideBarItems:Array<SidebarItem>=[
  {
    name:'Dashboard',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></g></svg>',
    link:'/park-owner/dashboard',
  },
  {
    name: 'Feedbacks',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10"/></svg>',
    link: '/park-owner/feedbacks',
  },
  {
    name: 'My Parks',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></g></svg>',
    link: '/park-owner/manage-parking',
  },
  {
    name: 'Analytics',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9l-5 5l-4-4l-3 3"/></g></svg>',
    link: '/park-owner/analytics',
  },
  {
    name: 'Payments',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6"/></g></svg>',
    link: '/park-owner/payments',
  },
  {
    name: 'Settings',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></g></svg>',
    link: '/park-owner/settings',
  },

]

</script>

<template>

<!--  Sidebar-->
  <NotificationButton />
  <ParkChange v-if="props.parkSelector" />
  <div class="flex w-screen">
    <SidebarComponent :side-bar-items="sideBarItems" :side-bar-user-name="userName" :side-bar-user-image="userImage" />
    <div class=" w-full px-2 mt-16 pb-2 pt-3">
      <slot>

      </slot>
    </div>
  </div>


</template>

<style scoped>

</style>