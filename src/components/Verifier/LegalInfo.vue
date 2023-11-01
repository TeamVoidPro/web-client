<template>
    <div class="border-2 rounded w-[95%] ml-7 mb-4 pb-5 bg-gray-100 relative">
        <LandIcon class="ml-[5vh] mt-5 w-12 h-12 absolute"/>
        <div class="ml-[17vh] mt-5">
            <p class="font-bold inline mr-3">Owner Name :</p>
            <p class="inline">{{ props.owner.firstName }} {{ props.owner.lastName }}</p>
        </div>
        <div class="ml-[17vh] mt-2">
            <p class="font-bold inline mr-3">Land Address:</p>
            <p class="inline">{{ props.owner.landAddressNumber }}, {{ props.owner.landAddressStreet }}, {{ props.owner.landAddressCity }}, {{ props.owner.landAddressProvince }}</p>
        </div>
        <div class="relative">
            <p class="absolute font-semibold text-gray-500 right-[40vh] bottom-[2.5vh] ">#{{ props.owner.ownerId }}</p>
            <LegalInfoPopup :id="id"/>
        </div>        
    </div>
</template>

<script setup
        lang = "ts">

import LandIcon from "../../assets/icons/LandIcon.vue";
import LegalInfoPopup from "../verifier/LegalInfoPopup.vue";
import { defineProps } from 'vue';

const props = defineProps<{
    owner: object;

}>();

const id = props.owner.ownerId;

</script>