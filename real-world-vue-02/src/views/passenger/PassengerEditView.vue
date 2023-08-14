<script setup lang="ts">
import { type PassengerItem } from '@/type'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';

const props = defineProps({
  passenger: {
    type: Object as PropType<PassengerItem>,
    require: true
  }
})
const router = useRouter()
const store = useMessageStore()
function edit() {
  store.updateMessage('You are successfully edited for ' + props.passenger?.first_name)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({
    name: 'passenger-detail',
    params: {
      id: props.passenger?.id
    }
  })
}
</script>
<template>
  <p>Edit the passenger-detail here</p>
  <button @click="edit">Edit Me</button>
</template>
