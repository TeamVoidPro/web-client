<template>
  <ParkOwnerNavbar currentPage="login"/>
    <div class="h-full mt-20 w-full justify-center bg-accent flex items-center">
      <div class="m-auto p-10 bg-white w-[60%] gap-5 rounded-2xl flex justify-around shadow shadow-blue-200">
        <div class="">
          <div class="flex items-center text-primary">
            <h1 class="text-4xl font-bold">Hey, hello </h1>
            <img src = "../assets/images/wave.gif"
                 alt = "Wave Emoji"
                 class="w-20" >
          </div>
          <div class="font-semibold">Enter the information while you registered.</div>
          <div class="mt-10">
            <div class="relative flex items-center justify-center">
              <input type="text" class="px-20 py-4 border border-black rounded placeholder-gray-600 " placeholder="Email" v-model="email">
                <EnvelopeIcon class="w-6 h-6  absolute left-5"/>
            </div>
            <div class="relative flex items-center justify-center mt-5">
              <input type="password" class="px-20 py-4 border border-black rounded placeholder-gray-600 " placeholder="Password" v-model="password">
              <LockClosedIcon class="w-6 h-8 text-black absolute  1.5 left-5"/>
              <EyeSlashIcon class="w-6 h-8 text-black absolute right-5 opacity-40 cursor-pointer"/>
              <EyeIcon class="w-2 h-2 text-black absolute right-5 opacity-0 hidden cursor-pointer"/>
            </div>
            <div class="text-secondary text-right font-semibold mt-3 cursor-pointer">Forgot password ?</div>
            <div class="flex justify-center mt-7">
                <Button class="w-[12em] px-0" @click="login">Sign In</Button>
            </div>
          </div>
        </div>
        <div>
          <img src = "../assets/images/login-page-img.png"
               alt = "">
        </div>
      </div>
    </div>

</template>

<script setup lang="ts">
import {EnvelopeIcon, LockClosedIcon, EyeSlashIcon, EyeIcon} from "@heroicons/vue/24/solid";
import Button from "../components/Button.vue";
import AuthLayout from "@layouts/AuthLayout.vue";
import router from "@/router";
import {ref} from "vue";
import {useMessage} from "naive-ui";


const email = ref("");
const password = ref("");
const message = useMessage();

const navigateTo = (path: string) => {
  router.push(path);
};

const login = () => {
  if (email.value === "" && password.value === "") {
    message.error("Invalid credentials");
    return
  }else{
    navigateTo("/park-owner/dashboard");
  }

};


import ParkOwnerNavbar from "@components/Navbar/ParkOwnerNavbar.vue";
</script>
