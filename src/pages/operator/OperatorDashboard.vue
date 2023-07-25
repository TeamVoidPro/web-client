<template>
  <OperatorLayout>
    <div>
      <div class="flex gap-10">

        <div class="py-5 bg-white rounded-xl shadow flex flex-col items-center w-[20%] justify-center">
          <img src="../../assets/images/car-svgrepo-com.svg" alt=""
            class="w-12 h-12">
          <div class="text-4xl font-bold"><span class="text-green-500">35</span>/60</div>
          <div class="mt-2 font-semibold text-lg">Free Slots</div>
          <div class="flex gap-3 items-center">
            <img src="../../assets/images/refresh-svgrepo-com.svg" alt="" class="w-5 h-5">
            <div>Last 5 minutes</div>
          </div>
        </div>

        <div class="py-5 px-10 bg-white rounded-xl shadow flex flex-col items-center w-[20%]">
          <img src="../../assets/images/booking.png" alt=""
            class="w-12 h-12">
          <div class="text-4xl font-bold">23</div>
          <div class="mt-2 font-semibold text-lg text-center">Upcoming Reservations</div>
          <div class="flex gap-3 items-center">
            <img src="../../assets/images/fast-forward-double-right-arrows-symbol.png" alt="" class="w-5 h-5">
            <div>For Today</div>
          </div>
        </div>

      </div>

      <div class="w-full flex justify-between mt-5">
        <div class="w-[49%] shadow rounded-[10px]">
          <Bar
              id="my-chart-id"
              :options="chartOptions1"
              :data="chartData1"
              style="width: 100%;height: 400px; padding:1em; background-color: white;border-radius: 10px;"
          />
        </div>

        <div class="w-[49%] shadow rounded-[10px]">
          <Bar
              id="my-chart-id"
              :options="chartOptions2"
              :data="chartData2"
              style="width: 100%;height: 400px; padding:1em; background-color: white;border-radius: 10px;"
          />
        </div>
      </div>

    </div>
  </OperatorLayout>
</template>

<script setup
        lang = "ts">

import OperatorLayout from "../../layouts/OperatorLayout.vue";
import {Bar} from "vue-chartjs";
import {ref} from "vue";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData1 = ref({
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  datasets: [
    {
      data: [14.5,20,15,12,18,17.5,11.2,9.5,0,0,7.1,8,8.2,8.6,9,9.9,25.2,22.3,22.23,20,14,13.2,10.5,11.2,9.5,7.1,8,8.2,8.6,9],
      barThickness: 10,
      backgroundColor: '#9248ce',
      borderRadius: 10,
    },
    {
      data: Array(30).fill(30),
      barThickness: 10,
      backgroundColor: '#ededed',
      borderRadius: 10
    },

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
      text: 'Total Revenue ( Monthly )',
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

const chartData2 = ref({
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  datasets: [
    {
      data: [20,14,13.2,10.5,11.2,9.5,7.1,8,0,0,14.5,20,15,12,18,17.5,11.2,9.5,5,4,7.1,8,8.2,8.6,9,9.9,25.2,22.3,22.23,9],
      barThickness: 10,
      backgroundColor: '#1965f1',
      borderRadius: 10,
    },
    {
      data: Array(30).fill(30),
      barThickness: 10,
      backgroundColor: '#ededed',
      borderRadius: 10
    },

  ],
})

const chartOptions2 = ref({
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
        text: 'Number of hours',
        color: 'black',
        font: {
          size: 14,
          weight: "bold"
        }
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
      text: 'Reservation hours per day',
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
