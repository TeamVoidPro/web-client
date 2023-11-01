<template>
    <VerifierLayout>
        <div class="bg-white rounded p-3 border-l-4 border-[#0074D9] shadow">
            <p class="font-medium">Wickrama Stores, Mawela , Balangoda</p>
            <p class="font-medium">Mr. Charith Wickramasinghe</p>
            <p class="font-medium">#247899SB</p>
        </div>

        <div class="mt-8 bg-white p-1 border-l-4 border-[#0074D9] shadow rounded w-[20vh]">
            <p class="ml-2 font-medium">Overview</p>
        </div>
        <form>
            <div class="bg-white rounded p-3 pl-4 mt-8  shadow">
                <p class="font-medium mb-2">Does the parking space comply to necessary rules and regulations?</p>
                <div>
                    <input type="radio" name="access" class=" align-middle">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" name="access" class=" align-middle">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Is the parking space well maintained?</p>
                <div>
                    <input type="radio" name="slots" class=" align-middle">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" name="slots" class=" align-middle">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Does the parking operator cater to customer needs efficiently?</p>
                <div>
                    <input type="radio" name="dimensions" class=" align-middle">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" name="dimensions" class=" align-middle">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>

            <div class="bg-white rounded p-3 pl-4 mt-5  shadow">
                <p class="font-medium mb-2">Has the parking layout changed since the last inspection?</p>
                <div>
                    <input type="radio" name="land" class=" align-middle">
                    <p class="inline align-text-top pl-2">Yes</p>
                </div>
                <div>
                    <input type="radio" name="land" class=" align-middle">
                    <p class="inline align-text-top pl-[10px]">No</p>
                </div>
            </div>
        </form>
        <button class="rounded p-[3px] pr-7 pl-7 bg-[#0074D9] text-white mt-8 float-right shadow-lg">
            <router-link to="VerifierInspection2">Next</router-link>
        </button>


    </VerifierLayout>
    
</template>

<script setup
    lang="ts">

import VerifierLayout from "../../layouts/VerifierLayout.vue";
    
</script>