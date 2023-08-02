<template>
    <div class="bg-white h-[80vh] w-[80%] flex justify-around">
      <div class="w-[30%] mt-10 pl-5">
        <p class="text-4xl text-primary font-semibold mb-4">Login</p>
        <p>Enter the information while you registered</p>
        <form class="mt-7">
          <div>
            <label>Email</label>
            <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-10 w-full pl-2" type="email">
          </div>
          <div>
            <label>Password</label>
            <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-10 w-full pl-2" type="password">
          </div>
        </form>
        <p class="text-[#3B00E4] font-semibold text-xs flex flex-row-reverse mt-2">Forgot Password ?</p>
        <div class="flex justify-center mt-5">
          <button class="border-2 w-40 h-9 rounded-full bg-[#253665] text-white font-semibold">Sign in</button>
        </div>
      </div>
      <div class="w-[60%]">
        <img src="../assets/images/park.png" alt="">
      </div>
    </div>
</template>

<script setup lang="ts">

</script>