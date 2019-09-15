<template>
  <div id="app">
    <navbar/>
    <Aula :aula="aula"/>
  </div>
</template>

<script>
import Aula from './components/Aula.vue'
export default {
  name: 'app',
  components: {
    Aula
  },
  data (){
    return {
      aula: {disciplina: "LEDA",
             sala: "404",
             turma: "t1",
             professor: "Teste",
             categoria: "teste"}
    }
  }
}
</script>

<style>
#app {
  margin: 0px 0px 0px 0px;
  padding: 0;
}
</style>
