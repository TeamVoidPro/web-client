

<script setup lang="ts">
import * as THREE from 'three';
import {onMounted, ref} from "vue";
import {DragControls} from "three/addons/controls/DragControls.js";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvasContainer = ref(null);
const CAR_WIDTH = 4;
const CAR_HEIGHT = 2;
const CAR_COLOR = 0x00ff00; // Green
let scene;
let camera;
let renderer;
let ground;
let controls;

// Create an array to store cars
const cars = [];
const carGeometry = new THREE.BoxGeometry(CAR_WIDTH, CAR_HEIGHT, 0.1);
const carMaterial = new THREE.MeshBasicMaterial({ color: CAR_COLOR });

// Example of event listener setup
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

// Variables to track key states
let keys = {};

// Keydown event handler
function onKeyDown(event) {
  keys[event.keyCode] = true;
  moveObject(); // Call a function to move the object
}

// Keyup event handler
function onKeyUp(event) {
  keys[event.keyCode] = false;
}

// Function to move the object based on key states
function moveObject(object) {
  // Check key states and update object position
  if (keys[87]) {
    // W key pressed, move forward
    object.position.z -= 0.1;
  }
  if (keys[83]) {
    // S key pressed, move backward
    object.position.z += 0.1;
  }
  if (keys[65]) {
    // A key pressed, move left
    object.position.x -= 0.1;
  }
  if (keys[68]) {
    // D key pressed, move right
    object.position.x += 0.1;
  }
}

window.addEventListener('keyup',onKeyUp)
window.addEventListener('keydown',onKeyDown)


onMounted(()=>{
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);
  camera.position.z = 50;

  const groundGeometry = new THREE.PlaneGeometry(50, 50);
  const groundMaterial = new THREE.MeshBasicMaterial({
    color: 0x888888,
  });
  ground = new THREE.Mesh(groundGeometry, groundMaterial);

  // ground.rotation.x = Math.PI / 2;
  ground.position.y = -0.5;
  scene.add(ground);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  // addControls();

  animate();
})

const AddCar = () => {
  const carMesh = new THREE.Mesh(carGeometry, carMaterial);
  carMesh.position.y = CAR_HEIGHT / 2;
  scene.add(carMesh);
  cars.push(carMesh);
};

const addControls = () => {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = false;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.5;
};







</script>


<template>
  <div>
    <button class="absolute bg-primary text-white p-4 right-1 top-1 rounded-3xl" @click="AddCar()">
      2D View
    </button>
    <div ref="canvasContainer" id="canvas-container"></div>
  </div>
</template>

<style>
#canvasContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
