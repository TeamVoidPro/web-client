<script setup lang="ts">
import ParkOwnerLayout from "@layouts/ParkOwnerLayout.vue";
import {ref} from "vue";
const showModal = ref(false)

</script>

<template>
  <ParkOwnerLayout>
    <div class="w-full flex justify-center items-center mt-5">
      <div class="bg-white w-1/2 py-10 space-y-8 rounded-lg shadow-lg">
        <div class="flex justify-center items-center">
          <img class="rounded-full w-36 h-36 object-cover border-2 border-[#253665]"  src="../../assets/images/profile.png" alt="">
        </div>

        <div class="w-[70%] m-auto flex justify-between">
          <div>
            <button class="bg-secondary text-white rounded h-8 w-44"  @click="showModal = true">
              Change Password
            </button>
            <n-modal v-model:show="showModal">
              <n-card
                  style="width: 600px; border-radius: 15px"
                  title="Change Password"
                  :bordered="false"
                  size="huge"
                  role="dialog"
                  aria-modal="true"
              >
                <div>
                  <form class="space-y-3">
                    <div class="flex flex-col">
                      <label class="text-xs">Current Password</label>
                      <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="password" value="995512203V" disabled>
                    </div>
                    <div class="flex flex-col">
                      <label class="text-xs">New Password</label>
                      <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="password" value="995512203V" disabled>
                    </div>
                    <div class="flex flex-col">
                      <label class="text-xs">Confirm Password</label>
                      <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="password" value="995512203V" disabled>
                    </div>
                  </form>
                  <div class="flex justify-center">
                    <button class="bg-secondary w-48 h-8 rounded shadow-lg text-white mt-5">Save</button>
                  </div>

                </div>
              </n-card>
            </n-modal>
          </div>
          <div>
            <button class="bg-[#22c55e] text-white rounded h-8 w-44">Edit Profile</button>
          </div>
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

  </ParkOwnerLayout>
</template>

<style scoped>

</style>