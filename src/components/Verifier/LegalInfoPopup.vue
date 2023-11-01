<template>
    <div class="popup">
        <slot/>
        <button class="absolute right-[20vh] bottom-[2.5vh]" @click="OpenModel('popup')"><ChevronDown class="rotate-90  w-6 h-6 "/></button>
        <div>
            <n-modal v-model:show="showModal">
                <n-card class="rounded-l w-[120vh] h-[50vh] ml-[53vh] mt-[20vh]">
                    <div class="ml-[1vh] mt-5">
                        <p class="font-bold inline mr-3">Owner Name :</p>
                        <p class="inline font-medium">Tharusha Atukorala</p>
                    </div>
                    <div class="ml-[1vh] mt-3">
                        <p class="font-bold inline mr-3">Land Address:</p>
                        <p class="inline font-medium">No:15, Circular Road, Malwala, Rathnapura</p>
                    </div>
                    <div class="ml-[1vh] mt-3">
                        <p class="font-bold inline mr-3">Telephone &nbsp; &nbsp; &nbsp; :</p>
                        <p class="inline font-medium">071 490 0086</p>
                    </div>
                    <div class="ml-[1vh] mt-3">
                        <p class="font-bold inline mr-3">Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  :</p>
                        <p class="inline font-medium">atukoralat@gmail.com</p>
                    </div>
                    <div class="ml-[1vh] mt-3">
                        <p class="font-bold inline mr-3">ID &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :</p>
                        <p class="inline font-medium">#247899SB</p>
                    </div>
                    <ImagePopup/>
                    <div class="mt-[7.5vh] ml-[5vh] text-[#0074D9]">
                        <button class="border-[#0074D9] border rounded p-[3px] pr-2 pl-2 mr-2" @click="OpenPdf('pdf')"><MapIcon class="inline w-4 h-4 mr-1"/>Land Map</button>
                        <button class="border-[#0074D9] border rounded p-[3px] pr-2 pl-2 mr-2" @click="OpenPdf('pdf')"><UserIcon class="inline w-4 h-4 mr-1"/>Owner NIC</button>
                        <button class="border-[#0074D9] border rounded p-[3px] pr-2 pl-2 mr-2" @click="OpenPdf('pdf')"><ApproveIcon class="inline w-4 h-4 mr-1"/>Approval Letter</button>
                        <button class="border-[#0074D9] border rounded p-[3px] pr-2 pl-2 mr-2" @click="OpenPdf('pdf')"><LayoutIcon class="inline w-4 h-4 mr-1"/>Parking Lot Layout</button>
                        <button class="border-[#0074D9] border rounded p-[3px] pr-2 pl-2" @click="OpenPdf('pdf')"><DocumentIcon class="inline w-4 h-4 mr-1"/>Land Ownership Document</button>
                    </div>
                    <div class="mt-8 ml-[33vh]">
                        <button class="rounded p-[3px] pr-3 pl-3 bg-[#0074D9] text-white mr-2" @click="CloseModel('popup')"><CalendarIcon class="inline w-4 h-4 mr-2 mb-[3px]"/>Schedule On-Site Visit</button>
                        <button class="rounded p-[3px] pr-3 pl-3 bg-[#FF0000] text-white"  @click="DeclineModel('popup')"><DeclineIcon class="inline w-4 h-4 mr-2 mb-[3px]"/>Decline</button>
                    </div>

                </n-card>
            </n-modal>
            <n-modal v-model:show="showPdf">
                <embed src="https://www.africau.edu/images/default/sample.pdf" class="w-[150vh] h-[80vh] ml-[40vh] mt-[8vh]"/>
            </n-modal>
            <n-modal v-model:show="Confirmation">
                <n-card class="rounded-xl w-[40vh] h-[55vh] ml-[92vh] mt-[26vh]">
                    <div class="w-[25vh] mt-12 ml-7">
                        <img src="../../assets/images/logo-3.png">
                    </div>
                    <div >
                        <ConfirmationIcon class="w-[20vh] h-[20vh] mt-10 ml-[6.5vh]"/>
                    </div>
                    <p class="font-medium text-center leading-5 mt-6">Land owner has been notified to schedule a date for inspection.</p>

                </n-card>
            </n-modal>
            <n-modal v-model:show="Decline">
                <n-card class="rounded-xl w-[55vh] h-[40vh] ml-[85vh] mt-[26vh]">
                    <textarea placeholder="A brief description on why the documents are being rejected" class="w-[50vh] h-[30vh] outline-none"></textarea>
                    <button class="rounded p-[3px] pr-3 pl-3 bg-[#FF0000] text-white ml-[18vh] mt-[-2vh]"  @click="CloseAll('popup')"><DeclineIcon class="inline w-4 h-4 mr-2 mb-[3px]"/>Decline</button>
                </n-card>
            </n-modal>
        </div>

    </div>

</template>

<script setup
        lang = "ts">

import ChevronDown from "../../assets/icons/ChevronDown.vue";
import MapIcon from "../../assets/icons/MapIcon.vue";
import UserIcon from "../../assets/icons/UserIcon.vue";
import ApproveIcon from "../../assets/icons/ApproveIcon.vue";
import LayoutIcon from "../../assets/icons/LayoutIcon.vue";
import DocumentIcon from "../../assets/icons/DocumentIcon.vue";
import CalendarIcon from "../../assets/icons/CalendarIcon.vue";
import DeclineIcon from "../../assets/icons/DeclineIcon.vue";
import ConfirmationIcon from "../../assets/icons/ConfirmationIcon.vue";
import ImagePopup from "../Verifier/ImagePopup.vue";

import { ref } from 'vue';

const showModal = ref(false)
const Confirmation= ref(false)
const OpenModel = (name: string) => {
  showModal.value = true
}
const CloseModel = (name: string) => {
    Confirmation.value = true
  showModal.value = false
}

const showPdf = ref(false)
const OpenPdf = (name: string) => {
  showPdf.value = true
}

const Decline = ref(false)
const DeclineModel = (name: string) => {
  Decline.value = true
}

const CloseAll = (name:string) => {
    Decline.value = false
    showModal.value = false
}



</script>

