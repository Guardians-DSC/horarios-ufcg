<template>
  <div id="app">
    <Navbar :aulas='this.$store.getters.getAulas'/>
    <Filtro/>
    <dir class="container-table">
      <Tabela/>
    </dir>
  </div>
</template>

<script>
import Tabela from './components/Tabela.vue'
import Navbar from './components/Navbar.vue'
import Filtro from './components/Filtro.vue'
export default {
  name: 'app',
  components: {
    Tabela,
    Navbar,
    Filtro
  }
}
</script>

<style>
html, body { margin: 0; }
#app {
  margin: 0px 0px 0px 0px;
  padding: 0;
  font-family: sans-serif;
  background-color: white;
}

.container-table {
  margin-top: 30px;
  padding: 0;
  width: 100%;
  overflow-x:auto;
}
</style>
