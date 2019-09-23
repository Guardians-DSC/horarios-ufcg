<template>
  <div id="app">
    <Navbar/>
    <Tabela/>
  </div>
</template>

<script>
import Tabela from './components/Tabela.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Tabela,
    Navbar
  }
}
</script>

<style>
html, body { margin: 0; }
#app {
  margin: 0px 0px 0px 0px;
  padding: 0;
  font-family: sans-serif;
}
</style>
