<template>
  <AdminLayout>

    <div>
      <div class="w-full flex justify-between">
        <div class="bg-white p-3 w-[20%] rounded-lg shadow flex flex-col items-center justify-center space-y-2">
          <div class="text-4xl font-semibold text-blue-600">37</div>
          <div class="text-xl">Total Parking Places</div>
        </div>
        <div class="bg-white p-3 w-[20%] rounded-lg shadow flex flex-col items-center justify-center space-y-2">
          <div class="text-4xl font-semibold text-blue-600">248</div>
          <div class="text-xl">Total Reservations</div>
          <div class="flex gap-3 items-center mt-2">
            <img src="../../assets/images/fast-forward-double-right-arrows-symbol.png" alt="" class="w-5 h-5">
            <div>For Today</div>
          </div>
        </div>
        <div class="bg-white p-3 w-[20%] rounded-lg shadow flex flex-col items-center justify-center space-y-2">
          <div class="text-3xl font-semibold text-blue-600">Rs 39850.00</div>
          <div class="text-xl">Total Income</div>
          <div class="flex gap-3 items-center mt-2">
            <img src="../../assets/images/fast-forward-double-right-arrows-symbol.png" alt="" class="w-5 h-5">
            <div>For Today</div>
          </div>
        </div>
        <div class="bg-white p-3 w-[20%] rounded-lg shadow flex flex-col items-center justify-center space-y-2">
          <div class="text-4xl font-semibold text-blue-600">42</div>
          <div class="text-xl">Drivers Registered</div>
          <div class="flex gap-3 items-center mt-2">
            <img src="../../assets/images/fast-forward-double-right-arrows-symbol.png" alt="" class="w-5 h-5">
            <div>Today</div>
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

        <div class="w-[49%] shadow rounded-[10px] bg-white p-3 text-center">
          <div class="text-lg font-semibold">Top performing parking places</div>
            <div class="w-[100%] mt-3">
              <n-table :bordered="false" :single-line="false">
                <thead>
                <tr class="text-center">
                  <th>#</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Revenue (Rs)</th>
                  <th>More</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>PARK_1234_1235</td>
                  <td>UCSC Parking</td>
                  <td>Rs 10450.00</td>
                  <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>PARK_1234_1235</td>
                  <td>UCSC Parking</td>
                  <td>Rs 10450.00</td>
                  <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>PARK_1234_1235</td>
                  <td>UCSC Parking</td>
                  <td>Rs 10450.00</td>
                  <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>PARK_1234_1235</td>
                  <td>UCSC Parking</td>
                  <td>Rs 10450.00</td>
                  <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>PARK_1234_1235</td>
                  <td>UCSC Parking</td>
                  <td>Rs 10450.00</td>
                  <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
                </tr>

                </tbody>
              </n-table>
            </div>
          </div>
      </div>
      <div class="w-full flex justify-between mt-5">
        <div class="w-[49%] shadow rounded-[10px]">
          <Bar
              id="my-chart-id"
              :options="chartOptions2"
              :data="chartData2"
              style="width: 100%;height: 400px; padding:1em; background-color: white;border-radius: 10px;"
          />
        </div>

        <div class="w-[49%] shadow rounded-[10px] bg-white p-3 text-center">
          <div class="text-lg font-semibold">Pending compliance monitoring reports</div>
          <div class="w-[100%] mt-3 max-h-[24em] overflow-auto scroll-bar-w-sm">
            <n-table :bordered="false" :single-line="false">
              <thead>
              <tr class="text-center">
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th>Verifier</th>
                <th>More</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>PARK_1234_1235</td>
                <td>Pearl Park Parking</td>
                <td>Akila Santhush</td>
                <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
              </tr>
              <tr>
                <td>1</td>
                <td>PARK_1234_1235</td>
                <td>Pearl Park Parking</td>
                <td>Akila Santhush</td>
                <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
              </tr>
              <tr>
                <td>1</td>
                <td>PARK_1234_1235</td>
                <td>Pearl Park Parking</td>
                <td>Akila Santhush</td>
                <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
              </tr>
              <tr>
                <td>1</td>
                <td>PARK_1234_1235</td>
                <td>Pearl Park Parking</td>
                <td>Akila Santhush</td>
                <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
              </tr>
              <tr>
                <td>1</td>
                <td>PARK_1234_1235</td>
                <td>Pearl Park Parking</td>
                <td>Akila Santhush</td>
                <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
              </tr>
              <tr>
                <td>1</td>
                <td>PARK_1234_1235</td>
                <td>Pearl Park Parking</td>
                <td>Akila Santhush</td>
                <td class="flex justify-center"><InfoIcon class="w-8 h-8 text-blue-700"/></td>
              </tr>

              </tbody>
            </n-table>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>

</template>

<script setup lang="ts">
  import AdminLayout from "@layouts/AdminLayout.vue";
  import {Bar,Line} from "vue-chartjs";
  import {ref} from "vue";
  import { Chart as ChartJS,RadialLinearScale,PointElement,LineElement,Filler, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
  import InfoIcon from "@assets/icons/InfoIcon.vue";

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,Filler,LineElement,PointElement,RadialLinearScale)

  const chartData1 = ref({
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    datasets: [
      {
        data: [100.5,130,105.2,97,100,90,121.8,101.3,83.4,88.2,97.1,96,132,131,134],
        borderWidth: 2,
        borderColor: '#a9afec',
        backgroundColor: '#212980',
        pointRadius: 4,
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
        text: 'Total income per day for last 15 days',
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
        data: [84,112,38,80,54,69,55,54,75,65,45,78,65,45,78],
        barThickness: 10,
        backgroundColor: '#ae61f8',
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
          text: 'Number of drivers',
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
        text: 'Total number of drivers registered per day for last 15 days',
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