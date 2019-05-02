<template>
  <div class="dia">
    <h2>{{dia}}</h2>
    <div class="horarios">
      <Horario hora='08' :aulas='aulas_08'/>
      <Horario hora='10' :aulas='aulas_10'/>
      <Horario hora='14' :aulas='aulas_14'/>
      <Horario hora='16' :aulas='aulas_16'/>
    </div>  
  </div>
</template>

<script>
import Horario from './Horario.vue';
import { log } from 'util';
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
    background: skyblue;
    border-radius: 10px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }

  div.dia h2 {
    background: deepskyblue;
    color: white;
    margin: 0;
    padding: 10px 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
</style>
