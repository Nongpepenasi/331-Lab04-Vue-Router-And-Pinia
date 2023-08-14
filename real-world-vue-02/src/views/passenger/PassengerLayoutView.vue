<script setup lang="ts">
import { usePassengerStore } from '@/stores/passenger';
import { useAirlineStore } from '@/stores/passenger';
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = usePassengerStore()
const store2 = useAirlineStore()
const passenger = storeToRefs(store).passenger
const airline = storeToRefs(store2).airline
const id = ref(passenger.value?.id)
  
</script>

<template>
  <div v-if="passenger">
    <h1>{{ passenger.first_name }} {{ passenger.last_name }}</h1>
    <div id="nav">
        <RouterLink :to="{name: 'passenger-detail', params: { id }}">Details</RouterLink> 
        |
        <RouterLink :to="{name: 'passenger-airline', params: { id }}">Airline</RouterLink> 
        |
        <RouterLink :to="{name: 'passenger-register', params: { id }}">Register</RouterLink> 
        |
        <RouterLink :to="{name: 'passenger-edit', params: { id }}">Edit</RouterLink> 
    </div>
    <RouterView :passenger="passenger" :airline="airline"></RouterView>
  </div>
</template>
