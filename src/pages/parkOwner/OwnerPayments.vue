<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import {NTable,NIcon,NButton,NDropdown,NPagination} from "naive-ui";
import {ArrowDropDownFilled} from "@vicons/material";
import ParkOwnerLayout from "@layouts/ParkOwnerLayout.vue";
import Button from "@components/Button.vue";
import {ref} from "vue";

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
    type:'PayHere',
    date:'2021/09/20',
    ID:'10:00',
    amount:'1000.00',
    status:'In progress',
    expectPayment:'2021/09/25'
  },
  {
    type:'Peoples Bank',
    date:'2021/09/20',
    ID:'10:00',
    amount:'1000.00',
    status:'Success',
    expectPayment:'2021/09/25'
  }
])

const value= ref(null)
const options=[
        {
          label: "Today",
          value: '0',
          // disabled: true
        },
        {
          label: 'Yesterday',
          value: '1'
        },
        {
          label: 'Last week',
          value: '2'
        },
        {
          label: "Last Month",
          value: '3',
          // disabled: true
        }
]

const page= ref(1)


</script>

<template>
  <ParkOwnerLayout>
    <div class="flex flex-col w-full h-full">
      <div class="flex ">
        <div class="flex flex-col w-[900px] my-2 ">
          <div class="flex flex-col bg-white rounded-2xl ml-4 mr-2 px-2 py-2 my-2 h-[200px]">
            <div class="flex justify-between">
              <div class="text-xl font-bold">My Balance</div>
              <div class="flex gap-2">
                <h1 class="text-lg text-center align-middle">Select Range</h1>
                <select class="border-2 border-blue-200 rounded-xl px-2 py-2 w-[90px]">
                  <option>Today</option>
                  <option>Yesterday</option>
                  <option>Last Week</option>
                  <option>Last Month</option>
                </select>
              </div>
            </div>
            <div class="flex justify-center items-center gap-2 mt-3">
              <div class="flex gap-4 border-2 border-blue-400 rounded-2xl w-[300px] py-2 px-2">
                <img src="../../assets/icons/money.png" class="justify-items-center align-middle " style="height:40px;width: 40px">
                <div>
                  <h1 class="text-md">Available balance</h1>
                  <h1 class="text-secondary text-2xl mb-2">Rs. 1000.00</h1>
                  <a href="" class="underline">View Transactions</a>
                </div>
                <div class="flex bg-green-400 rounded-xl h-fit px-2 py-1">
                  <img src="../../assets/icons/up-arrow-10.png" style="height: 10px;width: 10px">
                  <h1>2.0%</h1>
                </div>
              </div>
              <div class="flex gap-4 border-2 border-blue-400 rounded-2xl w-[300px] py-2 px-2">
                <img src="../../assets/icons/pendingmoney.png" style="height:40px;width: 40px">
                <div>
                  <h1 class="text-md">Pending balance</h1>
                  <h1 class="text-secondary text-2xl mb-2">Rs. 4000.00</h1>
                  <a href="" class="underline">View Transactions</a>
                </div>
                <div class="flex bg-red-400 rounded-xl h-fit px-2 py-1">
                  <img src="../../assets/icons/down-arrow.png" style="height: 10px;width: 10px">
                  <h1>4.0%</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="flex bg-white rounded-2xl ml-4 mr-2 px-2 py-2 my-2 h-[200px] justify-center items-center">
            <div class="flex gap-2 px-2 py-2">
              <div class="flex gap-3 justify-center items-center">
                <div>
                <h1 class="text-xl font-bold">Last</h1>
                <h1 class="text-xl font-bold">30 Days</h1>
                </div>
                <n-dropdown trigger="hover" :options="options">
                  <n-button class="border-none">
                    <n-icon size="40">
                      <arrow-dropDown-filled/>
                    </n-icon>
                  </n-button>
                </n-dropdown>
              </div>
              <div class="flex justify-evenly">
                <div class="justify-center items-center px-2 py-2 ">
                  <h1 class="text-xl text-center">Transactions</h1>
                  <h1 class="text-2xl text-center font-bold">20</h1>
                </div>
                <div class="flex-col justify-center items-center px-2 py-2 border-l-2 border-blue-200">
                  <h1 class="text-xl text-center">Joined Peoples</h1>
                  <div class="flex">
                    <div class=""><img src="../../assets/images/user.jpg" class="ml-4 rounded-[50%]" style="height: 35px;width: 35px"></div>
                    <div class=""><img src="../../assets/images/user.jpg" class="ml-4 rounded-[50%]" style="height: 35px;width: 35px"></div>
                    <div class=""><img src="../../assets/images/user.jpg" class="ml-4 rounded-[50%]" style="height: 35px;width: 35px"></div>
                  </div>
                </div>
                <div class="flex-col justify-center items-center px-2 py-2 border-l-2 border-blue-200">
                  <h1 class="text-xl text-center">Earnings</h1>
                  <h1 class="text-2xl text-center font-bold">2400.00</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col bg-white rounded-2xl ml-4 mr-2 px-2 py-2 mt-4  mb-2 h-[416px] w-[450px]">
          <div class="flex justify-between">
            <div class="text-xl font-bold">Withdraw</div>
            <button class="flex px-1 items-center">
            <img src="../../assets/icons/settings.png">
            </button>
          </div>
          <div class="flex flex-col justify-center items-center">
          <div class="flex justify-start items-center my-2 px-2 py-2 bg-blue-200 border-2 border-blue-200 w-1/2 rounded-xl">
            <img src="../../assets/icons/bank.png">
            <div class="flex flex-col ml-2">
              <h1>XXXX-2434</h1>
              <p> Peoples bank</p>
            </div>
          </div>
          <div class="flex justify-start items-center my-2 px-2 py-2 bg-blue-200 border-2 border-blue-200 w-1/2 rounded-xl">
            <img src="../../assets/icons/paypal.png">
            <div class="flex flex-col ml-2">
              <h1>abc@gmail.com</h1>
              <p> Payhere</p>
            </div>
          </div>
          </div>
          <div class="flex justify-center items-center mt-8">
            <Button>Withdraw Amount</Button>
          </div>
          <div class="text-xs text-center underline mt-4">
            you can easily transfer amount to any of the linked accounts
          </div>
        </div>
      </div>
      <div class="flex flex-col bg-white rounded-2xl ml-4 mr-4 px-2 py-2 mt-4  mb-2 h-[424px] w-[1350px]">
        <div class=" flex justify-between">
          <h1 class="text-xl font-bold">Transaction History</h1>
          <div class="flex gap-2">
            <h1 class="text-lg">Date range</h1>
            <select class="border-2 border-blue-200 rounded-xl px-2 py-2">
              <option>All</option>
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last Week</option>
              <option>Last Month</option>
            </select>
          </div>
        </div>
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
          <div> <n-pagination v-model:page="page" :page-count="10" class="justify-center my-2"/></div>
        </div>
      </div>
    </div>

  </ParkOwnerLayout>
</template>

<style scoped>

</style>