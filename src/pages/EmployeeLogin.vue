<template>
<<<<<<< Updated upstream
    <div class="bg-white h-[80vh] w-[80%] flex justify-around m-auto rounded-xl ">
      <div class="w-[30%] mt-10 pl-8">
=======
    <div class="bg-white h-[80vh] w-[85%] rounded-2xl flex justify-around m-auto">
      <div class="w-[30%] mt-10 pl-5">
>>>>>>> Stashed changes
        <p class="text-4xl text-primary font-semibold mb-4">Login</p>
        <p>Enter the information while you registered</p>
        <form class="mt-7">
          <div>
            <label>Email</label>
            <div class="relative">
              <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-10 w-full pl-10" type="email" placeholder="Enter Your Email">
              <EmailIcon class="absolute bottom-3 left-2 text-gray-500 w-10 h-4"/>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div class="relative">
              <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-10 w-full pl-10" type="password" placeholder="Enter Your Password">
              <LockIcon class="absolute bottom-3 left-2 text-gray-500 w-10 h-4"/>
            </div>
          </div>
        </form>
        <p class="text-[#3B00E4] font-semibold text-xs flex flex-row-reverse mt-2">Forgot Password ?</p>
        <div class="flex justify-center mt-5">
          <button class="border-2 w-40 h-12 rounded-full bg-[#253665]  text-white font-semibold">Sign in</button>
        </div>
        <div class="flex items-center justify-center my-7">
          <div class="border-t-2 border-gray-400 w-[50%]"></div>
          <div class="mx-2 font-semibold">Or</div>
          <div class="border-t-2 border-gray-400 w-[50%]"></div>
        </div>
        <div class="flex justify-center mt-2">
          <button class="flex items-center justify-center px-10 py-2 border border-black rounded-3xl font-semibold">
            <img src = "../assets/images/google.svg"
                 alt = "Google Logo"
                 class="w-8 h-8 mr-2">
            Continue with Google
            <img src="../assets/images/right-arrow.svg"
                 class="w-7 h-7 ml-2"
                 alt="Right Arrow">
          </button>
        </div>
      </div>
<<<<<<< Updated upstream
      <div class="w-[60%] bg-primary rounded h-[70vh] m-auto shadow-2xl">
        <img src="../assets/images/park.png" alt="">
=======
      <div class="w-[60%] m-auto">
        <div class=" bg-[#cffafe] rounded-2xl h-[70vh] shadow-lg">
          <img  src="../assets/images/park.png" alt="">
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
</template>

<script setup lang="ts">

import EmailIcon from "@assets/icons/EmailIcon.vue";
import LockIcon from "@assets/icons/LockIcon.vue";
import Button from "@components/Button.vue";
</script>