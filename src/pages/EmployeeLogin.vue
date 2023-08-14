<template>
  <ParkOwnerNavbar current-page="login"/>
  <div class="bg-white mt-16 p-10 w-[60%] rounded-2xl flex justify-between m-auto shadow-xl">
    <div class="w-[40%]  flex flex-col justify-center">
      <p class="text-4xl text-primary font-semibold mb-5">Please Login</p>
      <div class="text-sm font-semibold text-secondary mb-8">Welcome back! Your dedication drives our success.</div>
      <n-form class=" space-y-4" :model="formValues">
        <div>
          <label class="font-semibold">Email</label>
          <n-input v-model:value="formValues.email" type="email" placeholder="Enter your email"/>
        </div>
        <div>
          <label class="font-semibold">Password</label>
          <div class="relative">
            <n-input v-model:value="formValues.password" type="password" placeholder="Enter your password"/>
            <EyeIcon class="hidden absolute right-3 top-1.5 text-gray-400 w-6 h-6 cursor-pointer"/>
            <EyeSlashIcon class="absolute right-3 top-1.5 text-gray-400 w-6 h-6 cursor-pointer"/>
          </div>
        </div>
      </n-form>
      <p class="text-[#3B00E4] font-semibold text-xs flex flex-row-reverse mt-2">Forgot Password ?</p>
      <div class="flex justify-center mt-10">
        <Button @click="submitForm">Sign In</Button>
      </div>
    </div>

    <div class="w-[45%] bg-primary rounded shadow-2xl">
      <img src="../assets/images/park.png" alt=""
           class="w-full h-full">
    </div>
  </div>

</template>

<script setup lang="ts">

import {ref} from "vue";
import {employeeStore} from "../store/employeeStore.ts";
import {useRouter} from "vue-router";
import {useMessage} from "naive-ui";
import Button from "@components/Button.vue";
import {EyeIcon, EyeSlashIcon} from "@heroicons/vue/24/solid";
import ParkOwnerNavbar from "@components/Navbar/ParkOwnerNavbar.vue";

const router = useRouter();
const message = useMessage();

const formValues = ref({
  email: "",
  password: "",
});

const submitForm = () => {
  const store = employeeStore();
  store.login(formValues.value)
      .then((res) => {
        if (res.employee.role === "Administrator") {
          router.push({name: "AdminDashboard"});
        } else if (res.employee.role === "Operator") {
          router.push({name: "OperatorDashboard"});
        } else if (res.employee.role === "Verifier") {
          router.push({name: "VerifierDashboard"});
        }

        message.success("Successfully logged in");
      }).catch((err) => {
    console.log(err)
  }).catch((err) => {
    message.error("Invalid credentials. Please try again.")
  });

};

</script>