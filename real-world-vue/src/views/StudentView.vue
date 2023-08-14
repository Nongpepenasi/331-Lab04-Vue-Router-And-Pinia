<script setup lang="ts">
import Student from '../components/Student.vue'
// import { events } from '@/events';
import type { StudentItem } from '@/type'
import { ref, type Ref} from 'vue'
// import EventService from '@/services/EventService'
import StudentService from '@/services/StudentService'

const students: Ref<Array<StudentItem>> = ref([])
  
  StudentService.getStudent().then((response) => {
    students.value = response.data
    console.log(students.value)
  })
</script>

<template>
  <div class="student">
    <h1>This is a students page</h1>
    <!-- <Category></Category> -->
    <div class="student">
      <Student v-for="student in students" :key="student.id" :student="student"></Student>
    </div>
  </div>
</template>

<style>
.student {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}
</style>
