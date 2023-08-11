<script setup lang = "ts">
import ParkOwnerLayout from "@/layouts/ParkOwnerLayout.vue";
import {Bar, Line} from "vue-chartjs";
import {ref} from "vue";
import {NTable} from "naive-ui";
import {onMounted} from "vue";

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
  labels: ["Thimbirasyaya","Robert Drive","Millenium","UOC","Francis","Sapugaskanda","Sun view"],
  datasets: [
    {
      data: [20,14,13.2,10.5,11.2,9.5,7.1],
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
        text: 'Parking Places',
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
        text: 'Occupied Slots',
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
      text: 'Occupancy of parking places last week',
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
  labels: ["Online","Onsite"],
  datasets: [
    {
      data: [200,120],
      backgroundColor: ['#1965f1','#a919f1'],
      borderRadius: 10,
    }
  ],
})

const chartOptions3= ref({
  chart:{
    width:100,
    height:100,
  },
  title:"Visualization of payment methods"
})

const chartData4 = ref({
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

const chartOptions4 = ref({
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

const columns = ref([
  {
    title:'Type',
    key:'type',
    width:100
  },
  {
    title: 'Date',
    key: 'date',
    width: 100
  },
  {
    title: 'Time',
    key: 'time',
    width: 100
  },
  {
    title: 'Amount',
    key: 'amount',
    width: 100
  },
  {
    title: 'Status',
    key: 'status',
    width: 100
  },
  {
    title: 'Expect Payment',
    key: 'expectPayment',
    width: 100
  }
])

const datas= ref([
  {
    type:'PayHere',
    date:'2021/09/20',
    ID:'T000123',
    amount:'1000.00',
    status:'Success',
    expectPayment:'2021/09/25'
  },
  {
    type:'Peoples bank',
    date:'2021/09/20',
    ID:'10:00',
    amount:'1000.00',
    status:'On hold',
    expectPayment:'2021/09/25'
  },
  {
    type:'PayHere',
    date:'2021/09/20',
    ID:'10:00',
    amount:'1000.00',
    status:'Success',
    expectPayment:'2021/09/25'
  },
  {
    type: 'Peoples bank',
    date: '2021/09/20',
    ID: '10:00',
    amount: '1000.00',
    status: 'In Progress',
    expectPayment: '2021/09/25'

  }
])

onMounted(() => {

})

</script>
<template>
  <ParkOwnerLayout>
    <div class="flex flex-col h-full mt-4 mx-4">
      <div class="flex justify-evenly">
        <div class="py-2 bg-white rounded-xl shadow flex flex-col items-center w-[20%] justify-center">
          <img src="../../assets/images/parking.png" alt="" class="w-12 h-12">
          <div class="text-4xl font-bold">300</div>
          <div class="mt-2 font-semibold text-lg text-center">Total Parking Spaces in <br> 30 parking spots</div>
        </div>
        <div class="py-2 bg-white rounded-xl shadow flex flex-col items-center w-[20%] justify-center">
          <img src="../../assets/images/occupied.png" alt="" class="w-12 h-12">
          <div class="text-4xl font-bold">200</div>
          <div class="mt-2 font-semibold text-lg text-center">Occupied Spaces</div>
        </div>
        <div class="py-2 bg-white rounded-xl shadow flex flex-col items-center w-[20%] justify-center">
          <img src="../../assets/images/revenue.png" alt="" class="w-12 h-12">
          <div class="text-4xl font-bold text-green-400">$200</div>
          <div class="mt-2 font-semibold text-lg text-center">Today Revenue</div>
        </div>
        <div class="py-2 bg-white rounded-xl shadow flex flex-col items-center w-[20%] justify-center">
          <img src="../../assets/icons/ratio.png" alt="" class="w-12 h-12">
          <div class="text-4xl font-bold">60%</div>
          <div class="mt-2 font-semibold text-lg text-center">Average occupany rate in <br>last week</div>
        </div>
      </div>
      <div class="w-full flex justify-between mt-5">
        <div class="w-[49%] shadow rounded-[10px]">
          <Line
              id="chart1"
              :options="chartOptions1"
              :data="chartData1"
              style="width: 100%;height: 400px; padding:1em; background-color: white;border-radius: 10px;"
          />
        </div>

        <div class="w-[49%] shadow rounded-[10px]">
          <Bar
              id="chart2"
              :options="chartOptions2"
              :data="chartData2"
              style="width: 100%;height: 400px; padding:1em; background-color: white;border-radius: 10px;"
          />
        </div>
      </div>
      <div class="flex justify-between h-[300px]">
        <div class="flex flex-col bg-white rounded-2xl shadow-blue-200 mt-6 px-3 h-[320px]">
          <h1 class="text-xl font-bold mt-2">Recent Transactions</h1>
          <div class="mt-2">
            <n-table :bordered="true" :single-line="false" class="w-full">
              <thead>
              <tr class="text-center">
                <th v-for="column in columns">{{column.title}}</th>
              </tr>
              </thead>
              <tbody>
              <tr class="text-center" v-for="data in datas">
                <td>{{data.type}}</td>
                <td>{{data.date}}</td>
                <td>{{data.ID}}</td>
                <td>{{data.amount}}</td>
                <td>
                  <div class="flex justify-center items-center">
                    <div class="rounded-xl h-fit px-2 py-1 w-[100px]" :class="data.status=='Success'? 'bg-green-200':data.status=='On hold'?'bg-red-200':'bg-blue-200'">
                      {{data.status}}
                    </div>
                  </div>
                </td>
                <td>{{data.expectPayment}}</td>
              </tr>
              </tbody>
            </n-table>
          </div>
        </div>
        <div class="flex flex-col bg-white rounded-2xl shadow-blue-200 mt-6 px-3 w-[49%] shadow h-[320px]">
          <div class="flex flex-col">
            <h1 class="text-xl font-bold mt-2">Review and Ratings</h1>
            <div class="flex ">
              <div class="w-[88%] h-[100%] px-4">
                <Bar
                    id="chart4"
                    :options="chartOptions4"
                    :data="chartData4"
                    style="background-color:white;border-radius: 5px;"
                />
              </div>
              <div class="mt-4">
                <div class="text-md font-semibold mb-1">53%</div>
                <div class="text-md font-semibold mb-1">37%</div>
                <div class="text-md font-semibold mb-1">5%</div>
                <div class="text-md font-semibold mb-1">3.4%</div>
                <div class="text-md font-semibold">1.6%</div>
              </div>
            </div>
            <div>
              <h1 class="text-xl">Most rated parking place</h1>
              <div class="flex gap-4">
                <div>
                  <img src="../../assets/images/parking_place2.jpg" style="height: 100px;width:250px;border-radius: 5%">
                </div>
                <div>
                  <h1 class="text-xl">Thimbirigasya Car park</h1>
                  <div class="flex flex-between gap-3">
                    <div class="text-primary text-center text-2xl">5.0</div>
                    <div>
                      <div class="flex gap-1 mb-1">
                        <img src="../../assets/icons/star.svg" style="height: 25px;width: 25px">
                        <img src="../../assets/icons/star.svg" style="height: 25px;width: 25px">
                        <img src="../../assets/icons/star.svg" style="height: 25px;width: 25px">
                        <img src="../../assets/icons/star.svg" style="height: 25px;width: 25px">
                        <img src="../../assets/icons/star.svg" style="height: 25px;width: 25px">
                      </div>
                      Based on 100 reviews
                    </div>
                  </div>

            </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>

  </ParkOwnerLayout>

</template>



