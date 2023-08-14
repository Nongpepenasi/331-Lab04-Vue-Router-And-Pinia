<script setup lang="ts">
import Category from '../components/Category.vue'
// import { events } from '@/events';
import type { EventItem } from '@/type'
import { ref, type Ref} from 'vue'
import EventService from '@/services/EventService'

const events: Ref<Array<EventItem>> = ref([])
  
  EventService.getEvent().then((response) => {
    events.value = response.data
    console.log(events.value)
  })
</script>

<template>
  <div class="category">
    <h1>This is a categories page</h1>
    <!-- <Category></Category> -->
    <div class="category">
      <Category v-for="event in events" :key="event.id" :event="event"></Category>
    </div>
  </div>
</template>

<style>
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
}
</style>@/stores/EventService