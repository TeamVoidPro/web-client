<template>
  <OperatorLayout>
    <div>
      <div class="flex justify-between">

        <div class="py-2 bg-white rounded-xl shadow flex flex-col items-center w-[20%] justify-center">
          <img src="../../assets/images/car-svgrepo-com.svg" alt=""
            class="w-12 h-12">
          <div class="text-4xl font-bold"><span class="text-green-500">35</span>/60</div>
          <div class="mt-2 font-semibold text-lg">Free Slots</div>
          <div class="flex gap-3 items-center">
            <img src="../../assets/images/refresh-svgrepo-com.svg" alt="" class="w-5 h-5">
            <div>Last 5 minutes</div>
          </div>
        </div>

        <div class="py-2 px-3 bg-white rounded-xl shadow flex flex-col items-center w-[24%]">
          <img src="../../assets/images/booking.png" alt=""
            class="w-10 h-10">
          <div class="text-4xl font-bold mt-2">23</div>
          <div class="mt-2 font-semibold text-lg text-center">Upcoming Reservations</div>
          <div class="flex gap-3 items-center">
            <img src="../../assets/images/fast-forward-double-right-arrows-symbol.png" alt="" class="w-5 h-5">
            <div>For Today</div>
          </div>
        </div>

        <div class="py-2 px-3 bg-white rounded-xl shadow flex flex-col items-center w-[24%]">
          <PeakIcon class="w-12 h-12"/>
          <div class="text-xl font-semibold mt-2">10.00 A.M - 2.00 P.M</div>
          <div class="mt-2 font-semibold text-lg text-center">Peak Hours</div>
          <div class="flex gap-3 items-center mt-2">
            <img src="../../assets/images/fast-forward-double-right-arrows-symbol.png" alt="" class="w-5 h-5">
            <div>For Today</div>
          </div>
        </div>

        <div class="py-2 px-3 bg-white rounded-xl shadow flex flex-col items-center w-[24%]">
          <ProfitIcon class="w-12 h-12"/>
          <div class="text-2xl font-semibold mt-2">Rs. 9800.00</div>
          <div class="mt-2 font-semibold text-lg text-center">Total Income</div>
          <div class="flex gap-3 items-center mt-2">
            <img src="../../assets/images/fast-forward-double-right-arrows-symbol.png" alt="" class="w-5 h-5">
            <div>For Today</div>
          </div>
        </div>


      </div>

      <div class="w-full flex justify-between mt-5">
        <div class="w-[49%] shadow rounded-[10px]">
          <Line
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

      <div class="w-full flex justify-between mt-5">
        <div class="w-[49%] shadow rounded-[10px] p-4 bg-white h-[400px]">
          <div class="text-xl font-semibold text-center">Reviews</div>
          <div class="flex items-center">
            <div class="w-[88%] h-[60%] px-4">
              <Bar
                  id="my-chart-id"
                  :options="chartOptions3"
                  :data="chartData3"
                  style="background-color: white;border-radius: 10px;"
              />
            </div>
            <div class="space-y-1.5">
              <div class="text-md font-semibold">53%</div>
              <div class="text-md font-semibold">37%</div>
              <div class="text-md font-semibold">5%</div>
              <div class="text-md font-semibold">3.4%</div>
              <div class="text-md font-semibold">1.6%</div>
            </div>
          </div>
          <div class="">
            <div class="text-xl font-semibold">Most Recent Review</div>
          </div>
          <div class="px-5">
            <div class="flex justify-between items-center mt-2">
              <div class="flex items-center gap-3">
                <img src="../../assets/images/user.jpg" alt=""
                class="w-10 h-10 rounded-full object-cover p-0.5 border border-black">
                <div class="text-lg font-semibold">Danodya Supun</div>
              </div>
              <div class="flex items-center">
                <n-rate readonly :default-value="4" class="scale-75"/>
                <div class="flex items-center">4</div>
              </div>
            </div>
            <div class="mt-4 px-10">
              lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias aliquid amet
              lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div class="w-full text-right">
              Today at 12:26 P.M
            </div>
          </div>
        </div>

        <div class="w-[49%] shadow rounded-[10px] p-4 bg-white h-[400px]">

          <div class="w-[100%]">
            <div class="text-center text-lg font-semibold mb-2">Top-performing Parking Slots</div>
            <n-table :bordered="false" :single-line="false">
              <thead>
              <tr class="text-center">
                <th>#</th>
                <th>APD (hrs)</th>
                <th>OR</th>
                <th>RR</th>
                <th>Revenue (Rs)</th>
                <th>Rating</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>#12</td>
                <td>14</td>
                <td>83%</td>
                <td>30%</td>
                <td>4 800</td>
                <td>4.8</td>
              </tr>
              <tr>
                <td>#12</td>
                <td>14</td>
                <td>83%</td>
                <td>30%</td>
                <td>4 800</td>
                <td>4.8</td>
              </tr>
              <tr>
                <td>#12</td>
                <td>14</td>
                <td>83%</td>
                <td>30%</td>
                <td>4 800</td>
                <td>4.8</td>
              </tr>
              <tr>
                <td>#12</td>
                <td>14</td>
                <td>83%</td>
                <td>30%</td>
                <td>4 800</td>
                <td>4.8</td>
              </tr>
              <tr>
                <td>#12</td>
                <td>14</td>
                <td>83%</td>
                <td>30%</td>
                <td>4 800</td>
                <td>4.8</td>
              </tr>
              </tbody>
            </n-table>
            <div class="flex flex-wrap justify-between mt-3">
              <div><span class="font-semibold">APD - </span>Avg Parking Duration</div>
              <div><span class="font-semibold">OR - </span>Occupancy Rate</div>
              <div><span class="font-semibold">RR - </span>Reservation Rate</div>
            </div>
          </div>

        </div>
      </div>

      <div>
        <button class="absolute top-[90%] right-[5em] opacity-50 hover:opacity-100 hover:bg-white" @click="openScanner">
          <ScanIcon class="w-12 h-12 p-1 border-2 border-black rounded" />
        </button>
        <n-modal v-model:show="showModal">
          <n-card
              style="width: 600px; color: black"
              title="Scan QR Code"
              :bordered="false"
              size="huge"
              role="dialog"
              aria-modal="true"
          >
            <template #header-extra>
              <CloseIcon class="w-6 h-6 text-red-600" @click="closeScanner"/>
            </template>
            <div>
              <QRScanner :message='openCamera'/>
            </div>
            <template #footer>

            </template>
          </n-card>
        </n-modal>
      </div>
    </div>
  </OperatorLayout>
</template>

<script setup
        lang = "ts">

import OperatorLayout from "../../layouts/OperatorLayout.vue";
import {Bar,Line} from "vue-chartjs";
import {onMounted, ref} from "vue";
import { Chart as ChartJS,RadialLinearScale,PointElement,LineElement,Filler, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

import PeakIcon from "../../assets/icons/PeakIcon.vue";
import ProfitIcon from "@assets/icons/ProfitIcon.vue";
import ScanIcon from "@assets/icons/ScanIcon.vue";
import CloseIcon from "@assets/icons/CloseIcon.vue";
import QRScanner from "@components/ParkOperator/QRScanner.vue"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,Filler,LineElement,PointElement,RadialLinearScale)

const showModal= ref(false)
const openCamera = ref(false)

function openScanner() {
  showModal.value = true
  openCamera.value = true
}

function closeScanner() {
  showModal.value = false
  openCamera.value = false
}

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

const chartData2 = ref({
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  datasets: [
    {
      data: [20,14,13.2,10.5,11.2,9.5,7.1,8,0,0,14.5,20,15,12,18],
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

const chartData3 = ref({
  labels: ['5 ★','4 ★','3 ★','2 ★','1 ★'],
  datasets: [
    {
      data: [24,19,11.2,6,3],
      barThickness: 10,
      backgroundColor: '#f1ad19',
      borderRadius: 10,
      axis: 'y'
    },
    {
      data: Array(5).fill(30),
      barThickness: 10,
      backgroundColor: '#ededed',
      borderRadius: 10,
      axis: 'y'
    }
  ],
})

const chartOptions3 = ref({
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
  scales: {
    x : {
      grid: {
        display: false
      },
      display: false
    },
    y: {
      grid: {
        display: false
      },
      stacked: true,
      ticks: {
        font: {
          size: 16,
          weight: "bold"
        }
      }
    },

  },
  plugins: {
    legend: {
      display: false
    }
  }
})



</script>
