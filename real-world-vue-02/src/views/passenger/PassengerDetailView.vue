<script setup lang="ts">
import type {PassengerItem, AirlineItem} from '@/type'
import type { PropType } from 'vue'
import { ref, computed } from 'vue';

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
    <div v-if="passenger">
        <p>{{ passenger.first_name }} {{ passenger.last_name }}</p>
        <p>{{ passenger.email }}</p>
        <p>From <b>{{ passenger.Source }}</b> to <b>{{ passenger.Destination }}</b>
        on {{ passenger.travelDate }}</p>
        <p> <b>{{ airline?.AirlineName }}</b> </p>
    </div>
</template>