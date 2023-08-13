<template>
    <div class="border-2 rounded w-[95%] ml-7 mb-4 pb-5 bg-gray-100 relative">
        <InspectionIcon class="ml-[5vh] mt-5 w-12 h-12 absolute"/>
        <div class="ml-[17vh] mt-5">
            <p class="font-bold inline mr-3">Owner Name :</p>
            <p class="inline">Tharusha Atukorala</p>
        </div>
        <div class="ml-[17vh] mt-2">
            <p class="font-bold inline mr-3">Land Address:</p>
            <p class="inline">No:15, Circular Road, Malwala, Rathnapura</p>
        </div>
        <div class="relative">
            <button class="absolute rounded p-[3px] pr-7 pl-7 bg-[#0074D9] text-white mr-2 right-[23.2%] bottom-[1.5vh] shadow-lg"  @click="OpenPdf('pdf')">View Report</button>
        </div>
        <div class="relative">
            <p class="float-right font-semibold text-gray-500 mr-2">#247899SB</p>
        </div>
        <n-modal v-model:show="showPdf">
            <embed src="https://www.africau.edu/images/default/sample.pdf" class="w-[150vh] h-[80vh] ml-[40vh] mt-[8vh]"/>
        </n-modal>        
    </div>
</template>

<script setup
        lang = "ts">

import InspectionIcon from "../../assets/icons/HistoryInspection.vue";
import { ref } from 'vue';

const showPdf = ref(false)
const OpenPdf = (name: string) => {
  showPdf.value = true
}

</script>