<template>
  <div class="aulas">
    <Aula v-for="(aula, index) in aulas" :key="index" :aula='aula'></Aula>
  </div>
</template>

<script>
import Aula from './Aula.vue';
export default {
  name: 'dia',
  props: ['aulas'],
  components: {
    Aula
  }
}
</script>
