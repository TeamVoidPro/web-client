<template>
  <OperatorLayout>
    <div class="flex py-5 bg-white rounded-2xl shadow h-[81vh]">
      <div class="w-[35%] px-4 bg-white border-r-2 border-gray-200">
        <div class="relative mb-3">
          <input type="text" class="ps-10 w-full border-2 rounded-xl h-[2.5em]" placeholder="Search People">
          <SearchIcon class="absolute top-2 left-3 w-5 h-5 text-gray-400"/>
        </div>
        <div class="w-full overflow-auto h-[72vh] scroll-bar-w-sm scroll-bar-thumb">
          <div class="flex items-center justify-between mt-5">
            <div class="border-b-2 w-[38%]"></div>
            <div class="px-3 text-gray-400">NEW (4)</div>
            <div class="border-b-2 w-[38%]"></div>
          </div>

          <div class="w-full">

            <div class="flex flex-col p-2 hover:bg-blue-50 rounded-xl border-b-2">
              <div class="flex justify-between items-center">
                <div class="flex gap-3 items-center">
                  <img src="../../assets/images/user.jpg" alt=""
                       class="w-10 h-10 rounded-full object-cover">
                  <div class="font-semibold text-lg">Christian Grey</div>
                  <WarningIcon class="w-5 h-5 text-red-500"/>
                </div>
                <div class="text-xs text-gray-500">
                  3 min ago
                </div>
              </div>
              <div class="text-justify mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid
              </div>
            </div>

            <div class="flex flex-col p-2 hover:bg-blue-50 bg-blue-50 rounded-xl border-b-2">
              <div class="flex justify-between items-center">
                <div class="flex gap-3 items-center">
                  <img src="../../assets/images/user2.jpg" alt=""
                       class="w-10 h-10 rounded-full object-cover">
                  <div class="font-semibold text-lg">Anastasia Steele</div>
                  <WarningIcon class="w-5 h-5 text-red-500"/>
                </div>
                <div class="text-xs text-gray-500">
                  3 min ago
                </div>
              </div>
              <div class="text-justify mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid
              </div>
            </div>

            <div class="flex flex-col p-2 hover:bg-blue-50 rounded-xl border-b-2">
              <div class="flex justify-between items-center">
                <div class="flex gap-3 items-center">
                  <img src="../../assets/images/user3.jpg" alt=""
                       class="w-10 h-10 rounded-full object-cover">
                  <div class="font-semibold text-lg">Emilia Clarke</div>
                  <WarningIcon class="w-5 h-5 text-red-500"/>
                </div>
                <div class="text-xs text-gray-500">
                  3 min ago
                </div>
              </div>
              <div class="text-justify mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid
              </div>
            </div>

          </div>

          <div class="flex items-center justify-between mt-5">
            <div class="border-b-2 w-[30%]"></div>
            <div class="px-3 text-gray-400">RESOLVED (10)</div>
            <div class="border-b-2 w-[30%]"></div>
          </div>

          <div class="w-full">
            <div class="flex flex-col p-2 hover:bg-blue-50 rounded-xl border-b-2">
              <div class="flex justify-between items-center">
                <div class="flex gap-3 items-center">
                  <img src="../../assets/images/user.jpg" alt=""
                       class="w-10 h-10 rounded-full object-cover">
                  <div class="font-semibold text-lg">Christian Grey</div>
                  <ResolvedIcon class="w-5 h-5 text-green-500"/>
                </div>
                <div class="text-xs text-gray-500">
                  3 min ago
                </div>
              </div>
              <div class="text-justify mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid
              </div>
            </div>
            <div class="flex flex-col p-2 hover:bg-blue-50 rounded-xl border-b-2">
              <div class="flex justify-between items-center">
                <div class="flex gap-3 items-center">
                  <img src="../../assets/images/user2.jpg" alt=""
                       class="w-10 h-10 rounded-full object-cover">
                  <div class="font-semibold text-lg">Anastasia Steele</div>
                  <ResolvedIcon class="w-5 h-5 text-green-500"/>
                </div>
                <div class="text-xs text-gray-500">
                  3 min ago
                </div>
              </div>
              <div class="text-justify mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid
              </div>
            </div>
            <div class="flex flex-col p-2 hover:bg-blue-50 rounded-xl border-b-2">
              <div class="flex justify-between items-center">
                <div class="flex gap-3 items-center">
                  <img src="../../assets/images/user3.jpg" alt=""
                       class="w-10 h-10 rounded-full object-cover">
                  <div class="font-semibold text-lg">Emilia Clarke</div>
                  <ResolvedIcon class="w-5 h-5 text-green-500"/>
                </div>
                <div class="text-xs text-gray-500">
                  3 min ago
                </div>
              </div>
              <div class="text-justify mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="w-[65%] px-10 bg-white">
        <div class="flex justify-between items-center">
          <div class="w-full">
            <div class="flex items-center gap-4">
              <img src="../../assets/images/user2.jpg" alt=""
                   class="w-24  h-24 rounded-full object-cover">
              <div class="flex flex-col">
                <div class="text-2xl flex items-center gap-2">
                  <div>Anastasia Steele</div>
                  <WarningIcon class="w-5 h-5 text-red-500"/>
                </div>
                <div class="text-gray-500">anasteele92@gmail.com</div>
              </div>

            </div>
          </div>

          <div>
            <button @click="showModal = true">
              <InfoIcon class="w-10 h-10 cursor-pointer text-blue-500"/>
            </button>
            <n-modal v-model:show="showModal">
              <n-card
                  style="width: 600px"
                  title="Modal"
                  :bordered="false"
                  size="huge"
                  role="dialog"
                  aria-modal="true"
              >
                <template #header-extra>
                  Oops!
                </template>
                Content
                <template #footer>
                  Footer
                </template>
              </n-card>
            </n-modal>
          </div>
        </div>

        <div class="flex items-center justify-between mt-1">
          <div class="border-b-2 w-[40%]"></div>
          <div class="px-3 text-gray-400">CONVERSATION</div>
          <div class="border-b-2 w-[40%]"></div>
        </div>

        <div class="my-3 space-y-3 h-[50vh] overflow-auto scroll-bar-w-sm scroll-bar-thumb">

          <div class="flex w-full items-end gap-3">
            <img src="../../assets/images/user2.jpg" alt=""
              class="w-10 h-10 rounded-full object-cover">
            <div >
              <div class="text-xs text-gray-500 ps-2">Anastasia 23<sup>rd</sup> July 12:30PM</div>
              <div class="w-[70%] p-2 bg-gray-100 rounded-t-2xl rounded-br-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>

          </div>

          <div class="flex w-full items-end gap-3 flex-row-reverse">
            <img src="../../assets/images/user.jpg" alt=""
              class="w-10 h-10 rounded-full object-cover">
            <div class="flex flex-col items-end">
              <div class="text-xs text-gray-500 pe-2">Danodya 23<sup>rd</sup> July 12:32PM</div>
              <div class="w-[70%] p-2 bg-blue-100 rounded-t-2xl rounded-bl-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>

          </div>

          <div class="flex items-center justify-between mt-5 w-[60%] m-auto">
            <div class="border-b-2 w-[40%]"></div>
            <div class="px-3 text-gray-400">Today</div>
            <div class="border-b-2 w-[40%]"></div>
          </div>

          <div class="flex w-full items-end gap-3">
            <img src="../../assets/images/user2.jpg" alt=""
              class="w-10 h-10 rounded-full object-cover">
            <div >
              <div class="text-xs text-gray-500 ps-2">Anastasia 12:30PM</div>
              <div class="w-[70%] p-2 bg-gray-100 rounded-t-2xl rounded-br-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
          </div>

          <div class="flex w-full items-end gap-3 flex-row-reverse">
            <img src="../../assets/images/user.jpg" alt=""
              class="w-10 h-10 rounded-full object-cover">
            <div class="flex flex-col items-end">
              <div class="text-xs text-gray-500 pe-2">Danodya 12:30PM</div>
              <div class="w-[70%] p-2 bg-blue-100 rounded-t-2xl rounded-bl-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
          </div>

          <div class="flex w-full items-end gap-3">
            <img src="../../assets/images/user2.jpg" alt=""
              class="w-10 h-10 rounded-full object-cover">
            <div >
              <div class="text-xs text-gray-500 ps-2">Anastasia 12:30PM</div>
              <div class="w-[70%] p-2 bg-gray-100 rounded-t-2xl rounded-br-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
          </div>

          <div class="flex w-full items-end gap-3 flex-row-reverse">
            <img src="../../assets/images/user.jpg" alt=""
              class="w-10 h-10 rounded-full object-cover">
            <div class="flex flex-col items-end">
              <div class="text-xs text-gray-500 pe-2">Danodya 12:30PM</div>
              <div class="w-[70%] p-2 bg-blue-100 rounded-t-2xl rounded-bl-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
          </div>

           <div class="flex w-full items-end gap-3">
            <img src="../../assets/images/user2.jpg" alt=""
              class="w-10 h-10 rounded-full object-cover">
             <div >
               <div class="text-xs text-gray-500 ps-2">Anastasia 12:30PM</div>
               <div class="w-[70%] p-2 bg-gray-100 rounded-t-2xl rounded-br-2xl">
                 Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               </div>
             </div>
          </div>

          <div class="flex w-full items-end gap-3 flex-row-reverse">
            <img src="../../assets/images/user.jpg" alt=""
              class="w-10 h-10 rounded-full object-cover">
            <div class="flex flex-col items-end">
              <div class="text-xs text-gray-500 pe-2">Danodya 12:30PM</div>
              <div class="w-[70%] p-2 bg-blue-100 rounded-t-2xl rounded-bl-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
          </div>

        </div>

        <div class="w-full pt-2 border-2 rounded-2xl mt-5">
          <div class="flex items-center gap-3 px-2">
            <div class="w-10 h-10 rounded-full bg-gray-100">
              <img src="../../assets/images/user.jpg" alt="" class="rounded-full">
            </div>
            <div class="flex-1">
              <input type="text" placeholder="Type a message" class="w-full bg-transparent outline-none">
            </div>
            <div class="flex items-center gap-3">
              <button class="w-10 h-10 flex justify-center items-center rounded-full bg-gray-100">
                <SendMessageIcon class="w-7 h-7 text-black" />
              </button>
            </div>
          </div>
          <div class="flex items-center flex-row-reverse bg-gray-100 rounded-b-2xl px-4 py-1 mt-0.5">
            <div class="flex flex-row-reverse gap-1 items-center cursor-pointer">
              <div>Mark as resolved.</div>
              <ResolvedIcon class="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </OperatorLayout>
</template>

<script setup lang="ts">

import OperatorLayout from "../../layouts/OperatorLayout.vue";
import SearchIcon from "../../assets/icons/SearchIcon.vue";
import InfoIcon from "@assets/icons/InfoIcon.vue";
import {ref} from "vue";
import SendMessageIcon from "@assets/icons/SendMessageIcon.vue";
import WarningIcon from "@assets/icons/WarningIcon.vue";
import ResolvedIcon from "@assets/icons/ResolvedIcon.vue";

const showModal = ref(false);
</script>
