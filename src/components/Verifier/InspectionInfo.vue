<template>
    <div class="border-2 rounded w-[95%] ml-7 mb-4 pb-5 bg-gray-100 relative shadow-sm">
        <SurveyIcon class="ml-[5vh] mt-[6.5vh] w-12 h-12 absolute"/>
        <div class="ml-[17vh] mt-5">
            <p class="font-bold inline mr-3">Owner Name &nbsp;&nbsp;:</p>
            <p class="inline">Charith Wickramasinghe</p>
        </div>
        <div class="ml-[17vh] mt-2">
            <p class="font-bold inline mr-3">Land Address :</p>
            <p class="inline">Wickrama Stores, Mawela, Balangoda</p>
        </div>
        <div class="ml-[17vh] mt-2">
            <p class="font-bold inline mr-3">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
            <p class="inline">10/08/2023</p>z
        </div>
        <div class="ml-[17vh] mt-2">
            <p class="font-bold inline mr-3">Time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</p>
            <p class="inline">1.00PM</p>
        </div>
        <div class="relative">
            <p class="absolute font-semibold text-gray-500 right-[1vh]">#247899SB</p>
            <button class="absolute rounded p-[3px] pr-7 pl-7 bg-[#0074D9] text-white mr-2 right-[21.2%] bottom-[5vh] shadow-lg">
                <router-link to="VerifierInspection1">Start Survey</router-link>
            </button>
        </div> 
    </div>

</template>

<script setup
    lang = "ts">

import SurveyIcon from "../../assets/icons/SurveyIcon.vue";

</script>