<script setup lang="ts" xmlns="http://www.w3.org/1999/html">

import ParkOwnerLayout from "@layouts/ParkOwnerLayout.vue";
import MaterialSymbolsSettingsApplicationsOutlineSharp from "@assets/icons/SettingsIcon.vue";
import Button from "@components/Button.vue";
import RiMoneyDollarBoxLine from "@assets/icons/PaymentsIcon.vue";
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
                <select class="border-2 border-blue-200 rounded-xl px-2 py-2">
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
                <select class="border-2 border-blue-200 rounded-xl px-2 py-2">
                  <option>Today</option>
                  <option>Yesterday</option>
                  <option>Last Week</option>
                  <option>Last Month</option>
                </select>
              </div>
              <div class="flex justify-evenly">
                <div class="flex-col justify-center items-center px-2 py-2 ">
                  <h1 class="text-xl text-center">Transactions</h1>
                  <h1 class="text-2xl text-center font-bold">20</h1>
                </div>
                <div class="flex-col justify-center items-center px-2 py-2 border-l-2 border-blue-200">
                  <h1 class="text-xl text-center">Joined Peoples</h1>
                  <img src="../../assets/images/bunch%20of%20faces.jpeg" class="ml-4" style="height: 80px;width: 100px">
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
      <div class="flex flex-col bg-white rounded-2xl ml-4 mr-4 px-2 py-2 mt-4  mb-2 h-[416px] w-[1350px]">
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
        <div>
          <n-table :bordered="true" :single-line="false" class="w-fit">
            <thead>
            <tr class="text-center">
              <th>Type</th>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Expect Payment</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center">
              <td>Paypal</td>
              <td>May 18,2022</td>
              <td>T000123</td>
              <td>800</td>
              <td>
                <div class="flex justify-center items-center">
                  <div class="bg-green-400 rounded-xl h-fit px-2 py-1 w-[100px]">
                    Success
                  </div>
                </div>
              </td>
              <td>May 18,2022</td>
            </tr>
            <tr class="text-center">
              <td>Paypal</td>
              <td>May 18,2022</td>
              <td>T000123</td>
              <td>800</td>
              <td>
                <div class="flex justify-center items-center">
                  <div class="bg-red-400 rounded-xl h-fit px-2 py-1 w-[100px]">
                    On hold
                  </div>
                </div>
              </td>
              <td>May 18,2022</td>
            </tr>
            <tr class="text-center">
              <td>Paypal</td>
              <td>May 18,2022</td>
              <td>T000123</td>
              <td>800</td>
              <td>
                <div class="flex justify-center items-center">
                  <div class="bg-green-400 rounded-xl h-fit px-2 py-1 w-[100px]">
                    Success
                  </div>
                </div>
              </td>
              <td>May 18,2022</td>
            </tr>
            <tr class="text-center">
              <td>Paypal</td>
              <td>May 18,2022</td>
              <td>T000123</td>
              <td>800</td>
              <td>
                <div class="flex justify-center items-center">
                  <div class="bg-blue-400 rounded-xl h-fit px-2 py-1 w-[100px]">
                    In process
                  </div>
                </div>
              </td>
              <td>May 18,2022</td>
            </tr>
            <tr class="text-center">
              <td>Paypal</td>
              <td>May 18,2022</td>
              <td>T000123</td>
              <td>800</td>
              <td>
                <div class="flex justify-center items-center">
                  <div class="bg-green-400 rounded-xl h-fit px-2 py-1 w-[100px]">
                    Success
                  </div>
                </div>
              </td>
              <td>May 18,2022</td>
            </tr>
            </tbody>
          </n-table>
        </div>
        <div>

        </div>
      </div>
    </div>

  </ParkOwnerLayout>
</template>

<style scoped>

</style>