<template>
  <AuthLayout>
    <div class="h-[100vh] w-full bg-accent flex items-center">
      <div class="m-auto p-10 bg-white w-[90%] gap-5 rounded-2xl flex justify-around shadow shadow-blue-200">
        <div class="w-[28em]">
          <div class="flex flex-col h-full justify-center">
            <div class="flex items-center text-primary">
              <h1 class="text-3xl font-bold">Create Your Password</h1>
            </div>
            <form class="mt-10">
              <div class="flex flex-col">
                <label for="">New Password</label>
                <n-input type="password" class="mt-2" />
              </div>
              <div class="flex flex-col mt-4">
                <label for="">Confirm Password</label>
                <n-input type="password" class="mt-2" />
              </div>
              <div class="flex justify-center mt-8">
                <Button class="w-[15em] px-0">Change Password</Button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <img src = "../assets/images/login-page-img.png"
               alt = "">
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import AuthLayout from "@layouts/AuthLayout.vue";
</script>

