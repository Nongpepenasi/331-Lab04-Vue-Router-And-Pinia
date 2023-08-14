<script setup lang="ts">
import type { PropType } from 'vue'
import { type AirlineItem, type PassengerItem } from '@/type'

defineProps({
  passenger: {
    type: Object as PropType<PassengerItem>,
    require: true
  },
  airline: {
    type: Object as PropType<AirlineItem>,
    require: true
  }
})
</script>

<template>
  <div v-if="airline">
    <div class="container">
      <div class="airline-body">
        <p><span>AirlineId:</span> {{ airline?.id }}</p>
        <p><span>AirlineName:</span> {{ airline?.AirlineName }}</p>
        <p><span>Email:</span> {{ airline?.email }}</p>
        <p><span>Address:</span> {{ airline?.address }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.airline-body {
  line-height: 36pt;
}
span {
  font-weight: bold;
}
</style>
