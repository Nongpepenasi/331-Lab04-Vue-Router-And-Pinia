<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
// import { events } from '@/events';
import EventCard from '../components/EventCard.vue'
import type { EventItem } from '@/type'
// import { ref, type Ref } from 'vue'
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios';
import { ref, type Ref, watchEffect, computed } from 'vue'

const events: Ref<Array<EventItem>> = ref([])
  const totalEvent = ref<number>(10)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const pageSize = ref(2) //Defualt page size

// const pageSize = document.getElementById("pageSize");

// EventService.getEvent(2, props.page)
// .then((response: AxiosResponse<EventItem[]>) => {
//   events.value = response.data
// })

watchEffect (() => {
  EventService.getEvent(pageSize.value, props.page)
  .then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']
  })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / pageSize.value)
  // console.log("Total Pages: "+totalPages);
  // console.log("Total Event: "+totalEvent.value);
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
      :max="totalEvent"
    />
  </div>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>

    <div class="pagination">
      <RouterLink :to="{name: 'event-list', query: {page: page - 1}}" 
    rel="prev" v-if="page != 1" id="page-prev">
    Prev Page
    </RouterLink>  
    <RouterLink :to="{name: 'event-list', query: {page: page + 1}}" 
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
