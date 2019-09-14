<template>
  <div class="dia">
    <h2>{{dia}}</h2>
    <Horario hora='08' :aulas='aulas_08'/>
    <Horario hora='10' :aulas='aulas_10'/>
    <Horario hora='14' :aulas='aulas_14'/>
    <Horario hora='16' :aulas='aulas_16'/>
  </div>
</template>

<script>
import Horario from './Horario.vue';
export default {
  name: 'dia',
  props: ['dia', 'aulas'],
  components: {
    Horario
  },
  computed: {
    aulas_08:function () {return this.aulas.filter(aula => aula.horario.hora === "08")},
    aulas_10:function () {return this.aulas.filter(aula => aula.horario.hora === "10")},
    aulas_14:function () {return this.aulas.filter(aula => aula.horario.hora === "14")},
    aulas_16:function () {return this.aulas.filter(aula => aula.horario.hora === "16")},
  }
}
</script>

<style>
  div.dia {
    min-height: 400px;
    height: 100%;
    display: grid;
    grid-template-rows: 50px repeat(4, 1fr);
    background: #7197E4;
    border-radius: 10px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }

  div.dia h2 {
    background: #324B9A;
    color: white;
    margin: 0;
    padding: 10px 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
</style>
