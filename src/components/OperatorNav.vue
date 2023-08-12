<template>
  <div>
    <div class="h-[8vh] bg-white w-full px-16 flex items-center justify-between border-b-2">
      <div class="flex items-center gap-3">
        <img src="../assets/images/location-pin-svgrepo-com.svg" alt="Location Pin" class="w-8 h-8">
        <div class="font-semibold text-xl">{{park}}</div>
      </div>
      <div class="flex items-center gap-5">
        <img src="../assets/images/bell-icon.svg" alt="Bell Icon" class="w-8 h-8">
        <n-dropdown :options="options" @select="handleSelect">
          <img src="../assets/images/user.jpg" alt="User" class="w-14 h-14 rounded-full object-cover border border-black p-0.5">
        </n-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {h, ref} from 'vue'
import type { Component } from 'vue'
import {NIcon, useMessage} from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'
import {employeeStore} from "@/store/employeeStore.ts";
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import {parkingOperatorStore} from "@store/parkingOperatorStore.ts";

const router = useRouter();
const message = useMessage();
const park = ref('');

onMounted(() => {
  const store = parkingOperatorStore()
  store.getParkingPlace()
      .then((res) => {
        park.value = res.parking.name
      })
      .catch((err) => {
        console.log(err)
      })
})

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = [
  {
    label: 'Profile',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: 'Edit Profile',
    key: 'editProfile',
    icon: renderIcon(EditIcon)
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
]

const handleSelect = (key: string) => {
  const store = employeeStore();
  if(key === 'logout'){
    const user = {
      'EmployeeId': store.user.data.id,
    }
    store.logout(user)
        .then((data: any) => {
          router.push({name: "EmployeeLogin"})
          message.success(data.message)
        }).catch((err: any) => {
          throw err;
        });
  }
}
</script>