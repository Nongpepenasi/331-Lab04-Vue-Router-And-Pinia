<script setup lang="ts">
// import {ref} from 'vue'
// import type {Ref} from 'vue'
import type {EventItem} from '@/type'
// import EventService from '@/services/EventService'
import type { PropType } from 'vue'

// const event = ref<EventItem | null>(null)
defineProps({
    event: {
        type: Object as PropType<EventItem>,
        require: true
    }
})

</script>
<template>
    <div v-if="event">
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>