<template>
    <VerifierLayout>
        <div class="bg-white w-[100%] pb-2">
            <div>
                <div class="flex items-center gap-5">
                        <p class="mr-[100vh] text-xl font-bold text-gray-500 pt-3 ml-10">Pending Verifications</p>
                        <img src="../../assets/images/bell-icon.svg" alt="Bell Icon" class="w-9 h-9 pt-4">
                        <img src="../../assets/images/user.jpg" alt="User" class="w-10 h-10 rounded-full object-cover border border-black mt-4">
                </div>
                <div class="pt-3 border-b-2 border-blue-600 w-[95%] m-auto"></div>

                <!-- sort section --> 
                <div class="flex ml-7 mt-10 border-2 outline-gray-100 rounded p-1 w-[35vh]">
                    <div class="pl-3">
                        <SortIcon/>   
                    </div>
                    <div>
                        <p class="font-bold pl-1">Sort:</p>
                    </div>
                    <div class="pl-5">
                        <select name="sort" id="sort" class="outline-none">
                            <option>Upcoming First</option>
                            <option>Oldest First</option>
                            <option>Alphabetical Order</option>
                        </select>
                    </div>
                </div>
                <!-- sort end -->

                <!-- search section -->
                <div class="flex mr-[4.3vh] mt-[-4.3vh] border-2 outline-gray-100 rounded p-1 w-[35vh] float-right">
                    <div class="pl-3">
                        <SearchIcon class="w-5 h-5"/>   
                    </div>
                    <div>
                        <input type="text" placeholder="Search" class="pl-3 outline-none">
                    </div>
                </div>
                <!-- Search end -->

                <!-- padding -->
                <div class="mt-12"></div>
                <SurveyInfo/>
                <SurveyInfo/>
                <SurveyInfo/>
                <SurveyInfo/>
                <SurveyInfo/>
                <SurveyInfo/>
                <SurveyInfo/>

            </div>

        </div>


    </VerifierLayout>

</template>

<script setup
    lang = "ts">

import VerifierLayout from "../../layouts/VerifierLayout.vue";
import SortIcon from "../../assets/icons/SortIcon.vue";
import SearchIcon from "../../assets/icons/SearchIcon.vue";
import SurveyInfo from "../../components/Verifier/SurveyInfo.vue";

</script>