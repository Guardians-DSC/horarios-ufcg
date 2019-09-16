<template>
  <div id="app">
    <navbar/>
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
#app {
  margin: 0px;
  padding: 0px;
}
</style>
