<template>
    <VerifierLayout>
        <div class="bg-white rounded p-3 border-l-4 border-[#0074D9] shadow">
            <p class="font-medium">Mr. Tharusha Atukorala</p>
            <p class="font-medium">No.15, Circular Road, Mahawala, Rathnapura</p>
            <p class="font-medium">#247899SB</p>
        </div>

        <div class="mt-8 bg-white p-1 border-l-4 border-[#0074D9] shadow rounded w-[20vh]">
            <p class="ml-2 font-medium">Physical Aspects</p>
        </div>
        
            <div class="bg-white rounded p-3 pl-4 mt-8  shadow">
                <p class="font-medium mb-2">Does the plot of land have easy access?</p>
                <div>
                    <input type="radio" v-model="EasyAccess" class=" align-middle" value="true">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" v-model="EasyAccess" class=" align-middle" value="false">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Does the plot have the mentioned amount of parking slots?</p>
                <div>
                    <input type="radio" v-model="SlotCount" class=" align-middle" value="true">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" v-model="SlotCount" class=" align-middle" value="false">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Does the parking slot dimensions comply to the given rules?</p>
                <div>
                    <input type="radio" v-model="SlotDimensions" class=" align-middle" value="true">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" v-model="SlotDimensions" class=" align-middle" value="false">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Does the dimensions of land match to the values given by the owner?</p>
                <div>
                    <input type="radio" v-model="LandDimensions" class=" align-middle" value="true">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" v-model="LandDimensions" class=" align-middle" value="false">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

        <div class="mt-8 bg-white p-1 border-l-4 border-[#0074D9] shadow rounded w-[20vh]">
            <p class="ml-5 font-medium">Legal Aspects</p>
        </div>
        
            <div class="bg-white rounded p-3 pl-4 mt-8  shadow">
                <p class="font-medium mb-2">Has the owner presented all the required legal documents physically?</p>
                <div>
                    <input type="radio" v-model="DocumentPresentation" class=" align-middle" value="true">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" v-model="DocumentPresentation" class=" align-middle" value="false">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">If no, what are the reasons for not presenting them?</p>
                <input type="text" placeholder="Write your answer here" class="border-b outline-none mt-2 mb-2 pl-1 w-[100%]" v-model="NoDocumentReason">
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Does the serial numbers and dates on the documents match with the ones the owner provided to the system?</p>
                <div>
                    <input type="radio" v-model="SerialMatch" class=" align-middle" value="true">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" v-model="SerialMatch" class=" align-middle" value="false">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">If no, what are the errors you found?</p>
                <input type="text" placeholder="Write your answer here" class="border-b outline-none mt-2 mb-2 pl-1 w-[100%]" v-model="NoSerialMatchReason">
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Are there any other points of concern regarding the legality of the documents?</p>
                <input type="text" placeholder="Write your answer here" class="border-b outline-none mt-2 mb-2 pl-1 w-[100%]" v-model="Concerns">
            </div>

        <div class="mt-8 bg-white p-1 border-l-4 border-[#0074D9] shadow rounded w-[22vh]">
            <p class="ml-3 font-medium">General Overview</p>
        </div>
            <div class="bg-white rounded p-3 pl-4 mt-8  shadow">
                <p class="font-medium mb-2">Do you redeem the plot of land as a suitable parking place?</p>
                <div>
                    <input type="radio" v-model="SuitablePlace" class=" align-middle" value="true">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" v-model="SuitablePlace" class=" align-middle" value="false">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">If no, what are the reasons?</p>
                <input type="text" placeholder="Write your answer here" class="border-b outline-none mt-2 mb-2 pl-1 w-[100%]" v-model="NotSuitableReasons">
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Is the plot of land prone to natural disasters? (Floods, landslides, etc...)</p>
                <div>
                    <input type="radio" v-model="DisasterProne" class=" align-middle" value="true">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" v-model="DisasterProne" class=" align-middle" value="false">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">If yes, what are they?</p>
                <input type="text" placeholder="Write your answer here" class="border-b outline-none mt-2 mb-2 pl-1 w-[100%]" v-model="DisasterReasons">
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Give your general impression on the plot of land, surroundings and safety.</p>
                <input type="text" placeholder="Write your answer here" class="border-b outline-none mt-2 mb-2 pl-1 w-[100%]" v-model="GeneralImpression">
            </div>

        <div class="bg-white mt-5 shadow rounded pb-6">
            <p class="font-medium pt-3 pl-5 pb-2">Upload images of the land from every angle. (Entrance, exit, parking slots, etc...)</p>
          <div class="mt-2 flex justify-center rounded border border-dashed border-gray-300 py-5 w-[96%] ml-6">
            <div class="text-center">
                <ImageIcon class="w-8 h-8 ml-[12.5vh] mt-2"/>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md text-[#0074D9] font-semibold">
                  <span>Upload a file</span>
                  <input id="file-upload" name="Images" type="file" class="sr-only">
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG or JPG up to 10MB</p>
            </div>
          </div>
        </div>
        <div class="mb-10">
            <button class="rounded p-[3px] pr-7 pl-7 bg-[#0074D9] text-white float-right mt-8 shadow-lg" @click="OpenModel">Submit</button>
        </div>
        
        

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
                    <button class="rounded p-[3px] pr-3 pl-3 bg-[#0074D9] text-white mr-2 ml-[13.5vh] mt-5"><ApproveIcon class="inline w-4 h-4 mr-2 mb-[3px]"/>Approve Land</button>
                    <button class="rounded p-[3px] pr-3 pl-3 bg-[#FF0000] text-white"><DeclineIcon class="inline w-4 h-4 mr-2 mb-[3px]"/>Decline</button>
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
import { defineProps } from 'vue';
import { basicOwnerInfo } from "../../store/verifierStore";
const Ownerstore = basicOwnerInfo();

const props = defineProps<{
    id: string;
}>();

const hello = localStorage.getItem('id');
console.log(hello)

const showModal = ref(false)
const OpenModel = (name: string) => {
  showModal.value = true
}
    
</script>