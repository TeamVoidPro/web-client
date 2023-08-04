<script setup lang="ts">
import ParkOwnerLayout from "@layouts/ParkOwnerLayout.vue";
import {Line} from "vue-chartjs";
import {ref} from "vue";

const chartData1 = ref({
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  datasets: [
    {
      data: [14.5,20,15,12,18,17.5,11.2,9.5,0,0,7.1,8,8.2,8.6,9],
      borderWidth: 4,
      backgroundColor: '#9248ce',
      pointRadius: 5,
    }

  ],
})

const chartOptions1 = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false
      },
      stacked: true,
      title: {
        display: true,
        text: 'Days',
        color: 'black',
        font: {
          size: 14,
          weight: "bold"
        }
      }
    },
    y: {
      grid: {
        display: false
      },
      beginAtZero: true,
      title: {
        display: true,
        text: 'Revenue of the day',
        color: 'black',
        font: {
          size: 14,
          weight: "bold"
        }
      },
      ticks: {
        callback: value => value + 'K'
      }
    },
    stacked: true
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Total income per day',
      font: {
        size: 18,
      },
      color: '#000000',
      padding: {
        top: 10,
        bottom: 20
      }
    }
  }
})


</script>

<template>
  <ParkOwnerLayout>
    <div class="flex justify between my-5 gap-5 w-full justify-center align-middle">
      <div class="flex flex-col bg-white w-1/2">
        <div>Revenue Analytics</div>
        <div class=" shadow rounded-[10px]">
          <Line
              id="my-chart-id"
              :options="chartOptions1"
              :data="chartData1"
              style="width: 100%;height: 400px; padding:1em; background-color: white;border-radius: 10px;"
          />
        </div>
      </div>
      <div class="flex flex-col bg-white w-1/2">
        <div>Revenue Analytics</div>
      </div>
    </div>
  </ParkOwnerLayout>

</template>

<style scoped>

</style>