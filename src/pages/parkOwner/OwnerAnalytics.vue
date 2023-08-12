<script setup lang="ts">

import ParkOwnerLayout from "@layouts/ParkOwnerLayout.vue";
import {Bar,Line} from "vue-chartjs";
import {ref} from "vue";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js'
import {useMessage} from "naive-ui";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,Filler,LineElement,PointElement,RadialLinearScale)

const chartData1 = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      data: [14.5,20,15,12,18,17.5,11.2,9.5,0,0,7.1,8],
      borderWidth: 4,
      backgroundColor: '#9248ce',
      pointRadius: 5,
    }

  ],
})

const chartData2 = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [14.5,20,15,12,18,17.5],
      borderWidth: 4,
      backgroundColor: '#1965f1',
      pointRadius: 5,
    }

  ],
})

const chartData3 = ref({
  labels: ['7am-9am','9am'-'11am','11pm-1pm','1pm-3pm','3pm-5pm','5pm-7pm','7pm-9pm'],
  datasets: [
    {
      data:  [12,5,1,1,3,4,2],
      borderWidth: 4,
      backgroundColor: '#5189f1',
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
        text: 'Month',
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
        text: 'Revenue of the month (in thousands)',
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
      text: 'Total income of last year',
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
        text: 'Month',
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
      beginAtZero: false,
      title: {
        display: true,
        text: 'Revenue of the month (in thousands)',
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
      text: 'Forecasted revenue for next 3 months',
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

const chartOptions3 = ref({
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
        text: 'Time Period',
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
        text: 'Number of slots reserved',
        color: 'black',
        font: {
          size: 14,
          weight: "bold"
        }
      },
      ticks: {
        callback: value => value
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
      text: 'Peak hours of last Monday',
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

const dropdownOptions= ref ([
  {
    label: '3 months',
    key: '3'
  },
  {
    label: "6 months",
    key: "6"
  },
  {
    label: 'year',
    key: '12'
  }
])

const dropdownOptions2= ref([
    {
    label: 'week',
    key: '1'
    },
  {
    label: '2 weeks',
    key: '2'
  },
  {
    label: 'month',
    key: '4'
  }
])

const dropdownOptions3= ref([
  {
    label: 'Monday',
    key: '1'
  },
  {
    label: 'Tuesday',
    key: '2'
  },
  {
    label: 'Wednesday',
    key: '3'
  },
  {
    label: 'Thursday',
    key: '4'
  },
  {
    label: 'Friday',
    key: '5'
  },
  {
    label: 'Saturday',
    key: '6'
  },
  {
    label: 'Sunday',
    key: '7'
  }
])

</script>

<template>
  <ParkOwnerLayout>
    <div class="flex flex-col  w-full my-2 h-full">
    <div class="flex justify-evenly w-full gap-5 mx-2 mt-2 px-2">
      <div class="flex flex-col bg-white rounded-2xl w-[600px] ">
        <div class="flex text-2xl font-bold justify-center mt-2">Revenue Analytics</div>
        <div>
          <div class="flex flex-col justify-center my-2">
            <div class="flex justify-between gap-4 px-3">
              <div class="flex flex-col border-2 border-blue-400 w-full px-2 py-2 rounded-2xl mb-2 h-[100px]">
                <div class="flex justify-center text-center text-lg font-bold">Today Revenue</div>
                <div class="flex justify-center text-3xl font-bold text-secondary">$12.00</div>
              </div>
              <div class="flex flex-col border-2 border-blue-400 w-full px-2 py-2 rounded-2xl mb-2 h-[100px]">
                <div class="flex justify-center text-center text-lg font-bold">Revenue Last Month</div>
                <div class="flex justify-center text-3xl font-bold text-secondary">$12.00</div>
              </div>
              <div class="flex flex-col border-2 border-blue-400 w-full px-2 py-2 rounded-2xl h-[100px]">
                <div class="flex justify-center text-lg font-bold">Onsite Payments</div>
                <div class="flex justify-center text-lg font-bold">120</div>
<!--                <div class="flex justify-center text-lg font-bold">Online Payments</div>-->
<!--                <div class="flex justify-center text-lg font-bold">180</div>-->
              </div>
            </div>
            <div class="flex flex-col shadow rounded-[10px] mx-2 my-2">
              <div class="flex justify-end py-2">
<!--                Search bar-->
                <select class="border-2 border-blue-400 rounded-2xl px-2 py-1 w-1/3 mr-2">
                  <option v-for="dropdownOption in dropdownOptions">{{dropdownOption.label}}</option>
                </select>
              </div>
              <div>
              <Line
                  id="my-chart-id"
                  :options="chartOptions2"
                  :data="chartData2"
                  style="width:100%;height: 400px; padding:1em; background-color: white;border-radius: 10px;"
              />
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center mt-2 px-2 py-2">
            <div class="">
              <div class="flex flex-col shadow rounded-[10px]">
                <div class="flex justify-end py-2">
                  <!--                Search bar-->
                  <select class="border-2 border-blue-400 rounded-2xl px-2 py-1 w-1/3 mr-2">
                    <option v-for="dropdownOption in dropdownOptions">{{dropdownOption.label}}</option>
                  </select>
                </div>
                <div>
                <Bar
                    id="my-chart-id"
                    :options="chartOptions1"
                    :data="chartData1"
                    style="width:100%;height: 400px; padding:1em; background-color: white;border-radius: 10px;"
                />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="flex flex-col bg-white rounded-2xl ">
        <div class="flex text-2xl font-bold justify-center mt-2">Occupancy Analytics</div>
        <div class="flex flex-col mt-2">
          <div class="flex text-lg font-semibold justify-center mt-2">Current Status</div>
          <div class="flex justify-center px-3 gap-4">
            <div class="flex flex-col border-2 border-blue-400  px-2 py-2 rounded-2xl mb-2">
              <div class="flex justify-center text-lg font-bold">Reserved Slots</div>
              <div class="flex justify-center text-3xl font-bold text-secondary">28/50</div>
            </div>
            <div class="flex flex-col border-2 border-blue-400  px-2 py-2 rounded-2xl mb-2">
              <div class="flex justify-center text-lg font-bold">Cars/Lorries</div>
              <div class="flex justify-center text-3xl font-bold">20</div>
            </div>
            <div class="flex flex-col border-2 border-blue-400  px-2 py-2 rounded-2xl mb-2">
              <div class="flex justify-center text-lg font-bold">Motor Bikes</div>
              <div class="flex justify-center text-3xl font-bold">8</div>
            </div>
          </div>
        </div>
        <div class="w-[100%] mt-2 ">
          <div class="flex flex-col shadow rounded-[10px] mx-2 my-2 h-[400px]">
          <div class="flex justify-end py-2">
            <!--                Search bar-->
            <select class="border-2 border-blue-400 rounded-2xl px-2 py-1 w-1/4 mr-2">
              <option v-for="dropdownOption in dropdownOptions2">{{dropdownOption.label}}</option>
            </select>
          </div>
          <div class="text-center text-lg font-semibold mt-2">Slot Reservation of Last week</div>
          <div class="flex gap-4 px-5">
          <div class="flex justify-center items-center w-2/3">
            <n-table :bordered="false" :single-line="false">
            <thead>
            <tr class="text-center">
              <th>Week Day</th>
              <th># Slots Occupied</th>
              <th># Cars</th>
              <th>#Bikes</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center">
              <td>Monday</td>
              <td>14</td>
              <td>10</td>
              <td>4</td>
            </tr>
            <tr class="text-center">
              <td>Tuesday</td>
              <td>14</td>
              <td>10</td>
              <td>4</td>
            </tr>
            <tr class="text-center">
              <td>Wednesday</td>
              <td>14</td>
              <td>10</td>
              <td>4</td>
            </tr>
            <tr class="text-center">
              <td>Thursday</td>
              <td>14</td>
              <td>10</td>
              <td>4</td>
            </tr>
            <tr class="text-center">
              <td>Friday</td>
              <td>14</td>
              <td>10</td>
              <td>4</td>
            </tr>
            </tbody>
          </n-table>
          </div>
          <div class="flex flex-col border-2 border-blue-400 px-2 py-2 rounded-2xl my-2 h-2/3 w-1/3">
            <div class="flex text-center text-lg font-bold">Average Occupancy</div>
            <div class="flex justify-center text-3xl font-bold text-secondary">26/50</div>
          </div>
          </div>
          </div>
          <div class="flex flex-col mx-2 mt-5 shadow rounded-[10px]  ">
            <div class="flex justify-end py-2">
              <!--                Search bar-->
              <select class="border-2 border-blue-400 rounded-2xl px-2 py-1 w-1/4 mr-2">
                <option v-for="dropdownOption in dropdownOptions3">{{dropdownOption.label}}</option>
              </select>
            </div>
            <!--          <div class="text-center text-lg font-semibold mb-2">Peak hours of last week</div>-->
            <div class="flex  flex-col justify-center items-center ">
              <Bar
                  id="my-chart-id"
                  :options="chartOptions3"
                  :data="chartData3"
                  style="width:100%;height: 400px; padding:1em; background-color: white;border-radius: 10px;"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  </ParkOwnerLayout>
</template>

<style scoped>

</style>