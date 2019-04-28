<template>
  <div class="aula" @click="showDetails = !showDetails">
    <span>{{aula.disciplina}}-{{aula.turma}}</span>
    <Details v-if="showDetails == true" :aula='aula'> </Details>
  </div>
     
     
</template>

<script>
import Details from './Details.vue'

export default {
  name: 'aula',
  props: ['aula'],
  components:{
    Details
  },
  data (){
    return {
      showDetails: false
    }
  }
}
</script>

<style>
  .aula {
    padding: 3px 7px;
    background: greenyellow;
    border-radius: 10px;
    margin-right: 4px;
    margin-bottom: 6px;
    flex-grow: 1; 
  }
</style>
