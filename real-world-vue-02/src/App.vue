<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message';
import { storeToRefs } from 'pinia';

const store = useMessageStore()
const { message } = storeToRefs(store)
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div id="flashMessage" v-if="message">
      <h4>{{ message }}</h4>
    </div>
    <nav>
      <RouterLink :to="{name: 'passenger-list'}">Home</RouterLink>
      <RouterLink :to="{name: 'about'}">About</RouterLink>
      <RouterLink :to="{name: 'category'}">Category</RouterLink>
      <RouterLink :to="{name: 'student'}">Student</RouterLink>
      <!-- <RouterLink :></RouterLink> -->
    </nav>

  </header>
  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h4 {
  font-size: 20px;
}

@keyframes yellowfade {
  from {
    background: rgb(255, 102, 0);
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation: yellowfade 5s ease-in-out;
}

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

</style>
