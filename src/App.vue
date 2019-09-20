<template>
  <div id="app">
    <!-- <navbar/> -->
    <Horario hora='08'></Horario>
    <Horario hora='10'></Horario>
    <Horario hora='14'></Horario>
    <Horario hora='16'></Horario>
  </div>
</template>

<script>

import Horario from './components/Horario.vue';
export default {
  name: 'app',
  components: {
    Horario
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

div#app div.horario:nth-child(even) { background: white; }
div#app div.horario:nth-child(odd) { background: #EEEEEE; }
</style>
