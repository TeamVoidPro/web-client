<script setup lang="ts">

const props = defineProps({
  currentPage:{
    type: String,
    required: true
  }
})

</script>

<template>
  <nav class="bg-white dark:bg-black drop-shadow-sm  w-full top-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-24">
        <div class="flex-shrink-0">
          <!-- Your logo or site title goes here -->
          <a href="#" class="text-black">
            <img class="h-12 " src="@/assets/images/logo-white.png" alt="Workflow">
          </a>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <!-- Navbar links go here -->
            <a href="#" :class="currentPage === 'home' ? 'bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-black hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'">Home</a>
            <a href="#about" :class="currentPage === 'about' ? 'bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-black hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'">About</a>
            <a href="#" :class="currentPage === 'contact' ? 'bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-black hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'">Contact</a>
            <a href="/employee-login" :class="currentPage === 'login' ? 'bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-black hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'">Login</a>
            <a href="#" :class="currentPage === 'register' ? 'bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-black hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'">Register</a>

          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>

</style>