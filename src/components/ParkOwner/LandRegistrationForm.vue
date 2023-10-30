<script setup lang="ts">

import { CloudUpload as ArchiveIcon} from '@vicons/ionicons5'
// import {Checkmark16Filled} from '@vicons/fluent'

import {ref} from "vue";

import {UserPersonalDetails} from "@/types/LandOwnerInterfaces.ts";
import {UploadFileInfo} from "naive-ui";
import {useParkingOwnerRegistrationStore} from "@/store/parkingOwnerRegisterStore.ts";

const store = useParkingOwnerRegistrationStore();

// ts-ignore
// import ParkDrawer from "@/components/ParkDrawer/ParkDrawer3D.vue";



const PersonalDetails =ref<UserPersonalDetails>({
  FirstName : '',
  LastName: '',
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
const handleDeedUpload = (info:UploadFileInfo) => {
  console.log(info)
  if (info?.file.file) {
    store.LandDetails.deedImage = URL.createObjectURL(info.file.file as Blob) as string
  }
}

const handleMapUpload = (file:UploadFileInfo) => {
  if(file?.file.file){
    store.LandDetails.landMapImage = URL.createObjectURL(file.file.file as Blob) as string
  }
}

const handleLandImagestUpload = (file:UploadFileInfo) => {
  if(file?.file.file){
    store.LandDetails.landImages = URL.createObjectURL(file.file.file as Blob) as string
  }
}


</script>

<template>

  <div class="h-full w-full flex items-center justify-center">

    <div class="flex w-full flex-col justify-center items-start bg-white">
      <div class="w-full flex gap-7 justify-between">
        <div class=" p-4 flex flex-col gap-6 justify-around w-1/2">
          <div class="flex flex-col gap-4">
            <div class="text-2xl text-center font-bold mb-4">
              Land Location Details
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Address No
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="store.LandDetails.AddressNo" type="text" placeholder="Land Address line no" />
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Address Street
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="store.LandDetails.AddressStreet" type="text" placeholder="Land Address street" />
              </div>
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  City
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="store.LandDetails.parkingCity" type="text" placeholder="Land city" />
              </div>
              <div class="flex flex-col gap-2 w-5/12">
                <div class="flex">
                  Province
                </div>
                <n-input class="rounded-3xl border-2 border-gray-300" v-model:value="store.LandDetails.parkingProvince" type="text" placeholder="Land Province" />
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-1 gap-4">
            <div class="text-2xl text-center font-bold mb-2">
              Pick Location
            </div>
            <div class="flex justify-around gap-3">
              <div class="w-full h-72 bg-gray-400">
              </div>
            </div>

          </div>
        </div>
        <div class="p-4 flex flex-col gap-8 w-1/2 justify-around">
          <div class="flex flex-col justify-start gap-1">
            <div class="text-2xl text-center font-bold ">
              Legal Documentation
            </div>
            <div class="text-sm p-2 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium assumenda distinctio,
            </div>
            <div class="flex justify-around gap-3">
              <div class="flex flex-col justify-around gap-4 w-full">
                <div class="flex flex-col mt-6 gap-2">
                  <div class="flex items-center justify-around w-full">
                    <div class="flex justify-center items-center text-center w-3/12">
                      <div class="flex flex-col justify-center">
                        <div class="font-bold">Deed Images</div>
                        <div class="text-xs">
                          ( Multiple Images )
                        </div>
                      </div>
                    </div>
                    <div class="flex w-9/12">
                      <n-upload
                          directory-dnd
                          @change="handleDeedUpload"
                          @preview="handlePreview"
                          show-preview-button
                          :max="1"
                          accept="image/*"
                      >
                        <n-upload-dragger class="rounded-3xl border-3 border-green-500">
                          <div v-if="store.LandDetails.deedImage===''">
                            <div style="margin-bottom: 12px">
                              <n-icon size="36" :depth="3">
                                <archive-icon />
                              </n-icon>
                            </div>
                            <n-text style="font-size: 16px">
                              <span class="text-md font-bold underline">
                                Click to upload
                              </span> or drag & drop
                            </n-text>
                            <n-p depth="3" class="text-xs mt-1"  >
                              SVG, PNG, JPG, GIF up to 10MB
                            </n-p>
                          </div>
                          <div v-else>
                            <n-image
                                width="100"
                                :src="store.LandDetails.deedImage"
                            />
                            <!--                          Success Image-->
                            <n-icon :size="18" :component="Checkmark16Filled" />
                          </div>

                        </n-upload-dragger>
                      </n-upload>
                    </div>
                  </div>
                  <div class="flex items-center justify-around w-full">
                    <div class="flex justify-center items-center text-center w-3/12">
                      <div class="flex flex-col justify-center">
                        <div class="font-bold">Land Map</div>
                        <div class="text-xs">
                          ( Multiple Images )
                        </div>
                      </div>
                    </div>
                    <div class="flex w-9/12">
                      <n-upload
                          directory-dnd
                          @change="handleMapUpload"
                          @preview="handlePreview"
                          show-preview-button
                          :max="1"
                          accept="image/*"
                      >
                        <n-upload-dragger class="rounded-3xl border-3 border-green-500">
                          <div v-if="store.LandDetails.landMapImage===''">
                            <div style="margin-bottom: 12px">
                              <n-icon size="36" :depth="3">
                                <archive-icon />
                              </n-icon>
                            </div>
                            <n-text style="font-size: 16px">
                              <span class="text-md font-bold underline">
                                Click to upload
                              </span> or drag & drop
                            </n-text>
                            <n-p depth="3" class="text-xs mt-1">
                              SVG, PNG, JPG, GIF up to 10MB
                            </n-p>
                          </div>
                          <div v-else>
                            <n-image
                                width="100"
                                :src="store.LandDetails.landMapImage"
                            />
                            <!--                          Success Image-->
                            <n-icon :size="18" :component="Checkmark16Filled" />
                          </div>

                        </n-upload-dragger>
                      </n-upload>
                    </div>
                  </div>
                  <div class="flex items-center justify-around w-full">
                    <div class="flex justify-center items-center text-center w-3/12">
                      <div class="flex flex-col justify-center">
                        <div class="font-bold">Land Images</div>
                        <div class="text-xs">
                          ( Multiple Images )
                        </div>
                      </div>
                    </div>
                    <div class="flex w-9/12">
                      <n-upload
                          directory-dnd
                          @change="handleLandImagestUpload"
                          @preview="handlePreview"
                          show-preview-button
                          :max="1"
                          accept="image/*"
                      >
                        <n-upload-dragger class="rounded-3xl border-3 border-green-500">
                          <div v-if="store.LandDetails.landImages ===''">
                            <div class="mb-2">
                              <n-icon size="36" :depth="3">
                                <archive-icon />
                              </n-icon>
                            </div>
                            <n-text style="font-size: 16px">
                              <span class="text-md font-bold underline">
                                Click to upload
                              </span> or drag & drop
                            </n-text>
                            <n-p depth="3" class="text-xs mt-1">
                              SVG, PNG, JPG, GIF up to 10MB
                            </n-p>
                          </div>
                          <div v-else>
                            <n-image
                                width="100"
                                :src="store.LandDetails.landImages"
                            />
                            <!--                          Success Image-->
                            <n-icon :size="18" :component="Checkmark16Filled" />
                          </div>

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
  </div>

</template>

<style scoped>

</style>