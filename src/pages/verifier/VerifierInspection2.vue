<template>
    <VerifierLayout>
        <div class="bg-white rounded p-3 border-l-4 border-[#0074D9] shadow">
            <p class="font-medium">Mr. Charith Wickramasinghe</p>
            <p class="font-medium">Wickrama Stores, Mawela, Balangoda</p>
            <p class="font-medium">#247899SB</p>
        </div>

        <div class="mt-8 bg-white p-1 border-l-4 border-[#0074D9] shadow rounded w-[22vh]">
            <p class="ml-3 font-medium">Overview</p>
        </div>
        <form>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Provide feedback on aspects that needs improving and an general overview</p>
                <input type="text" placeholder="Write your answer here" class="border-b outline-none mt-2 mb-2 pl-1 w-[100%]">
            </div>

        <div class="bg-white mt-5 shadow rounded pb-6">
            <p class="font-medium pt-3 pl-5 pb-2">Upload images of areas that you think needs attention</p>
          <div class="mt-2 flex justify-center rounded border border-dashed border-gray-300 py-5 w-[96%] ml-6">
            <div class="text-center">
                <ImageIcon class="w-8 h-8 ml-[12.5vh] mt-2"/>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md text-[#0074D9] font-semibold">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only">
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG or JPG up to 10MB</p>
            </div>
          </div>
        </div>
        </form>
        <button class="rounded p-[3px] pr-7 pl-7 bg-[#0074D9] text-white float-right mt-8 shadow-lg" @click="OpenModel('popup')">Submit</button>

        <n-modal v-model:show="showModal">
            <n-card class="rounded-l w-[100vh] h-[50vh] ml-[66vh] mt-[20vh]">
                <div class="ml-12">
                    <p class="text-xl font-medium text-gray-600 ml-12 mt-5">Overall Rating</p>
                    <ScoreIcon class="w-[35vh] h-[45vh] rotate-180 ml-[-5px] mt-[-50px]"/>
                    <div class="absolute top-[20vh] left-[21.5vh]">
                        <p class="inline text-5xl font-bold text-amber-500">5.2</p>
                    </div>
                    <div class="rounded border-2 border-amber-500 text-amber-500 w-[13vh] p-1 relative mt-[-5.5vh] ml-[11vh]">
                        <div class="rounded-full w-3 h-3 border border-amber-500 bg-amber-500"></div>
                        <p class="ml-4 absolute mt-[-2.3vh] ml-5">Average</p>
                    </div>
                </div>
                <div class="float-right mt-[-42.4vh] mr-[7vh]">
                    <p class="text-xl font-medium text-gray-600 ml-[13vh] mt-5">Points of Concern:</p>
                    <ul class="list-disc mt-7 w-[35vh] ml-[15vh]">
                        <li class="mb-2">Some legal documents were not presented</li>
                        <li class="mb-2">Actual Parking slot dimensions differed from the provided details</li>
                        <li class="mb-2">Prone to flooding under heavy rain</li>
                        <li class="mb-2">Parking Space exit may be blocked during peak hours</li>
                    </ul>
                    <button class="rounded p-[3px] pr-3 pl-3 bg-[#0074D9] text-white mr-2 ml-[13.5vh] mt-5"><ApproveIcon class="inline w-4 h-4 mr-2 mb-[3px]"/>Approve and Rate Park</button>
                    <button class="rounded p-[3px] pr-3 pl-3 bg-[#FF0000] text-white"><DeclineIcon class="inline w-4 h-4 mr-2 mb-[3px]"/>Remove Park</button>
                </div>
                

            </n-card>
        </n-modal>

    </VerifierLayout>
    
</template>

<script setup
    lang="ts">

import VerifierLayout from "../../layouts/VerifierLayout.vue";
import ImageIcon from "../../assets/icons/ImageIcon.vue";
import ScoreIcon from "../../assets/icons/ScoreIcon.vue";
import ApproveIcon from "../../assets/icons/Approve.vue"
import DeclineIcon from "../../assets/icons/DeclineIcon.vue"

import { ref } from 'vue';

const showModal = ref(false)
const OpenModel = (name: string) => {
  showModal.value = true
}

</script>