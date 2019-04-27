<template>
  <div class="horario">
    <h4>{{hora}} horas</h4>
    <div class="aulas">
      <Aula v-for="(aula, index) in aulas" :key="index" :aula='aula' v-show='aula.horario.hora == hora'></Aula>
    </div>
  </div>
</template>

<script>
import Aula from './Aula.vue';
export default {
  name: 'horario',
  props: ['hora', 'aulas'],
  components: {
    Aula
  }
}
</script>

<style>
  .horario {
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding-bottom: 10px;
  }

  .horario h4 {
    margin: 0;
    padding: 5px 0;
    background: rgba(0, 0, 0, 0.4);
    color: white;
  }

  .aulas {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    color: white;
    font-weight: bold;
    flex-wrap: wrap;
  }
</style>
