<template>
    <div class="border-2 rounded w-[95%] ml-7 mb-4 pb-5 bg-gray-100 relative">
        <LandIcon class="ml-[5vh] mt-5 w-12 h-12 absolute"/>
        <div class="ml-[17vh] mt-5">
            <p class="font-bold inline mr-3">Owner Name :</p>
            <p class="inline">Tharusha Atukorala</p>
        </div>
        <div class="ml-[17vh] mt-2">
            <p class="font-bold inline mr-3">Land Address:</p>
            <p class="inline">No:15, Circular Road, Malwala, Rathnapura</p>
        </div>
        <div class="relative">
            <p class="absolute font-semibold text-gray-500 right-[40vh] bottom-[2.5vh] ">#247899SB</p>
            <LegalInfoPopup/>
        </div>        
    </div>
</template>

<script setup
        lang = "ts">

import LandIcon from "../../assets/icons/LandIcon.vue";
import LegalInfoPopup from "../verifier/LegalInfoPopup.vue";

</script>