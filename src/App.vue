<template>
  <div id="app">
    <Navbar :aulas='this.$store.getters.getAulas'/>
    <div class="settigns">
      <Filtro/>
      <div id="alert">
        <h4>Os dados não estão atualizados com os horários para esse período!!</h4>
        <h5>Em alguns dias iremos fazer algumas alterações e assim atualizar com os dados corretos.</h5>
      </div>
    </div>
    
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

.settigns {
  display: flex;
  margin-top: 70px
}

.container-table {
  margin-top: 30px;
  padding: 0;
  width: 100%;
  overflow-x:auto;
}

#alert {
  display: inline-block; 
  margin: 0 10px 0 10px;
  width: 400px;
  background-color: red;
  color: white;
  border-radius: 10px;
  padding: 0 20px 0 20px;
}



</style>
