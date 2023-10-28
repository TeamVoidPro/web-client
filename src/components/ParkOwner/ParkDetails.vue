<template>
  <div class="bg-white h-fit rounded-3xl p-5 w-3/5">
    <div class="text-2xl font-bold flex text-center justify-center mb-4">
      Enter your park details
    </div>
    <div class="flex gap-4">
      <div class="flex flex-col mb-4">
        <n-card v-if="questionNo[0].trigger"
            class="bg-white rounded text-center mb-2"
            title="Do you already have a park?"
            bordered
            style="width: 600px"
        >
          <n-radio-group v-model:value="selectedOption1" class="flex-col flex gap-2">
            <n-radio :value="1" v-model="selectedOption1" >Yes I already have a park</n-radio>
            <n-radio :value="2" v-model="selectedOption1" >No, I need to make my land a park</n-radio>
          </n-radio-group>
        </n-card>
        <n-card v-if="selectedOption1===2"
                class="flex bg-white rounded text-center"
                title="Enter dimensions of the land"
                bordered
                style="width: 600px">
          <div class="flex gap-10 mb-2">
            Enter the length of the land
            <n-input-number v-model:value="length" min="1" max="100" placeholder="Length" class="w-2/5"  />
          </div>
          <div class="flex gap-12">
            Enter the width of the land
            <n-input-number v-model:value="width" min="1" max="100" placeholder="Width" class="w-2/5"  />
          </div>

        </n-card>
        <n-card v-if="questionNo[2].trigger && selectedOption1===1"
            class="bg-white rounded text-center mb-2"
            title="What is the category of the park?"
            bordered
            style="width: 600px"
        >
          <n-radio-group v-model:value="selectedOption2" class="flex-col flex gap-2">
            <n-radio :value="1" v-model="selectedOption2">
              Ground Level  Vehicle Park
            </n-radio>
            <n-radio :value="2" v-model="selectedOption2">
              Multi Story Vehicle Park
            </n-radio>
          </n-radio-group>
        </n-card>
        <n-card v-if="questionNo[3].trigger && selectedOption2===2"
            class="flex bg-white rounded text-center mb-2"
            bordered
            style="width: 600px">
          <div class="flex gap-4">
            <div class="flex w-1/2 gap-2">
              Number of Stories
              <n-input-number v-model:value="stories" min="1" max="100" placeholder="Number of stories" class="w-1/3"  />
            </div>
            <div class="flex gap-2">
              <n-checkbox class="flex items-center justify-center" v-model:checked="storyList[1].available">
              </n-checkbox>
              <div class="flex items-center justify-between">
                Has Underground Level Parking
              </div>
            </div>
          </div>


        </n-card>
        <n-card v-if="questionNo[5].trigger && selectedOption1===1"
                class="bg-white rounded flex  w-4/5 justify-center text-center"
                title="Upload the park map"
                bordered
                style="width: 600px">
          <n-upload
              multiple
              directory-dnd
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :max="5"
          >
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <archive-icon />
                </n-icon>
              </div>
              <n-text style="font-size: 16px">
                Click or drag a file to this area to upload
              </n-text>
              <n-p depth="3" style="margin: 8px 0 0 0">
                SVG, PNG, JPG, GIF up to 10MB
              </n-p>
            </n-upload-dragger>
          </n-upload>
        </n-card>
      </div>
      <div>
        <n-card v-if="questionNo[4].trigger && selectedOption1===1"
            class="bg-white rounded flex  w-4/5 justify-center text-center mb-2"
            title="Enter the number of parking slots"
            bordered
            style="width: 600px">
            <n-collapse default-expanded-names="1" accordion>
              <div v-for="story in storyList">
              <n-collapse-item  :title="story.storyNo" v-if="story.available" name="1">
                <div class="flex flex-col gap-1 items-center justify-center" >
                  <div class="flex flex-col items-start w-4/5 gap-1 justify-center">
                    <div class="flex items-center justify-between w-full">
                      <n-checkbox class="w-2/5 flex items-center justify-start" :value="parkSlots.car">
                        <div class="flex items-center justify-between w-full">
                          Car Slots
                        </div>
                      </n-checkbox>
                      <n-input-number v-model:value="parkSlots.car" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
                    </div>
                    <div class="flex items-center justify-between w-full">
                      <n-checkbox class="w-2/5 flex items-center justify-start" v-model:value="parkSlots.threeWheel">
                        <div class="flex items-center justify-between w-full">
                          Three Wheeler Slots
                        </div>
                      </n-checkbox>
                      <n-input-number v-model:value="parkSlots.threeWheel" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
                    </div>
                    <div class="flex items-center justify-between w-full">
                      <n-checkbox class="w-2/5 flex items-center justify-start" v-model:value="parkSlots.motorBike">
                        <div class="flex items-center justify-between w-full">
                          Bike Slots
                        </div>
                      </n-checkbox>
                      <n-input-number v-model:value="parkSlots.motorBike" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
                    </div>
                    <div class="flex items-center justify-between w-full">
                      <n-checkbox class="w-2/5 flex items-center justify-start" v-model:value="parkSlots.van">
                        <div class="flex items-center justify-between w-full">
                          Van Slots
                        </div>
                      </n-checkbox>
                      <n-input-number v-model:value="parkSlots.van" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
                    </div>
                    <div class="flex items-center justify-between w-full">
                      <n-checkbox class="w-2/5 flex items-center justify-start" v-model:value="parkSlots.lorry">
                        <div class="flex items-center justify-between w-full">
                          Lorry Slots
                        </div>
                      </n-checkbox>
                      <n-input-number v-model:value="parkSlots.lorry" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
                    </div>
                    <div class="flex items-center justify-between w-full">
                      <n-checkbox class="w-2/5 flex items-center justify-start" v-model:value="parkSlots.bus">
                        <div class="flex items-center justify-between w-full">
                          Bus Slots
                        </div>
                      </n-checkbox>
                      <n-input-number v-model:value="parkSlots.bus" min="1" max="100" placeholder="Number of slots" class="w-2/5"  />
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-16 my-3 text-lg w-full">
                    <div class="flex gap-3">
                      Total Slots
                    </div>
                    <div class="flex gap-3">
                      {{totalSlots}}
                    </div>
                  </div>
                </div>
              </n-collapse-item>
              </div>
            </n-collapse>
        </n-card>


      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">

import {computed, ref, watch} from "vue";
import {NRadio, NRadioGroup} from "naive-ui";


const questionNo = ref([
  {
    qNo: 0,
    trigger:true
  },
  {
    qNo: 1,
    trigger:false
  },
  {
    qNo: 2,
    trigger:true
  },
  {
    qNo: 3,
    trigger:true
  },
  {
    qNo: 4,
    trigger:true
  },
  {
    qNo: 5,
    trigger:true
  },
  ]);

const stories = ref(1);

const storyList = ref(
    [
      {
        storyNo: "Ground Level",
        available: true,
        slots: {
          car: 0,
          threeWheel: 0,
          motorBike: 0,
          van: 0,
          lorry: 0,
          bus: 0,
        }
      },
      {
        storyNo: "Underground Level",
        available: false,
        slots: {
          car: 0,
          threeWheel: 0,
          motorBike: 0,
          van: 0,
          lorry: 0,
          bus: 0,
        }
      },
      {
        storyNo: "1st floor",
        available: true,
        slots: {
          car: 0,
          threeWheel: 0,
          motorBike: 0,
          van: 0,
          lorry: 0,
          bus: 0,
        },
      }
    ]
);

watch(stories, (newValue, oldValue) => {
  if(newValue>=1){
    if(newValue-oldValue>0){
      //add another story for storyList
      storyList.value.push({
        storyNo: `${newValue} ${newValue===2 ? "nd" : (newValue===3 ? "rd" : "th")} floor`,
        available: true,
        slots: {
          car: 0,
          threeWheel: 0,
          motorBike: 0,
          van: 0,
          lorry: 0,
          bus: 0,
        },
      });
    }
    else if(newValue-oldValue<0){
      //remove the last story from storyList
      storyList.value.pop();
    }
  }


});
const selectedOption1 = ref(1);
const selectedOption2 = ref(1);
const parkSlots = ref({
  car: 0,
  threeWheel: 0,
  motorBike: 0,
  van: 0,
  lorry: 0,
  bus: 0,
});

const totalSlots = computed( ()=> {
  return Object.values(parkSlots.value).reduce((a, b) => a + b, 0);
});

const hasUnderground= ref(false);



</script>
