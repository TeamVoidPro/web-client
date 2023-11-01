<template>
  <OperatorLayout>
    <div class="w-full flex justify-center items-center">
      <div class="bg-white w-[60%] py-10 space-y-8 rounded-lg shadow-lg">
        <div class="flex justify-center items-center">
          <img class="rounded-full w-36 h-36 object-cover border-2 border-[#253665]"  src="../../assets/images/profile.png" alt="">
        </div>

        <div class="w-[70%] m-auto flex justify-between">
          <div>
            <button class="bg-secondary text-white rounded h-8 w-44"  @click="showModal = true">
              Change Password
            </button>
            <n-modal v-model:show="showModal">
              <n-card
                  style="width: 600px; border-radius: 15px"
                  title="Change Password"
                  :bordered="false"
                  size="huge"
                  role="dialog"
                  aria-modal="true"
              >
                <div>
                  <form class="space-y-3">
                    <div class="flex flex-col">
                      <label class="text-xs">Current Password</label>
                      <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="password" value="995512203V" disabled>
                    </div>
                    <div class="flex flex-col">
                      <label class="text-xs">New Password</label>
                      <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="password" value="995512203V" disabled>
                    </div>
                    <div class="flex flex-col">
                      <label class="text-xs">Confirm Password</label>
                      <input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="password" value="995512203V" disabled>
                    </div>
                  </form>
                  <div class="flex justify-center">
                    <button class="bg-secondary w-48 h-8 rounded shadow-lg text-white mt-5">Save</button>
                  </div>

                </div>
              </n-card>
            </n-modal>
          </div>
          <div>
            <button class="bg-[#22c55e] text-white rounded h-8 w-44" @click="toggleFields">Edit Profile</button>
          </div>
        </div>
        <form class="w-[70%] m-auto space-y-3">
          <div class="flex  w-full justify-between">
            <div class="flex flex-col w-[49%]">
              <label class="text-xs">First Name</label>
              <n-input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 pl-1"   type="text" v-model:value="employee.firstName"  :disabled="fieldsDisabled"/>
            </div>
            <div class="flex flex-col w-[49%]">
              <label class="text-xs"> Last Name</label>
              <n-input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 pl-1"  type="text" v-model:value="employee.lastName"  :disabled="fieldsDisabled"/>
            </div>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">EmployeeID</label>
            <n-input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="text" v-model:value="employee.employeeId"  disabled/>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">Email</label>
            <n-input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="email" v-model:value="employee.email"  disabled/>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">NIC</label>
            <n-input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="text" v-model:value="employee.nic"  disabled/>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">Contact Number</label>
            <n-input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="text" v-model:value="employee.contactNumber"  :disabled="fieldsDisabled"/>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">Address Line 1</label>
            <n-input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="text" v-model:value="employee.addressLine1"  :disabled="fieldsDisabled"/>
          </div>
          <div class="flex flex-col">
            <label class="text-xs">Address Line 2</label>
            <n-input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 w-full pl-2" type="text" v-model:value="employee.addressLine2"  :disabled="fieldsDisabled"/>
          </div>
          <div class="flex  w-full justify-between">
            <div class="flex flex-col w-[49%]">
              <label class="text-xs">Street</label>
              <n-input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 pl-2"   type="text" v-model:value="employee.street" :disabled="fieldsDisabled"/>
            </div>
            <div class="flex flex-col w-[49%]">
              <label class="text-xs"> City</label>
              <n-input class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-8 pl-2"  type="text" v-model:value="employee.city" :disabled="fieldsDisabled"/>
            </div>
          </div>
          <div class="w-full flex justify-center">
            <button class="w-48 h-8 bg-secondary rounded shadow-lg  text-white mt-5" @click="saveEmployeeDetails">Save</button>
          </div>
        </form>
      </div>
    </div>


  </OperatorLayout>

</template>

<script setup lang="ts">

import OperatorLayout from "../../layouts/OperatorLayout.vue";
import { ref,onMounted } from 'vue'
import { employeeStore } from "../../store/employeeStore";
import { useMessage } from "naive-ui";

const message = useMessage();

 const showModal = ref(false)

 const employee = ref(Object());
 const formValues = ref(
    {
      firstName: "",
      lastName: "",
      employeeId: "",
      email: "",
      nic: "",
      contactNumber: "",
      addressLine1: "",
      addressLine2: "",
      street: "",
      city: "",
    }
 );

 const fieldsDisabled = ref(true);

 function toggleFields() {
   fieldsDisabled.value = !fieldsDisabled.value;
 }

 onMounted(() => {
  const store = employeeStore();

  store.getEmployee()
    .then((res) => {
      // console.log(res.emp);
      employee.value = res.emp;
      // console.log(employee.value);

    }).catch((err) => {
      console.log(err);
    })

 })


function saveEmployeeDetails(e : any) {
  e.preventDefault();

  formValues.value.firstName = employee.value.firstName;
  formValues.value.lastName = employee.value.lastName;
  formValues.value.employeeId = employee.value.employeeId;
  formValues.value.email = employee.value.email;
  formValues.value.nic = employee.value.nic;
  formValues.value.contactNumber = employee.value.contactNumber;
  formValues.value.addressLine1 = employee.value.addressLine1;
  formValues.value.addressLine2 = employee.value.addressLine2;
  formValues.value.street = employee.value.street;
  formValues.value.city = employee.value.city;

  const store = employeeStore();
  store.saveEmployeeDetails(formValues.value)
    .then((res) => {
      console.log(res);
      message.success("Employee Details Updated Successfully");
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    })
}
</script>