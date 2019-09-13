<template>
  <div id="app">
    <navbar/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  margin: 0px 0px 0px 0px;
  padding: 0;
}
</style>
