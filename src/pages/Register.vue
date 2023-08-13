<template>
  <div>
    <ParkOwnerNavbar/>
  </div>
  <div class="h-[88.8vh] bg-accent flex items-center">
    <div class="m-auto p-10 bg-white w-[80%] rounded-2xl flex justify-around items-center shadow shadow-blue-200">
      <div>
        <div class="">
          <div class="flex items-center text-primary">
            <h1 class="text-4xl font-bold">Create an account</h1>
          </div>
          <div class="font-semibold">Drive in with confidence, park with ease.</div>
          <form class="mt-10">
            <div class="relative">
              <input type="text" class="px-20 py-2 border border-black rounded placeholder-gray-600 font-semibold" placeholder="Email">
              <EnvelopeIcon class="w-8 h-8 text-black absolute inset-y-1.5 left-5"/>
            </div>
            <div class="relative mt-5">
              <input type="password" class="px-20 py-2 border border-black rounded placeholder-gray-600 font-semibold" placeholder="Password">
              <LockClosedIcon class="w-8 h-8 text-black absolute inset-y-1.5 left-5"/>
              <EyeSlashIcon class="w-8 h-8 text-black absolute inset-y-1.5 right-5 opacity-40"/>
              <EyeIcon class="w-8 h-8 text-black absolute inset-y-1.5 right-5 opacity-0 hidden"/>
            </div>
            <div class="relative mt-5">
              <input type="password" class="px-20 py-2 border border-black rounded placeholder-gray-600 font-semibold" placeholder="Confirm Password">
              <LockClosedIcon class="w-8 h-8 text-black absolute inset-y-1.5 left-5"/>
            </div>
            <div class="text-secondary text-right font-semibold cursor-pointer">Already have an account ?</div>
            <div class="flex justify-center mt-7">
              <Button>Sign In</Button>
            </div>
          </form>
          <div class="flex items-center justify-center my-7">
            <div class="border-t-2 border-gray-400 w-[50%]"></div>
            <div class="mx-2 font-semibold">Or</div>
            <div class="border-t-2 border-gray-400 w-[50%]"></div>
          </div>
          <div class="flex justify-center">
            <button class="flex items-center justify-center px-10 py-2 border border-black rounded-3xl font-semibold">
              <img src = "../assets/images/google.svg"
                   alt = "Google Logo"
                   class="w-8 h-8 mr-2">
              Signup with Google
              <img src="../assets/images/right-arrow.svg"
                   class="w-7 h-7 ml-2"
                   alt="Right Arrow">
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src = "../assets/images/register-page-img.png"
             alt = "">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {EnvelopeIcon, LockClosedIcon, EyeSlashIcon, EyeIcon} from "@heroicons/vue/24/solid";
import NavBar from "../components/NavBar.vue";
import Button from "../components/Button.vue";
import ParkOwnerNavbar from "@components/Navbar/ParkOwnerNavbar.vue";
</script>
