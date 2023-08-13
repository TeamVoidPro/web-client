<template>
    <VerifierLayout>
        <div class="bg-white w-[100%] pb-2">
            <div>
                <div class="flex items-center gap-5">
                    <p class="mr-[105vh] text-xl font-bold text-gray-500 pt-3 ml-10">Surveying History</p>
                    <img src="../../assets/images/bell-icon.svg" alt="Bell Icon" class="w-9 h-9 pt-4">
                    <img src="../../assets/images/user.jpg" alt="User" class="w-10 h-10 rounded-full object-cover border border-black mt-4">
                </div>
                <div class="pt-3 border-b-2 border-blue-600 w-[95%] m-auto"></div>
                <div class="ml-7 mt-10">
                    <button class="bg-[#0074D9] text-[#FFFFFF] pl-3 pr-3 pt-1 pb-1 rounded mr-4 border-2 border-[#0074D9] shadow">Initial Inspections</button>
                    <button class="border-2 border-[#0074D9] text-[#0074D9] font-medium rounded pl-3 pr-3 pt-1 pb-1 shadow">Annual Inspections</button>
                </div>

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
                            <option>Newest First</option>
                            <option>Oldest First</option>
                            <option>Alphabetical Order</option>
                        </select>
                    </div>
                </div>
                <!-- sort end -->

                <!-- search section -->
                <div class="flex mr-[4.3vh] mt-[-5vh] border-2 outline-gray-100 rounded p-1 w-[35vh] float-right">
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
                <HistoryInfo/>
                <HistoryInfo/>
                <HistoryInfo/>
                <HistoryInfo/>
                <HistoryInfo/>
            </div>
        </div>

    </VerifierLayout>

</template>

<script setup
    lang = "ts">

import VerifierLayout from "../../layouts/VerifierLayout.vue";
import SortIcon from "../../assets/icons/SortIcon.vue";
import SearchIcon from "../../assets/icons/SearchIcon.vue";
import HistoryInfo from "../../components/Verifier/HistoryInfo.vue";

</script>