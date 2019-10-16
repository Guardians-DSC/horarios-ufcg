<template>
  <div id="app">
    <Navbar/>
    <dir class="container-table">
      <Tabela/>
    </dir>
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
  background-color: white;
}

.container-table{
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x:auto;
}
</style>
