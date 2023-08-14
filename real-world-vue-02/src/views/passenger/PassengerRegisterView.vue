<script setup lang="ts">
import { type PassengerItem } from '@/type'
import type { PropType } from 'vue'

defineProps({
  passenger: {
    type: Object as PropType<PassengerItem>,
    require: true
  }
})
</script>
<template>
  <p>Registration from here</p>
</template>
