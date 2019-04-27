<template>
  <div id="app">
    <Tabela/>
  </div>
</template>

<script>

import Tabela from './components/Tabela.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld    
    Tabela
  }
}
</script>

<style>
html, body { margin: 0; padding: 0; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #FaFaFa;
  color: #2c3e50;
  padding: 40px;
}
</style>
