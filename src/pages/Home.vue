<template>
  <div>
  <NavBar/>
    <div class="flex flex-col bg-accent justify-center items-center h-[100%] px-10 py-2.5 ">
      <div class="flex bg-white justify-center items-center m-5 rounded-2xl shadow shadow-blue-200">
          <div class="justify-center items-center m-5">
            <div class="text-4xl font-bold text-center text-ternary">Welcome to</div>
            <div class="text-4xl font-bold text-center text-ternary">Parking Management System</div>
            <div class="text-2xl font-bold text-center text-ternary">We are here to help you</div>
          </div>
          <div class="m-5">
            <img src="../assets/images/parking_area.jpg">
          </div>
        </div>
      <div class="flex bg-white justify-center items-center m-5 rounded-2xl shadow shadow-blue-200">
        <div class="justify-center items-center px-2.5 py-1.5">
          <div class="text-3xl font-bold text-center text-ternary">Parking made easy</div>
          <div class="text-3xl font-bold text-center text-ternary">Right at your fingertips!</div>
          <div class="text-lg mt-1.5 mb-1.5">
            orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </div>
          <div class="flex justify-center items-center">
            <button class="flex bg-black text-white font-bold rounded-2xl px-5 py-2.5 ml-2.5 mr-2.5">
              <div><img src="../assets/images/playstore.png"></div>
              <div>GET IT ON<br>GOOGLE PLAY</div>
            </button>
          </div>
          <div class="flex justify-center items-center mt-1.5">
            <div class="flex flex-col mx-3">
              <div class="text-3xl font-bold text-center text-ternary">1400+</div>
              <div class="text-xl font-bold text-center">Parking slots</div>
            </div>
            <div class="flex flex-col mx-3">
              <div class="text-3xl font-bold text-center text-ternary">345</div>
              <div class="text-xl font-bold text-center">Parking areas</div>
            </div>
            <div class="flex flex-col mx-3">
              <div class="text-3xl font-bold text-center text-ternary">8000+</div>
              <div class="text-xl font-bold text-center">Drivers</div>
            </div>
          </div>
        </div>
        <div class="my-2 h-[80%] w-[50%]">
          <img src="../assets/images/mobile_app.png" class="h-[400px]">
        </div>
      </div>
      <div class="px-5 m-5">
        <Button class="flex mx-3">
          <div class="mx-2">
          <div class="text-4xl font-bold text-center text-white">Are you a Parking Provider?</div>
          <div class="text-xl font-bold text-center text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
          </div>
          <div class="mx-2 pl-2">
            <img src="../assets/images/Vector.png">
          </div>
        </Button>
      </div>
      <div class="flex bg-white justify-center items-center m-5 rounded-2xl shadow shadow-blue-200 px-2.5 py-2.5">
        <div class="flex justify-center items-center w-[400px]">
          <img src="../assets/images/owner_view.png" class="h-[400px]">
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-3xl font-bold text-center text-primary">BECOME AN OWNER AND START EARNING MONEY</div>
          <div class="text-base text-center">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </div>
          <Button class="flex mt-2">
            <div class="text-2xl font-bold text-center text-white">LEARN MORE</div>
          </Button>
        </div>
      </div>
      <div>
        <Button>
          <div class="text-4xl font-bold text-center text-white">View more features</div>
        </Button>
      </div>
      <div class="flex flex-col justify-center items-center mt-2">
        <div class="text-2xl font-bold text-primary text-center">
          Subscribe For Newsletter
        </div>
        <div class="text-base text-center">
          Keep Inform About Daily Updates
        </div>
        <div class="flex w-[600px] mt-1.5">
          <input type="text" class="px-20 py-2 border border-black rounded placeholder-gray-600 font-semibold mr-2.5" placeholder="">
<!--          <div class="flex bg-white border-2 border-primary rounded-2xl w-[300px] mr-2.5">-->
<!--          </div>-->
          <div class="flex bg-primary w-[200px] rounded-2xl px-3 py-1">
            <div class="px-3 py-1">
              <i><img src="../assets/images/email.png"></i>
            </div>
            <div class="text-white text-center font-bold text-lg">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script setup lang = "ts">

import NavBar from "../components/NavBar.vue";
import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";

</script>