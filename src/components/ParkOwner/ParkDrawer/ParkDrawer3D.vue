

<script setup lang="ts">
import * as THREE from 'three';
import {ref} from "vue";
import {onMounted, onUnmounted} from "vue";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {DRACOLoader} from "three/addons/loaders/DRACOLoader.js";
import {DragControls} from "three/addons/controls/DragControls.js";
import {Object3D} from "three";

const canvasContainer = ref(null);
let scene ;
let camera;
let ground;
let controls;


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



onMounted(() => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth/2, window.innerHeight/2);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  canvasContainer.value.appendChild(renderer.domElement);

  const addLighting = () => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const light2 = new THREE.PointLight( 0xff0000, 1, 100 );
    light2.position.set( 50, 50, 50 );
    scene.add( light2 );


    // add PointLight
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 10, 20);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(0, 10, -20);
    scene.add(directionalLight);
  };

  const addCarPark = () => {
      // const carGeometry = new THREE.BoxGeometry(2, 1, 4);
      // const carMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });
      // const carMesh = new THREE.Mesh(carGeometry, carMaterial);
      // carMesh.position.y = 0.5;
      // scene.add(carMesh);

    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    ground = groundMesh;
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.5;
    scene.add(groundMesh);
  };
  let carObject;

  const addCar = () =>{
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
    loader.setDRACOLoader( dracoLoader );

    loader.load('/models/free_porsche_911_carrera_4s/scene.gltf', function ( gltf ) {
      //make model position
      gltf.scene.position.y = 0.5;
      carObject = new Object3D();
      carObject.add(gltf.scene);


      scene.add(carObject);

      // Make whole model group draggable
      const dragControls = new DragControls( [ carObject ], camera, renderer.domElement );
      dragControls.addEventListener( 'dragstart', function ( event ) {
        controls.enabled = false;
        const position = event.object.position;

      } );
      dragControls.addEventListener( 'dragend', function ( event ) { controls.enabled = true; } );




    }, undefined, function ( error ) {

      console.error( error );

    } );
  }

  const renderScene = () => {
    renderer.render(scene, camera);
    moveObject(carObject);
    requestAnimationFrame(renderScene);
  };

  const addControls = () => {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };



  addLighting();
  addCarPark();
  renderScene();
  addControls();
  addCar();
  window.addEventListener("resize", onWindowResize);
});

const Enable2DView = ()=>{
  //Rotate scene
  scene.rotation.x=0;
  scene.rotation.y=0;
  scene.rotation.z=0;
  scene.rotation.x=Math.PI/2;
  camera.position.z =30
}


</script>


<template>
  <div>
    <button class="absolute bg-primary text-white p-4 right-1 top-1 rounded-3xl" @click="Enable2DView()">
      2D View
    </button>
    <div ref="canvasContainer"></div>
  </div>
</template>

<style>
#canvasContainer {
  width: 100%;
  height: 50vh;
  overflow: hidden;
}
</style>
