<template>
  <div>
    <h1>Horários UFCG@Computação</h1>
    <div class='dias'>
      <Dia dia='Segunda' :aulas='aulas_seg'/>
      <Dia dia='Terça' :aulas='aulas_ter'/>
      <Dia dia='Quarta' :aulas='aulas_qua'/>
      <Dia dia='Quinta' :aulas='aulas_qui'/>
      <Dia dia='Sexta' :aulas='aulas_sex'/>
    </div>
  </div>
</template>

<script>
import Dia from '@/components/Dia.vue';
import axios from 'axios'

export default {
  name: 'tabela',
  components: {
    Dia
  },
  data() {
    return {
      aulas_seg: [],
      aulas_ter: [],
      aulas_qua: [],
      aulas_qui: [],
      aulas_sex: []
    }
  },
  mounted() {
    axios
    
      .get('https://horarios-cc.herokuapp.com/horarios/segunda')
      .then(response => (
        this.aulas_seg =  response.data
      ))
    axios
      .get('https://horarios-cc.herokuapp.com/horarios/terca')
      .then(response => (
        this.aulas_ter =  response.data
      ))
    axios
      .get('https://horarios-cc.herokuapp.com/horarios/quarta')
      .then(response => (
        this.aulas_qua =  response.data
      ))
    axios
      .get('https://horarios-cc.herokuapp.com/horarios/quinta')
      .then(response => (
        this.aulas_qui =  response.data
      ))
    axios
      .get('https://horarios-cc.herokuapp.com/horarios/sexta')
      .then(response => (
        this.aulas_sex =  response.data
      ))
  }
}
</script>

<style>
  div.dias {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
  }
</style>
