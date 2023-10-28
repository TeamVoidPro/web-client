<script setup lang="ts">

import { ArchiveOutline as ArchiveIcon} from '@vicons/ionicons5'
// import {Checkmark16Filled} from '@vicons/fluent'

import {ref} from "vue";

import {UserPersonalDetails} from "@/types/LandOwnerInterfaces.ts";
import {UploadFileInfo} from "naive-ui";


// ts-ignore
// import ParkDrawer from "@/components/ParkDrawer/ParkDrawer3D.vue";


const PersonalDetails =ref<UserPersonalDetails>({
  FirstName : '',
  LastName: '',
  Email: '',
  Password: '',
  PhoneNo: '',
  NICNo: '',
  Address1: '',
  Address2: '',
  City: '',
  Province: '',
  IdentificationType: 'NIC',
  IdentificationFrontImage: null,
  IdentificationBackImage: ''
})

const NICFrontImage = ref('')
const NICBackImage = ref('')

const handleChange = (e: Event) => {
  if (e.target) {
    const target = e.target as HTMLInputElement
    PersonalDetails.value.IdentificationType = target.value
  }
}

const showModal = ref(false)
const previewImageUrl = ref('')
function handlePreview (file: UploadFileInfo) {
  console.log(file)
  // save the file to the browser and display it in modal
  previewImageUrl.value = URL.createObjectURL(file.file as Blob) as string
  showModal.value = true
}
const handleFrontUpload = (info:UploadFileInfo) => {
  console.log(info)
  PersonalDetails.value.IdentificationFrontImage = info?.file ?? null
  if (info?.file.file) {
    NICFrontImage.value = URL.createObjectURL(info.file.file as Blob) as string
  }
}
const handleBackUpload = (file:UploadFileInfo) => {
  PersonalDetails.value.IdentificationBackImage = file?.file ?? null
  NICBackImage.value = URL.createObjectURL(file.file as Blob) as string
}

const sample = ()=>{
  console.log(PersonalDetails.value)
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
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="PersonalDetails.FirstName" type="text" placeholder="First Name" />
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Your Last Name
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="PersonalDetails.LastName" type="text" placeholder="Last Name" />
              </div>
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Email
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="PersonalDetails.Email" type="text" placeholder="Your Email" />
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Password
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="PersonalDetails.Password" type="text" placeholder="Password" />
              </div>
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Phone No
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="PersonalDetails.PhoneNo" type="text" placeholder="Your Phone No" />
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  NIC No
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="PersonalDetails.NICNo" type="text" placeholder="Your NIC No" />
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
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="PersonalDetails.Address1" type="text" placeholder="Your Home No" />
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Your Street
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="PersonalDetails.Address2" type="text" placeholder="Your Home Street" />
              </div>
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  City
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="PersonalDetails.City" type="text" placeholder="Your City"  />
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Province
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="PersonalDetails.Province" type="text" placeholder="Your Province" />
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
                <div class="flex">
                  Identified Using
                </div>
                <div class="flex justify-around gap-3 gap-5 w-full">
                  <div :class="PersonalDetails.IdentificationType === 'NIC' ? 'bg-accent text-white  border-2 border-green-800 rounded-3xl px-3 py-2' : ' rounded-3xl border-2 px-3 py-2' + ''">
                    <n-radio

                        :checked="PersonalDetails.IdentificationType === 'NIC'"
                        value="NIC"
                        name="basic-demo"
                        @change="handleChange"
                    >
                  <span :class="PersonalDetails.IdentificationType === 'NIC' ? 'text-white font-bold text-md ' : 'text-black' + ''">
                  National Identity Card
                  </span>
                    </n-radio>
                  </div>
                  <div :class="PersonalDetails.IdentificationType === 'DrivingLicense' ? 'bg-accent text-white  border-2 border-green-800 rounded-3xl px-3 py-2' : ' rounded-3xl border-2 px-3 py-2' + ''">
                    <n-radio
                        :checked="PersonalDetails.IdentificationType === 'DrivingLicense'"
                        value="DrivingLicense"
                        name="basic-demo"
                        @change="handleChange"
                    >
                  <span :class="PersonalDetails.IdentificationType === 'DrivingLicense' ? 'text-white font-bold text-md ' : 'text-black' + ''">
                  Driving Licenses

                  </span>
                    </n-radio>
                  </div>
                </div>
                <div class="flex flex-col mt-6 gap-2">
                  <div class="flex flex-col  justify-center w-full">
                    <div class="flex font-bold w-4/12">
                      {{PersonalDetails.IdentificationType === 'NIC' ? 'NIC ' : 'License '}} Front
                    </div>
                    <n-upload
                        directory-dnd
                        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                        @finish="handleFrontUpload"
                        @preview="handlePreview"
                        show-preview-button
                        :max="1"
                        accept="image/*"
                    >
                      <n-upload-dragger class="rounded-3xl border-3 border-green-500">
                        <div v-if="PersonalDetails.IdentificationFrontImage===null">
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
                        </div>
                        <div v-else>
                          <n-image
                              width="100"
                              :src="NICFrontImage"
                          />
                          <!--                          Success Image-->
                          <n-icon :size="18" :component="Checkmark16Filled" />
                        </div>

                      </n-upload-dragger>
                    </n-upload>
                  </div>
                  <div class="flex flex-col justify-center w-full">
                    <div class="flex font-bold w-4/12">
                      {{PersonalDetails.IdentificationType === 'NIC' ? 'NIC ' : 'License '}} Back
                    </div>
                    <n-upload
                        directory-dnd
                        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                        @finish="handleBackUpload"
                        @preview="handlePreview"
                        :max="1"
                        accept="image/*"
                    >
                      <n-upload-dragger class=" border-3 rounded-3xl border-green-500">
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

    </div>
  </div>

</template>

<style>
.n-steps .n-step-indicator .n-step-indicator-slot .n-base-icon{
  color: #fff !important;
}
</style>