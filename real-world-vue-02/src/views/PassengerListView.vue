<script setup lang="ts">
import PassengerCard from '../components/PassengerCard.vue'
import type { PassengerItem } from '@/type';
import PassengerService from '@/services/PassengerService'
import type { AxiosResponse } from 'axios';
import { ref, type Ref, watchEffect, computed } from 'vue'

const passengers: Ref<Array<PassengerItem>> = ref([])
const totalPassenger = ref<number>(29)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const pageSize = ref(5) //Defualt page size

watchEffect (() => {
  PassengerService.getPassenger(pageSize.value, props.page)
  .then((response: AxiosResponse<PassengerItem[]>) => {
    passengers.value = response.data
    totalPassenger.value = response.headers['x-total-count']
  })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalPassenger.value / pageSize.value)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <h1>Event For Good</h1>
  <div class="pageSize">
    <label for="page-size">Page Size:</label>
    <input
      type="number"
      id="page-size"
      v-model="pageSize"
      @input="updatePage"
      min="1"
      :max="totalPassenger"
    />
  </div>
  <main class="events">
    <PassengerCard v-for="passenger in passengers" :key="passenger.id" :passenger="passenger"></PassengerCard>

    <div class="pagination">
      <RouterLink :to="{name: 'passenger-list', query: {page: page - 1}}" 
    rel="prev" v-if="page != 1" id="page-prev">
    Prev Page
    </RouterLink>  
    <RouterLink :to="{name: 'passenger-list', query: {page: page + 1}}" 
    rel="next" v-if="hasNextPage" id="page-next">
    Next Page
    </RouterLink>
    </div>
    
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
.pageSize{
  padding: 0 0 20px 0;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
