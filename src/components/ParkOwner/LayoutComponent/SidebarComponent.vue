<script setup lang="ts">
import {PropType, ref} from "vue";
import {SidebarItem} from "@types/SidebarItems.ts";
import {useRoute, useRouter} from "vue-router";
const Route = useRoute();
let currentRoute = ref<string>(Route.path);
if (currentRoute.value === '/park-owner') {
  currentRoute.value= '/park-owner/dashboard';
}
const props = defineProps({
  sideBarItems: {
    type: Array as PropType<SidebarItem[]>,
    required: true
  },
  sideBarUserName: {
    type: String,
    required: true
  },
  sideBarUserImage: {
    type: String,
    required: true
  }
})
const router = useRouter();
const changeRoute = (route:string)=>{
  router.push(route);
  currentRoute.value = route;
}


</script>

<template>
  <div class="min-h-screen h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
    <div class=" flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
      <div class="flex items-center justify-center h-24">
        <div>
          <img src="/src/assets/images/logo-white.png" width="150">
        </div>
      </div>
      <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-4 space-y-3">
          <li class="px-5 pt-3 py-8">
            <div class="flex flex-col items-center justify-center gap-2">
              <div class="border-2 p-1 bg-blue-50 rounded-full border-black">
                <img :src="sideBarUserImage" width="128" class="rounded-full ">
              </div>
              <span class="text-md text-black font-bold">
                {{sideBarUserName}}
                </span>
            </div>
          </li>
          <li v-for="item in sideBarItems" :key="item.name">
            <!--            <a :href="item.link" class="relative flex justify-center gap-2 flex-row items-center h-14 focus:outline-none hover:bg-gray-50 text-black hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">-->
            <div @click="changeRoute(item.link)" :class="item.link == currentRoute ? 'flex justify-center gap-2 flex-row items-center h-14 bg-light-blue text-blue-600 font-medium border-l-4 border-blue-500 pr-6' : 'relative flex justify-center gap-2 flex-row items-center h-14 focus:outline-none hover:bg-blue-50 hover:text-blue-600 hover:font-medium hover:cursor-pointer text-black border-l-4 border-transparent hover:border-indigo-500 pr-6'">
            <span class="w-3/12 inline-flex justify-center items-center" v-html="item.icon">

            </span>
              <span class=" w-6/12 text-md tracking-wide truncate">{{item.name}}</span>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>