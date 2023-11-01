<template>
  <AuthLayout>
    <div class="h-[100vh] w-[60vw] bg-accent flex items-center">
      <div class="m-auto p-10 bg-white w-[100%] gap-5 rounded-2xl flex justify-around shadow shadow-blue-200">
        <div class="w-[35em]">
          <div class="flex flex-col h-full justify-center">
            <div class="flex items-center text-primary mb-10">
              <h1 class="text-3xl font-bold">Verify Your Account</h1>
            </div>
            <n-space vertical>
              <n-steps
                  size="small"
                  :current="(current as number)"
                  :status="currentStatus"
              >
                <n-step
                    title="Verification Code"
                    description="Enter your verification code"
                />
                <n-step
                    title="Password"
                    description="Create your password"
                />
              </n-steps>

              <div id="verify" class="visible text-center">
                <form class="mt-10">
                  <div class="w-full flex justify-center">
                    <input type="text" v-model="verifyForm.VerificationCode" class="mt-2 focus:outline-none w-36 border-b-2 text-2xl text-center" placeholder="XXXXXX"/>
                  </div>

                  <div class="flex justify-center mt-8">
                    <Button @click="confirmVerificationCode" class="w-[12em] px-0">Verify</Button>
                  </div>
                </form>
                <div class="mt-2 font-semibold underline text-primary cursor-pointer">Resend code</div>
              </div>

              <div id="password" class="hidden">
                <n-form class="mt-10" v-model="createPasswordForm">
                  <div class="flex flex-col">
                    <label for="">New Password</label>
                    <n-input type="password" class="mt-2" v-model:value="createPasswordForm.Password"/>
                  </div>
                  <div class="flex flex-col mt-4">
                    <label for="">Confirm Password</label>
                    <n-input type="password" class="mt-2" v-model:value="createPasswordForm.ConfirmPassword"/>
                  </div>
                  <div class="flex justify-center mt-8">
                    <Button @click="confirmPassword" class="w-[18em] px-0">Change Password</Button>
                  </div>
                </n-form>
              </div>
            </n-space>
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
import { MdArrowRoundBack, MdArrowRoundForward } from '@vicons/ionicons4'
import {StepsProps, useMessage} from "naive-ui";
import AuthLayout from "@layouts/AuthLayout.vue";
import {defineComponent, onMounted, ref} from "vue";
import Button from "../components/Button.vue";
import {useRoute,useRouter} from "vue-router";
import {employeeStore} from "@store/employeeStore.ts";


defineComponent({
  components: {
    MdArrowRoundBack,
    MdArrowRoundForward
  }
})

const router = useRouter()
const id = ref<string|null>(useRoute().params.id)
const message = useMessage()
const currentRef = ref<number|null>(1)
const current = currentRef
const currentStatus = ref<StepsProps['status']>('process')

const verifyForm = ref({
  EmployeeId: id.value,
  VerificationCode: ''
})

const createPasswordForm = ref({
  EmployeeId: id.value,
  Password: '',
  ConfirmPassword: ''
})

const next = () => {
  if (currentRef.value === null) currentRef.value = 1
  else if (currentRef.value >= 2) currentRef.value = null
  else currentRef.value++
}


const confirmVerificationCode = (e : MouseEvent) => {
  e.preventDefault()

  const store = employeeStore()
  store.verifyAccount(verifyForm.value)
      .then(res => {
        document.getElementById('verify')?.classList.add('hidden')
        document.getElementById('password')?.classList.remove('hidden')

        message.success('Verification code confirmed successfully')

        next()
      }).catch(err => {
        currentStatus.value = 'error'
        if (err?.response?.data?.errors !== undefined)
          message.error(err.response.data.errors.VerificationCode[0])
        else
          message.error(err.response.data.verificationCode)

  })
}

const confirmPassword = (e : MouseEvent) => {
  e.preventDefault()

  const store = employeeStore()
  store.createPassword(createPasswordForm.value)
      .then(res => {
        message.success('Password created successfully')
        router.push({name: "EmployeeLogin"})
      }).catch(err => {
        currentStatus.value = 'error'
        if (err?.response?.data?.errors.Password !== undefined)
          message.error(err.response.data.errors.Password[0])
        else
          message.error(err.response.data.errors[0])
      })
}
</script>
