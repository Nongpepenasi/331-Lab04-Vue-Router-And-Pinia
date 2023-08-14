<script setup lang="ts">
import { type PassengerItem } from '@/type'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
import NProgress from 'nprogress'

const props = defineProps({
  passenger: {
    type: Object as PropType<PassengerItem>,
    require: true
  }
})
const router = useRouter()
const store = useMessageStore()
function edit() {
  NProgress.start()
  store.updateMessage('The update is in progress...')
  setTimeout(() => {
    store.resetMessage()
    NProgress.done()
    router.push({
    name: 'passenger-list',
    params: {
      id: props.passenger?.id
    }
  })
  }, 5000)
}
</script>
<template>
  <p>Edit the passenger-detail here</p>
  <button @click="edit">Edit Me</button>
</template>
