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
                  <div class="mt-2">
                    <n-form class="space-y-4" ref="formRef"  :model="formValue">
                      <div class="flex justify-between">
                        <div class="w-1/2">
                          <label>Enter first name <span class="text-red-600">*</span></label>
                          <n-input placeholder="First Name" v-model:value="formValue.FirstName"/>
                          <div class="text-red-600 text-xs" v-if="errors.FirstName != null">{{errors.FirstName}}</div>
                        </div>
                        <div class="w-1/2 ps-2">
                          <label>Enter last name <span class="text-red-600">*</span></label>
                          <n-input placeholder="Last Name" v-model:value="formValue.LastName"/>
                          <div class="text-red-600 text-xs" v-if="errors.LastName != null">{{errors.LastName}}</div>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div class="w-1/2">
                          <label>Enter email <span class="text-red-600">*</span></label>
                          <n-input placeholder="Email" v-model:value="formValue.Email"/>
                          <div class="text-red-600 text-xs" v-if="errors.Email != null">{{errors.Email}}</div>
                        </div>
                        <div class="w-1/2 ps-2">
                          <label>Enter phone number <span class="text-red-600">*</span></label>
                          <n-input placeholder="Phone Number" v-model:value="formValue.ContactNumber"/>
                          <div class="text-red-600 text-xs" v-if="errors.ContactNumber != null">{{errors.Email}}</div>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div class="w-1/2">
                          <label>Enter address line 1 <span class="text-red-600">*</span></label>
                          <n-input placeholder="Address Line 1" v-model:value="formValue.AddressLine1"/>
                          <div class="text-red-600 text-xs" v-if="errors.AddressLine1 != null">{{errors.AddressLine1}}</div>
                        </div>
                        <div class="w-1/2 ps-2">
                          <label>Enter address line 2 (optional)</label>
                          <n-input placeholder="Address Line 2" v-model:value="formValue.AddressLine2"/>
                          <div class="text-red-600 text-xs" v-if="errors.AddressLine2 != null">{{errors.AddressLine2}}</div>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div class="w-1/2">
                          <label>Enter street <span class="text-red-600">*</span></label>
                          <n-input placeholder="Street" v-model:value="formValue.Street"/>
                          <div class="text-red-600 text-xs" v-if="errors.Street != null">{{errors.Street}}</div>
                        </div>
                        <div class="w-1/2 ps-2">
                          <label>Enter city <span class="text-red-600">*</span></label>
                          <n-input placeholder="City" v-model:value="formValue.City"/>
                          <div class="text-red-600 text-xs" v-if="errors.City != null">{{errors.City}}</div>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div class="w-1/2">
                          <label>Enter NIC number <span class="text-red-600">*</span></label>
                          <n-input placeholder="NIC" v-model:value="formValue.Nic"/>
                          <div class="text-red-600 text-xs" v-if="errors.Nic != null">{{errors.Nic}}</div>
                        </div>
                        <div class="w-1/2 ps-2">
                          <label>Select role <span class="text-red-600">*</span></label>
                          <n-select v-model:value="formValue.Role" :options="options2"/>
                          <div  class="text-red-600 text-xs" v-if="errors.Role != null">{{errors.Role}}</div>
                        </div>
                      </div>
                      <div class="flex justify-center">
                        <button @click="submitForm" type="submit" class="text-lg px-3 py-1 text-white rounded bg-secondary w-[20em] hover:bg-blue-600 mt-5">Add Employee</button>
                      </div>
                    </n-form>
                  </div>
                <template #footer>

                </template>
              </n-card>
            </n-modal>
          </div>
        </div>
      </div>
      <div class="mt-10 flex flex-wrap justify-between gap-y-4">
        <EmployeeCard v-for="emp in employees" :employee="emp"/>
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
import {useMessage, SelectOption, FormInst} from 'naive-ui'
import Pagination from "../../components/Pagination.vue";
import {onMounted, ref} from "vue";
import CloseIcon from "../../assets/icons/CloseIcon.vue";
import { employeeStore } from "../../store/employeeStore.ts";

const message = useMessage()
const showModal = ref(false)
const formRef = ref<FormInst | null>(null)
const formValue = ref({
  FirstName: '',
  LastName: '',
  Email: '',
  ContactNumber: '',
  AddressLine1: '',
  AddressLine2: '',
  Street: '',
  City: '',
  Nic: '',
  Role: '',
})

const errors = ref({
  FirstName: '',
  LastName: '',
  Email: '',
  ContactNumber: '',
  AddressLine1: '',
  AddressLine2: '',
  Street: '',
  City: '',
  Nic: '',
  Role: '',
})

const employees = ref({})

onMounted(() => {
  const store = employeeStore()
  store.getEmployees()
      .then((res) => {
        employees.value = res.emp
        // console.log(employees.value)
      }).catch((errors) => {
        console.log(errors)
  });

})


const submitForm = (e : MouseEvent) => {
  e.preventDefault()

  const store = employeeStore()
  store.register(formValue.value)
      .then((res) => {
        message.success('Employee added successfully')

        const data : object = {
          EmployeeId : res.employeeId,
          VerificationCode : res.verificationCode
        }

        store.sendVerificationEmail(data)
            .then(() => {
              message.success("Verification email has been sent to the email.")
            }).catch(err => {
          throw err
        })

        for (const key in errors.value) {
          errors.value[key] = ''
        }

      }).catch(err => {

        const errs = err.response.data.errors
        for (const key in errors.value) {
          if(errs[key] != null) {
            errors.value[key] = errs[key][0]
          }else{
            errors.value[key] = ''
          }
        }
        message.error('Please check the form for errors')
      })

}

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
    value: 'Operator'
  },
  {
    label: "Parking Verifiers",
    value: 'Verifier'
  },
]

const options2 = [
  {
    label: 'Parking Operator',
    value: 'Operator'
  },
  {
    label: "Parking Verifier",
    value: 'Verifier'
  },
]
</script>
