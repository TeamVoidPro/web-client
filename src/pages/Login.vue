<template>
    <div class="flex font-roboto-slab">
        <div class="bg-[#253664] w-[35%] h-[100vh] flex items-center">
          <img src = "../assets/images/logo.png"
               alt = ""
                class="w-[90%] m-auto">
        </div>
        <div class="w-[65%] flex justify-center items-center bg-blue-100">
            <div class="w-[50%] shadow-md px-10 py-5 rounded-xl bg-white text-center text-primary">
                <div class="text-3xl">Welcome Back</div>
                <div class="text-xl">Please login to your account</div>
                <form class="mt-5" @submit="login">
                    <div class="text-left">
                        <label class="font-semibold text-xl" for="email">Email</label>
                        <input type="email" id="email" class="w-full border-2 border-gray-300 rounded p-2 focus:outline-none focus:border-primary"
                        placeholder="Please enter your email"/>
                    </div>
                    <div class="text-left mt-5">
                        <label class="font-semibold text-xl" for="password">Password</label>
                        <input type="password" id="password" class="w-full border-2 border-gray-300 rounded p-2 focus:outline-none focus:border-primary"
                        placeholder="Please enter your password"/>
                        <div id="eye">
                          <EyeIcon class="h-7 w-7 opacity-60 relative bottom-9 left-[92%]" @click="showPassword"/>
                        </div>
                        <div id="eye-slash" class="hidden">
                          <EyeSlashIcon class="h-7 w-7 opacity-60 relative bottom-9 left-[92%]" @click="hidePassword"/>
                        </div>
                    </div>
                    <div class="text-left">
                        <input type="checkbox" id="remember" class="mr-2"/>
                        <label for="remember">Remember me</label>
                    </div>
                    <div class="mt-5">
                        <button type="submit" class="w-full bg-secondary text-white py-2 rounded hover:bg-[#253665]">Login</button>
                    </div>
                    <div class="mt-5">
                        <a href="#" class="text-primary">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup
        lang = "ts">
import {EyeIcon, EyeSlashIcon} from "@heroicons/vue/24/solid";

const showPassword = () => {
    document.getElementById('password').setAttribute('type', 'text');
    document.getElementById('eye').classList.add('hidden');
    document.getElementById('eye-slash').classList.remove('hidden');
}

const hidePassword = () => {
    document.getElementById('password').setAttribute('type', 'password');
    document.getElementById('eye').classList.remove('hidden');
    document.getElementById('eye-slash').classList.add('hidden');
}

</script>
