<template>
  <div class="aulas">
    <div class="fa-3x loading" v-if="loading">
      <i class="fas fa-circle-notch fa-spin"></i>
    </div>
    
    <Aula v-for="(aula, index) in aulas" :key="index" :aula='aula'></Aula>
  </div>
</template>

<script>
import Aula from './Aula.vue';
export default {
  name: 'dia',
  props: ['aulas','loading'],
  components: {
    Aula
  }
}
</script>

<style scoped>
.loading {
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.aulas {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>

  