<template>
    <div>
        <slot/>
        <div class="float-right mt-[-22vh] ml-1 mr-[1vh]">
            <img src="https://lovehastings.com/wp-content/uploads/2018/12/Car-park.jpg" class="w-[18vh] h-[12vh] mb-1 cursor-pointer" @click="OpenImage('image')">
            <img src="https://www.mottmac.com/download/file/4688?defaultfile=%2Fdefaultimages%2Fdefaultimage.png&cultureid=127&useLarge=true" class="w-[18vh] h-[12vh] cursor-pointer" @click="OpenImage('image')">
        </div>
        <div class="float-right mt-[-22vh]">
            <img src="https://img.freepik.com/premium-photo/cars-parking-lot-evening-light-sun_150893-219.jpg" class="w-[18vh] h-[12vh] mb-1 cursor-pointer" @click="OpenImage('image')">
            <img src="https://i2-prod.leicestermercury.co.uk/news/leicester-news/article4154462.ece/ALTERNATES/s1200/4_DSC_9062JPG.jpg" class="w-[18vh] h-[12vh] cursor-pointer" @click="OpenImage('image')">
        </div>

        <div>
            <n-modal v-model:show="showImage">
                <img src="https://img.freepik.com/premium-photo/cars-parking-lot-evening-light-sun_150893-219.jpg" class="w-[145vh] h-[80vh] rounded">
            </n-modal>
        </div>

    </div>
</template>

<script setup
        lang = "ts">

import { ref } from 'vue';

const showImage = ref(false)
const OpenImage = (name: string) => {
  showImage.value = true
}


</script>