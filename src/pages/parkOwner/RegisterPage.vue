<script setup lang="ts">
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'

import {ref} from "vue";
import Navbar from "@/components/Navbar.vue";

// ts-ignore
// import ParkDrawer from "@/components/ParkDrawer/ParkDrawer.vue";
const value = ref('')
const IdentityType = ref<String|null>('NIC')

const handleChange = (e: Event) => {
  IdentityType.value = (e.target as HTMLInputElement).value
}

</script>

<template>
<!--  <ParkDrawer width=1000 height=800></ParkDrawer>-->
  <Navbar title="" />
  <div class="h-screen flex items-center justify-center">
    <div class="flex flex-col justify-center items-start gap-8 bg-white p-6 rounded-3xl">
      <div class="w-full flex gap-8">
        <div class=" p-4 flex flex-col gap-8 w-1/2">
          <div class="flex flex-col gap-4">
            <div class="text-3xl font-bold mb-4">
              Personal Details
            </div>
            <div class="flex gap-2">
              <div class="flex flex-col gap-2">
                <div class="flex">
                  Your First Name
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="value" type="text" placeholder="First Name" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex">
                  Your Last Name
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="value" type="text" placeholder="Last Name" />
              </div>
            </div>
            <div class="flex gap-2">
              <div class="flex flex-col gap-2">
                <div class="flex">
                  Phone No
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="value" type="text" placeholder="Your Phone No" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex">
                  NIC No
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="value" type="text" placeholder="Your NIC No" />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="text-3xl font-bold mb-4">
              Address Details
            </div>
            <div class="flex gap-2">
              <div class="flex flex-col gap-2">
                <div class="flex">
                  Your Home No
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="value" type="text" placeholder="Your Home No" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex">
                  Your Street
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="value" type="text" placeholder="Your Home Street" />
              </div>
            </div>
            <div class="flex gap-2">
              <div class="flex flex-col gap-2">
                <div class="flex">
                  City
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="value" type="text" placeholder="Your City" />
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex">
                  Province
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="value" type="text" placeholder="Your Province" />
              </div>
            </div>

          </div>
        </div>
        <div class="p-4 flex flex-col gap-8 w-1/2">
          <div class="flex flex-col gap-4">
            <div class="text-3xl font-bold">
              Identification Details
            </div>
            <div class="flex gap-2">
              <div class="flex flex-col justify-between gap-4">
                <div class="flex">
                  Identified Using
                </div>
                <div class="flex gap-2 w-full">
                  <div :class="IdentityType === 'NIC' ? 'bg-green-200  border-2 border-green-800 rounded-3xl px-3 py-2' : ' rounded-3xl border-2 px-3 py-2' + ''">
                    <n-radio
                        :checked="IdentityType === 'NIC'"
                        value="NIC"
                        name="basic-demo"
                        @change="handleChange"
                    >
                  <span :class="IdentityType === 'NIC' ? 'text-black font-bold text-md ' : 'text-black' + ''">
                  National Identity Card
                  </span>
                    </n-radio>
                  </div>
                  <div :class="IdentityType === 'DrivingLicense' ? 'bg-green-200 border-2 border-green-800 rounded-3xl px-3 py-2' : ' rounded-3xl border-2 px-3 py-2' + ''">
                    <n-radio
                        :checked="IdentityType === 'DrivingLicense'"
                        value="DrivingLicense"
                        name="basic-demo"
                        @change="handleChange"
                    >
                  <span :class="IdentityType === 'DrivingLicense' ? 'text-black font-bold text-md ' : 'text-black' + ''">
                  Driving Licenses

                  </span>
                    </n-radio>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center justify-center w-full">
                    <div class="flex font-bold w-4/12">
                      NIC Front
                    </div>
                    <n-upload
                        multiple
                        directory-dnd
                        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                        :max="5"
                    >
                      <n-upload-dragger class="rounded-3xl border-3">
                        <div style="margin-bottom: 12px">
                          <n-icon size="48" :depth="3">
                            <archive-icon />
                          </n-icon>
                        </div>
                        <n-text style="font-size: 16px">
                          Click to upload or drag & drop
                        </n-text>
                        <n-p depth="3" style="margin: 8px 0 0 0">
                          SVG, PNG, JPG, GIF up to 10MB
                        </n-p>
                      </n-upload-dragger>
                    </n-upload>
                  </div>
                  <div class="flex items-center justify-center w-full">
                    <div class="flex font-bold w-4/12">
                      NIC Back
                    </div>
                    <n-upload
                        multiple
                        directory-dnd
                        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                        :max="5"
                    >
                      <n-upload-dragger class=" border-3 rounded-3xl">
                        <div style="margin-bottom: 12px">
                          <n-icon size="48" :depth="3">
                            <archive-icon />
                          </n-icon>
                        </div>
                        <n-text style="font-size: 16px">
                          Click to upload or drag & drop
                        </n-text>
                        <n-p depth="3" style="margin: 8px 0 0 0">
                          SVG, PNG, JPG, GIF up to 10MB
                        </n-p>
                      </n-upload-dragger>
                    </n-upload>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center gap-4">
        <button class="bg-primary text-white rounded-3xl text-xl px-6 py-2">
          Next
        </button>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>