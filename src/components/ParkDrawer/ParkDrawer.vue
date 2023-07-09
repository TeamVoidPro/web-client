<script setup lang="ts">
// define props for height and width of canvas
import {onMounted, ref} from "vue";
import {NButton} from "naive-ui";

const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
})

const canvas = ref<any>(null)

onMounted(() => {
  draw()
  canvas.value.addEventListener('mousedown', onMouseDown)
  canvas.value.addEventListener('mousemove', onMouseMove)
  canvas.value.addEventListener('mouseup', onMouseUp)
})

interface Shape {
  x: number,
  y: number,
  width: number,
  height: number,
  color: string,
  text: string,
  type: string
}

const shapes = ref<Array<Shape>>([])



// define car block shape
const carBlock:Shape = {
  x: 100,
  y: 200,
  width: 100,
  height: 100,
  color: 'red',
  text: 'Car Block',
  type: 'slot'
}

// define lorry block shape
const lorryBlock = {
  x: 0,
  y: 0,
  width: 200,
  height: 100,
  color: 'blue',
  text: 'Lorry Block',
  type: 'slot'
}

shapes.value.push(carBlock)
shapes.value.push(lorryBlock)

// make block draggable
let isDragging = false
let currentShape:any = null
let prevX = 0
let prevY = 0

const onMouseDown = (e:Event) => {
  const {x, y} = getMousePosition(e)
  isDragging = true
  shapes.value.forEach(shape => {
    if (x >= shape.x && x <= shape.x + shape.width && y >= shape.y && y <= shape.y + shape.height) {
      currentShape = shape
    }
  })
  prevX = x
  prevY = y
}

const onMouseMove = (e:Event) => {
  if (isDragging) {
    const {x, y} = getMousePosition(e)
    const dx = x - prevX
    const dy = y - prevY
    shapes.value.forEach(shape => {
      if (shape === currentShape) {
        shape.x += dx
        shape.y += dy
      }
    })
    prevX = x
    prevY = y
    draw()
  }
}

const onMouseUp = () => {
  isDragging = false
  currentShape = null

}

const getMousePosition = (e:Event) => {
  const rect = canvas.value.getBoundingClientRect()
  // @ts-ignore
  const x = e.clientX - rect.left
  // @ts-ignore
  const y = e.clientY - rect.top
  return {x, y}
}







// define a function to draw on the canvas
const draw = () => {
  const ctx = canvas.value.getContext('2d')
  ctx.clearRect(0, 0, props.width, props.height)
  shapes.value.forEach(shape => {
    // check if shape is a slot or a zone
    if (shape.type === 'slot') {
      ctx.fillStyle = shape.color
      ctx.fillRect(shape.x, shape.y, shape.width, shape.height)
      ctx.fillStyle = 'white'
      ctx.font = '20px serif'
      ctx.fillText(shape.text, shape.x + 10, shape.y + 30)
    } else {
      ctx.strokeStyle = shape.color
      ctx.strokeRect(shape.x, shape.y, shape.width, shape.height)
      ctx.fillStyle = 'black'
      ctx.font = '20px serif'
      ctx.fillText(shape.text, shape.x + 10, shape.y + 30)
    }
  })

}

const AddCarBlock = () => {
  console.log('Add Car Block')
  const newCarBlock = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    color: 'red',
    text: 'Car Block',
    type: 'slot'
  }
  shapes.value.push(newCarBlock)
  draw()
}

const AddLorryBlock = () => {
  console.log('Add Lorry Block')
  const newLorryBlock = {
    x: 0,
    y: 0,
    width: 200,
    height: 100,
    color: 'blue',
    text: 'Lorry Block',
    type: 'slot'
  }
  shapes.value.push(newLorryBlock)
  draw()
}

const AddZone = () => {
  console.log('Add Zone')
  const newZone = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    color: 'green',
    text: 'Zone',
    type: 'zone'
  }
  shapes.value.push(newZone)
  draw()


}

const deleteShape = (shape:Shape) => {
  console.log('Delete Shape')
  const index = shapes.value.indexOf(shape)
  shapes.value.splice(index, 1)
  draw()
}




</script>

<template>
  <div>
    <div class="container">
      <div class="flex flex-col gap-2">
        <n-button type="success" class="text-black" @click="AddZone()">
          Add zone
        </n-button>
        <n-button type="success" class="text-black" @click="AddCarBlock()">
          Add Car Block
        </n-button>
        <n-button type="success" class="text-black" @click="AddLorryBlock()">
          Add Lorry Block
        </n-button>
        <n-button type="success" class="text-black" @click="deleteShape(shapes[0])">
          Delete Shape
        </n-button>
      </div>
    <canvas ref="canvas" :width="width" :height="height"></canvas>
    </div>
  </div>

</template>

<style scoped>
canvas {
  border: 1px solid #000;

}
.container{
  margin: 100px;
  display: flex;
  gap: 2rem;
}

</style>