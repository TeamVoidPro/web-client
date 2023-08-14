<template>
  <div>
  <ParkOwnerNavbar currentPage="home"/>
    <div class="flex flex-col bg-accent justify-center items-center h-[100%] px-10 py-2.5">
      <div class="flex bg-white justify-center items-center m-5 rounded-2xl relative h-[85vh] shadow shadow-blue-200">
          <div class="w-1/3 flex flex-col justify-center items-center h-full m-5 gap-10">
            <div class="flex flex-col gap-2 ">
              <div  class="text-6xl font-bold text-center text-primary top-8">Park Ease</div>
              <div class="text-xl px-4 font-semibold text-center text-ternary">Say Goodbye to Parking Woes</div>
              <div class="text-xl px-4 font-semibold text-center text-ternary"> Discover the Future of Hassle-Free Parking</div>
              <div class="flex justify-center items-center">
                <button class="flex mt-5 bg-black text-white font-bold rounded-2xl px-5 py-2.5 ml-2.5 mr-2.5">
                  <div class="flex gap-4">
                    <img src="../assets/images/playstore.png">
                      <div class="flex items-center justify-center flex-col">
                        <div>
                          GET IT ON
                        </div>
                        <div>
                          GOOGLE PLAY
                        </div>
                      </div>
                  </div>
                </button>
              </div>
            </div>
            <div class="flex flex-col gap-2 ">
              <div class="text-xl px-4 font-semibold text-center text-ternary">Want to Earn Money from your vacant space?</div>
              <div class="text-xl px-4 font-semibold text-center text-ternary"> Join With Us & Make Profits</div>
              <div class="flex justify-center items-center">
                <button class="flex bg-blue-600 text-white font-bold rounded-2xl px-5 py-2.5 ml-2.5 mr-2.5">
                  <div>
                    Join Now
                  </div>
                </button>
              </div>
            </div>

          </div>
          <div class="w-2/3 p-6">
            <n-carousel class="w-full" autoplay>
              <img
                  class="carousel-img rounded-2xl"
                  src="../assets/images/parking_area.jpg"
              />
              <img
                  class="carousel-img rounded-2xl"
                  src="../assets/images/parking_area.jpg"
              />
              <img
                  class="carousel-img rounded-2xl"
                  src="../assets/images/parking_area.jpg"
              />
              <img
                  class="carousel-img rounded-2xl"
                  src="../assets/images/parking_area.jpg"
              />
            </n-carousel>
        </div>
      </div>
      <section id="about" class="h-[100vh] flex flex-col justify-center items-center">
        <div class="flex bg-white justify-center items-center m-5 rounded-2xl h-full shadow shadow-blue-200">
          <div class="w-3/4 justify-center items-center px-5 py-1.5">
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
          <div class="my-2 h-full w-1/4 flex flex-col items-center justify-center">
            <img src="../assets/images/mobile_app.png" class="h-full p-8">
          </div>
        </div>
        <div class="px-5 m-5 w-full cursor-pointer">
          <div class="flex justify-around  mx-3 gap-3 bg-primary px-8 rounded-2xl w-full py-8 ">
            <div class="mx-2 flex flex-col gap-4 justify-around">
              <div class="text-4xl font-bold text-center text-white">Are you a Parking Provider?</div>
              <div class="text-sm  text-center text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            </div>
            <div class="mx-2 flex-col flex items-center justify-center pl-2">
              <img src="../assets/images/Vector.png" class="h-10 w-12"/>
            </div>
          </div>
        </div>
      </section>
      <section id="features" class="h-[100vh] flex flex-col justify-center items-center p-8 ">
        <div class="flex flex-col gap-10 bg-white justify-around items-center my-1 h-full  rounded-2xl shadow shadow-blue-200 px-2.5 py-2.5">
          <div class="text-3xl font-bold text-center text-primary">Features</div>
          <div class="flex w-2/3 ">
            <div class="flex justify-center items-center w-[400px]">
              <img src="../assets/images/owner_view.png" class="h-[200px]">
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class="text-3xl font-bold text-center text-primary">BECOME AN OWNER AND START EARNING MONEY</div>
              <div class="text-base text-center">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </div>
              <button class="flex mt-2 bg-primary px-4 py-3 rounded-xl">
                <div class="text-sm font-bold text-center text-white">LEARN MORE</div>
              </button>
            </div>
          </div>
          <div class="flex flex-row-reverse w-2/3 ">
            <div class="flex justify-center items-center w-[400px]">
              <img src="../assets/images/owner_view.png" class="h-[200px]">
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class="text-3xl font-bold text-center text-primary">BECOME AN OWNER AND START EARNING MONEY</div>
              <div class="text-base text-center">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </div>
              <button class="flex mt-2 bg-primary px-4 py-3 rounded-xl">
                <div class="text-sm font-bold text-center text-white">LEARN MORE</div>
              </button>
            </div>
          </div>
          <div class="flex w-2/3 ">
            <div class="flex justify-center items-center w-[400px]">
              <img src="../assets/images/owner_view.png" class="h-[200px]">
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class="text-3xl font-bold text-center text-primary">BECOME AN OWNER AND START EARNING MONEY</div>
              <div class="text-base text-center">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </div>
              <button class="flex mt-2 bg-primary px-4 py-3 rounded-xl">
                <div class="text-sm font-bold text-center text-white">LEARN MORE</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div class="flex h-[300px] w-full flex-col gap-4 justify-center items-center mt-2">
        <div class="flex flex-col">
          <div class="text-2xl font-bold text-primary text-center">
            Subscribe For Newsletter
          </div>
          <div class="text-base text-center">
            Keep Inform About Daily Updates
          </div>
        </div>
        <div class="flex w-2/5 mt-1.5">
          <n-input class="w-4/6 py-2 mx-4 " placeholder="Enter your email" />
          <div class="flex items-center justify-center w-2/6 bg-primary rounded-2xl px-3 py-1">
            <div class="px-3 py-1">
              <i><img src="../assets/images/email.png" class="w-6 h-4"></i>
            </div>
            <div class="text-white text-center font-semibold text-lg">
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

import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";
import ParkOwnerNavbar from "@components/Navbar/ParkOwnerNavbar.vue";
import { NCarousel,NInput } from "naive-ui";

</script>