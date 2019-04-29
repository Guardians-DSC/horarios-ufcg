<template>
  <div class="dia">
    <h2>{{dia}}</h2>
    <div class="horarios">
      <Horario hora='08' :aulas='aulas'/>
      <Horario hora='10' :aulas='aulas'/>
      <Horario hora='14' :aulas='aulas'/>
      <Horario hora='16' :aulas='aulas'/>
    </div>  
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
  data() {
    let { aulas8, aulas10 } = this.aulas;
    return {
      aulas8,
      aulas10
    }
  },

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
