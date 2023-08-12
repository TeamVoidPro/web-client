<template>
  <n-card>
    <div class="flex justify-between items-center">
      <n-checkbox v-model:checked="value"/>
      <div class="px-3 py-0.5  rounded-xl border " :class="[status === 'Pending' ? 'text-yellow-600 bg-yellow-100 border-yellow-600' : 'bg-green-100 text-green-600 border-green-600']">{{status}}</div>
    </div>
    <div class="flex flex-col items-center justify-center mt-3 text-center">
      <img src="../../assets/images/user2.jpg" alt=""
        class="w-24 h-24 rounded-full object-cover">
      <div class="text-xl font-semibold">{{ props.employee.firstName }} {{props.employee.lastName}}</div>
      <div class="text">Parking {{props.employee.role}}</div>
    </div>
    <div class="p-2 bg-gray-100 mt-2">
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xs font-semibold">Employee ID</div>
          <div class="text-xs">{{props.employee.employeeId}}</div>
        </div>
        <div>
          <div class="text-xs font-semibold">Date Hired</div>
          <div class="text-xs">{{props.employee.accountCreatedAt.split('T')[0]}}</div>
        </div>
      </div>
      <div class="mt-3">
        <div class="flex flex-col space-y-1">
          <div class="flex items-center gap-2">
            <EmailIcon class="w-4 h-4"/>
            <div>{{props.employee.email}}</div>
          </div>
          <div class="flex items-center gap-2">
            <PhoneIcon class="w-4 h-4"/>
            <div>+94 {{props.employee.contactNumber.slice(1,3)}} {{props.employee.contactNumber.slice(3,5)}} {{props.employee.contactNumber.slice(5,7)}} {{props.employee.contactNumber.slice(7,10)}}</div>
          </div>
        </div>
      </div>
    </div>
  </n-card>
</template>

<style scoped>
.n-card {
  max-width: 260px;
}

.n-card__content{
  padding: 10px !important;
}

</style>

<script setup lang="ts">
import { ref } from "vue";
import EmailIcon from "../../assets/icons/EmailIcon.vue";
import PhoneIcon from "../../assets/icons/PhoneIcon.vue";
import {NCard, NCheckbox} from "naive-ui";

const value = ref(false);
const props = defineProps<{
  employee: object;
}>();

const status = ref("");

if(props.employee.isActivated){
  status.value = 'Activated';
}else{
  status.value = 'Pending';
}

</script>
