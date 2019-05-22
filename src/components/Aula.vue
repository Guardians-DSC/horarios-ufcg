<template>

  <div class="aula">
    <div class="box" @click="showDetails = true">
      <span>{{aula.disciplina}}-{{aula.turma}}</span>
    </div>
    <Modal v-if="showDetails == true" @close="showDetails = false"  :aula='aula'> </Modal>
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
    margin-right: 4px;
    margin-bottom: 6px;
    flex-grow: 1; 
  }
  .box {
    padding: 3px 7px;
    background: #aeaec2;
    border-radius: 10px;
  }
</style>
