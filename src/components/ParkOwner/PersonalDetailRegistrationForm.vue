<script setup lang="ts">

import {ArchiveOutline as ArchiveIcon} from '@vicons/ionicons5'
// import {Checkmark16Filled} from '@vicons/fluent'

import {ref} from "vue";


import {UploadFileInfo, useMessage} from "naive-ui";
import {useParkingOwnerRegistrationStore} from "@store/parkingOwnerRegisterStore.ts";


// ts-ignore
// import ParkDrawer from "@/components/ParkDrawer/ParkDrawer3D.vue";

const pORStore = useParkingOwnerRegistrationStore();


const showModal = ref(false)
const previewImageUrl = ref('')


const handleFrontUpload = ({file, event}: {
  file: UploadFileInfo
  event?: ProgressEvent
}) => {
  const response = (event?.target as XMLHttpRequest).response
  const {fileName} = JSON.parse(response)
  pORStore.setNICFrontImage(fileName)
  file.name = file.name.length > 10 ? file.name.substring(0, 20) + '...' : file.name
  return file
}
const handleBackUpload = ({file, event}: {
  file: UploadFileInfo
  event?: ProgressEvent
}) => {
  const response = (event?.target as XMLHttpRequest).response
  const {fileName} = JSON.parse(response)
  pORStore.setNICBackImage(fileName)
  //limit filename to 10 characters and add '...' at the end
  file.name = file.name.length > 10 ? file.name.substring(0, 20) + '...' : file.name
  return file
}



</script>

<template>

  <div class="h-full w-full flex items-center justify-center">
    <n-modal
        v-model:show="showModal"
        preset="card"
        style="width: 600px"
        title="A Cool Picture"
    >
      <img :src="previewImageUrl" style="width: 100%">
    </n-modal>
    <div class="flex w-full flex-col justify-center items-start gap-8 bg-white rounded-3xl">
      <div class="w-full flex justify-between">
        <div class=" p-4 flex flex-col gap-8 justify-between w-1/2">
          <div class="flex flex-col gap-4">
            <div class="text-3xl text-center font-bold mb-4">
              Personal Details
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Your First Name
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.FirstName" type="text"
                         placeholder="First Name" @change="(e:string)=>{pORStore.setFirstName(e)}"/>
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Your Last Name
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.LastName" type="text"
                         placeholder="Last Name" @change="(e:string)=>{pORStore.setLastName(e)}"/>
              </div>
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Phone No
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.PhoneNo" type="text"
                         placeholder="Your Phone No" @change="(e:string)=>{pORStore.setContactNumber(e)}"/>
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Email Address
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.Email" type="text"
                         placeholder="Your Email Address" @change="(e:string)=>{pORStore.setEmail(e)}"/>
              </div>
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Password
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.Password" type="password"
                         placeholder="Your Password" @change="(e:string)=>{pORStore.setPassword(e)}"/>
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Confirm Password
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.ConfirmPassword"
                         type="password" placeholder="Your Password"
                         @change="(e:string)=>{pORStore.setConfirmPassword(e)}"/>
              </div>
            </div>

          </div>
          <div class="flex flex-col gap-4">
            <div class="text-3xl text-center font-bold mb-4">
              Address Details
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Your Home No
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.Address1" type="text"
                         placeholder="Your Home No" @change="(e:string)=>{pORStore.setAddress1(e)}"/>
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Your Street
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.Address2" type="text"
                         placeholder="Your Home Street" @change="(e:string)=>{pORStore.setAddress2(e)}"/>
              </div>
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  City
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.City" type="text"
                         placeholder="Your City" @change="(e:string)=>{pORStore.setCity(e)}"/>
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Contact Number
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.ContactNumber" type="text"
                         placeholder="Your Contact Number" @change="(e:string)=>{pORStore.setContactNumber(e)}"/>
              </div>
            </div>

          </div>
        </div>
        <div class="p-4 flex flex-col gap-8 w-1/2 justify-around">
          <div class="flex flex-col gap-4">
            <div class="text-3xl text-center font-bold mb-4">
              Identification Details
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col justify-between gap-4">
                <div class="flex w-full">
                  <div class="flex w-full items-center justify-center ">
                    <div class="flex w-1/3">
                      NIC No
                    </div>
                    <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="pORStore.NIC" type="text"
                             placeholder="NIC Number" @change="(e:string)=>{pORStore.setNIC(e)}"/>
                  </div>
                </div>
                <div class="flex flex-col mt-6 gap-2">
                  <div class="flex items-center justify-center w-full">
                    <div class="flex font-bold w-4/12">
                      NIC Front
                    </div>
                    <n-upload
                        directory-dnd
                        action="https://localhost:7211/api/ParkingOwner/upload"
                        :max="1"
                        @finish="handleFrontUpload"
                        accept="image/*"
                    >
                      <n-upload-dragger class=" border-3 rounded-3xl border-green-500">
                        <div style="margin-bottom: 12px">
                          <n-icon size="48" :depth="3">
                            <archive-icon/>
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
                        directory-dnd
                        @finish="handleBackUpload"
                        action="https://localhost:7211/api/ParkingOwner/upload"
                        :max="1"
                        accept="image/*"
                    >
                      <n-upload-dragger class=" border-3 rounded-3xl border-green-500">
                        <div style="margin-bottom: 12px">
                          <n-icon size="48" :depth="3">
                            <archive-icon/>
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

    </div>
  </div>

</template>

<style>
.n-steps .n-step-indicator .n-step-indicator-slot .n-base-icon {
  color: #fff !important;
}
</style>