<template>
  <OperatorLayout>
    <div class="w-full flex justify-center items-center">
      <div class="bg-white w-[60%] py-10 space-y-8 rounded-lg shadow-lg">
        <div class="flex justify-center items-center">
          <img class="rounded-full w-36 h-36 object-cover border-2 border-[#253665]"  src="../../assets/images/profile.png" alt="">
        </div>
        <form class="w-[70%] m-auto space-y-3">
          <div class="flex  w-full justify-between">
            <div class="flex flex-col w-[49%]">
              <label class="text-xs">First Name</label>
              <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 pl-1"   type="text" value="Viharsha" disabled>
            </div>
            <div class="flex flex-col w-[49%]">
              <label class="text-xs"> Last Name</label>
              <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 pl-1"  type="text" value="Jayathilaka" disabled>
            </div>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">EmployeeID</label>
            <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="text" value="E0023" disabled>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">Email</label>
            <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="email" value="vpjayathilake@gmail.com" disabled>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">NIC</label>
            <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="text" value="995512203V" disabled>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">Contact Number</label>
            <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="text" value="0773921108" disabled>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">Address Line 1</label>
            <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="text" value="25/1, Monarahanduwila Road" disabled>
          </div>
          <div class="flex  w-full justify-between">
            <div class="flex flex-col w-[49%]">
              <label class="text-xs">Street</label>
              <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 pl-2"   type="text" value="Wettawa" disabled>
            </div>
            <div class="flex flex-col w-[49%]">
              <label class="text-xs"> City</label>
              <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 pl-2"  type="text" value="Matugama" disabled>
            </div>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">Account Created Date</label>
            <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="date" value="04/05/2024" disabled>
          </div>
          <div class="w-full flex justify-center">
            <button class="w-48 h-8 bg-secondary rounded shadow-lg  text-white mt-5">Save</button>
          </div>
        </form>


      </div>
    </div>


  </OperatorLayout>

</template>

<script setup lang="ts">

import OperatorLayout from "../../layouts/OperatorLayout.vue";
</script>