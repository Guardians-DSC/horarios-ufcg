<template>
  <div>
    <h1>Horarios</h1>
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
      .get('http://localhost:3000/horarios/segunda')
      .then(response => (
        this.aulas_seg =  response.data
      ))
    axios
      .get('http://localhost:3000/horarios/terca')
      .then(response => (
        this.aulas_ter =  response.data
      ))
    axios
      .get('http://localhost:3000/horarios/quarta')
      .then(response => (
        this.aulas_qua =  response.data
      ))
    axios
      .get('http://localhost:3000/horarios/quinta')
      .then(response => (
        this.aulas_qui =  response.data
      ))
    axios
      .get('http://localhost:3000/horarios/sexta')
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
    grid-gap: 25px;
  }
</style>
