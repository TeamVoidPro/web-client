<template>
    <VerifierLayout>
        <div class="bg-white rounded p-3 border-l-4 border-[#0074D9] shadow">
            <p class="font-medium">Mr. Tharusha Atukorala</p>
            <p class="font-medium">No.15, Circular Road, Mahawala, Rathnapura</p>
            <p class="font-medium">#247899SB</p>
        </div>

        <div class="mt-8 bg-white p-1 border-l-4 border-[#0074D9] shadow rounded w-[20vh]">
            <p class="ml-5 font-medium">Legal Aspects</p>
        </div>
        <form>
            <div class="bg-white rounded p-3 pl-4 mt-8  shadow">
                <p class="font-medium mb-2">Has the owner presented all the required legal documents physically?</p>
                <div>
                    <input type="radio" name="documents" class=" align-middle">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" name="documents" class=" align-middle">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">If no, what are the reasons for not presenting them?</p>
                <input type="text" placeholder="Write your answer here" class="border-b outline-none mt-2 mb-2 pl-1 w-[100%]">
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Does the serial numbers and dates on the documents match with the ones the owner provided to the system?</p>
                <div>
                    <input type="radio" name="serial" class=" align-middle">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" name="serial" class=" align-middle">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">If no, what are the errors you found?</p>
                <input type="text" placeholder="Write your answer here" class="border-b outline-none mt-2 mb-2 pl-1 w-[100%]">
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Are there any other points of concern regarding the legality of the documents?</p>
                <input type="text" placeholder="Write your answer here" class="border-b outline-none mt-2 mb-2 pl-1 w-[100%]">
            </div>
        </form>
        <button class="rounded p-[3px] pr-7 pl-7 bg-[#0074D9] text-white mt-8 shadow-lg">
            <router-link to="SurveyPhysical">Back</router-link>
        </button>
        <button class="rounded p-[3px] pr-7 pl-7 bg-[#0074D9] text-white float-right mt-8 shadow-lg">
            <router-link to="SurveyGeneral">Next</router-link>
        </button>


    </VerifierLayout>
    
</template>

<script setup
    lang="ts">

import VerifierLayout from "../../layouts/VerifierLayout.vue";
    
</script>