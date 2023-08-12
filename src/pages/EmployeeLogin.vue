<template>
  <ParkOwnerNavbar current-page="login"/>
    <div class="bg-white mt-10 h-[80vh] w-[85%] rounded-2xl flex justify-around m-auto">
      <div class="w-[30%] mt-10 pl-5">
        <p class="text-4xl text-primary font-semibold mb-4">Login</p>
        <p>Enter the information while you registered</p>
        <form class="mt-7">
          <div>
            <label>Email</label>

            <input v-model="formValues.email" class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-10 w-full pl-2" type="email">
          </div>
          <div>
            <label>Password</label>
            <input v-model="formValues.password" class="border-[1px] border-[#253665]  bg-[#EDF9FC]/40 rounded text-sm text-grey h-10 w-full pl-2" type="password">
          </div>
        </form>
        <p class="text-[#3B00E4] font-semibold text-xs flex flex-row-reverse mt-2">Forgot Password ?</p>
        <div class="flex justify-center mt-5">

          <button type="submit" @click="submitForm" class="border-2 w-40 h-9 rounded-full bg-[#253665] text-white font-semibold">Sign in</button>
        </div>
      </div>

      <div class="w-[60%] bg-primary rounded h-[70vh] m-auto shadow-2xl">
        <img src="../assets/images/park.png" alt="">

<!--      <div class="w-[60%] m-auto">-->
<!--        <div class=" bg-[#cffafe] rounded-2xl h-[70vh] shadow-lg">-->
<!--          <img  src="../assets/images/park.png" alt="">-->
<!--        </div>-->
<!--      </div>-->
    </div>
    </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {employeeStore} from "../store/employeeStore.ts";
import {useRouter} from "vue-router";
import {useMessage} from "naive-ui";
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
        if(res.employee.role === "Administrator"){
          router.push({name: "AdminDashboard"});
        }else if(res.employee.role === "Operator"){
          router.push({name: "OperatorDashboard"});
        }else if(res.employee.role === "Verifier"){
          router.push({name: "VerifierDashboard"});
        }

        message.success("Successfully logged in");
      }).catch((err) => {
        throw err;
    }).catch((err) => {
      message.error("Invalid credentials. Please try again.")
  });

};

</script>