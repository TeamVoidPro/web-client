<template>
  <AdminLayout>
    <div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-10 ">
          <div class="text-xl "><span class="font-semibold">32</span> Employees</div>
          <div class="flex gap-1 items-center">
            <FilterIcon class="bg-secondary text-white bg-white h-8 w-8 rounded border"/>
            <n-select style="width: 200px"
                      placeholder="All"
                      :options="options1"
                      @update:value="handleUpdateValue"
            />
          </div>
          <n-input style="width: 250px" placeholder="Search Employee">
            <template #prefix>
              <n-icon :component="SearchOutline" />
            </template>
          </n-input>
        </div>

        <div class="flex items-center">
          <div class="text-xl px-2"><span>3</span> Selected</div>
          <div class="px-2 border-r-2 border-gray-400">
            <n-popover trigger="hover">
              <template #trigger>
                <EmailIcon class="w-8 h-8 text-blue-600"/>
              </template>
              <span>Send an email</span>
            </n-popover>
          </div>
          <div class="ps-2">
            <button class="text-lg px-3 py-1 text-white rounded bg-secondary hover:bg-blue-600" @click="showModal = true">+ Add Employee</button>
            <n-modal v-model:show="showModal">
              <n-card
                  style="width: 1000px !important;"
                  title="Add Employee"
                  :bordered="false"
                  size="huge"
                  role="dialog"
                  aria-modal="true"
              >
                <template #header-extra>
                  <CloseIcon class="w-6 h-6 text-gray-500 cursor-pointer text-red-600" @click="showModal = false"/>
                </template>
                  <div class="mt-2 space-y-3">
                    <div class="flex justify-between">
                      <div class="w-1/2">
                        <label>Enter first name <span class="text-red-600">*</span></label>
                        <n-input placeholder="First Name"/>
                      </div>
                      <div class="w-1/2 ps-2">
                        <label>Enter last name <span class="text-red-600">*</span></label>
                        <n-input placeholder="Last Name"/>
                      </div>
                    </div>
                    <div class="flex justify-between">
                      <div class="w-1/2">
                        <label>Enter email <span class="text-red-600">*</span></label>
                        <n-input placeholder="Email"/>
                      </div>
                      <div class="w-1/2 ps-2">
                        <label>Enter phone number <span class="text-red-600">*</span></label>
                        <n-input placeholder="Phone Number"/>
                      </div>
                    </div>
                    <div class="flex justify-between">
                      <div class="w-1/2">
                        <label>Enter password <span class="text-red-600">*</span></label>
                        <n-input placeholder="Password"/>
                      </div>
                      <div class="w-1/2 ps-2">
                        <label>Confirm password <span class="text-red-600">*</span></label>
                        <n-input placeholder="Confirm Password"/>
                      </div>
                    </div>
                    <div class="flex justify-between">
                      <div class="w-1/2">
                        <label>Enter address line 1 <span class="text-red-600">*</span></label>
                        <n-input placeholder="Address Line 1"/>
                      </div>
                      <div class="w-1/2 ps-2">
                        <label>Enter address line 2 (optional)</label>
                        <n-input placeholder="Address Line 2"/>
                      </div>
                    </div>
                    <div class="flex justify-between">
                      <div class="w-1/2">
                        <label>Enter street <span class="text-red-600">*</span></label>
                        <n-input placeholder="Street"/>
                      </div>
                      <div class="w-1/2 ps-2">
                        <label>Enter city <span class="text-red-600">*</span></label>
                        <n-input placeholder="City"/>
                      </div>
                    </div>
                    <div class="flex justify-between">
                      <div class="w-1/2">
                        <label>Enter NIC number <span class="text-red-600">*</span></label>
                        <n-input placeholder="NIC"/>
                      </div>
                      <div class="w-1/2 ps-2">
                        <label>Select role <span class="text-red-600">*</span></label>
                        <n-select v-model:value="value" :options="options2" />
                      </div>
                    </div>
                    <div class="flex justify-center">
                      <button class="text-lg px-3 py-1 text-white rounded bg-secondary w-[20em] hover:bg-blue-600 mt-5">Add Employee</button>
                    </div>
                  </div>
                <template #footer>

                </template>
              </n-card>
            </n-modal>
          </div>
        </div>
      </div>
      <div class="mt-10 flex flex-wrap justify-between gap-y-4">
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
      </div>
      <div class="w-full flex justify-center">
        <Pagination class="mt-10" :total="100" :page-size="10" />
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">

import AdminLayout from "../../layouts/AdminLayout.vue";
import FilterIcon from "../../assets/icons/FilterIcon.vue";
import EmailIcon from "../../assets/icons/EmailIcon.vue";
import EmployeeCard from "../../components/Administrator/EmployeeCard.vue";
import { SearchOutline } from '@vicons/ionicons5'
import { useMessage, SelectOption } from 'naive-ui'
import Pagination from "../../components/Pagination.vue";
import {ref} from "vue";
import CloseIcon from "../../assets/icons/CloseIcon.vue";

const message = useMessage()
const showModal = ref(false)
const value = ref(null)
const handleUpdateValue  = (value: string, option: SelectOption)  => {
  message.info(<any>option.label ?? '')
}

const options1 = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Parking Operators',
    value: 'operators'
  },
  {
    label: "Parking Verifiers",
    value: 'verifiers'
  },
]

const options2 = [
  {
    label: 'Parking Operator',
    value: 'operator'
  },
  {
    label: "Parking Verifier",
    value: 'verifier'
  },
]
</script>
