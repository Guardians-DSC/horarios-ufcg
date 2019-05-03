<template>

  <div class="aula" @click="showDetails = !showDetails">
    <span>{{aula.disciplina}}-{{aula.turma}}</span>
    <Modal v-if="showDetails == true" :aula='aula'> </Modal>
  </div>
  
</template>

<script>

import Modal from './Modal.vue'

export default {
  name: 'aula',
  props: ['aula'],
  components:{
    Modal
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
