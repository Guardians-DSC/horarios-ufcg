<template>
  <div class='horario'>
    <h4>{{hora}}h</h4>
    <div class="dias">
      <dia :aulas="this.dias.segunda"/>
      <dia :aulas="this.dias.terca"/>
      <dia :aulas="this.dias.quarta"/>
      <dia :aulas="this.dias.quinta"/>
      <dia :aulas="this.dias.sexta"/>
    </div>
  </div>
</template>

<script>
import Dia from './Dia.vue';
import axios from 'axios'
export default {
  name: 'horario',
  props: ['hora'],
  components: {
    Dia
  },
    data() {
      return {
        curso: "Computação",
        host: 'http://localhost:3000',
        dias: {
          segunda: [],
          terca: [],
          quarta: [],
          quinta: [],
          sexta: []
        }
    }
  },
  mounted() {
    axios
      .get(`${this.host}/horarios/segunda/${this.hora}`)
      .then(response => (
        this.dias.segunda = response.data
      ))
    axios
      .get(`${this.host}/horarios/terca/${this.hora}`)
      .then(response => (
        this.dias.terca = response.data
      ))
    axios
      .get(`${this.host}/horarios/quarta/${this.hora}`)
      .then(response => (
        this.dias.quarta = response.data
      ))
    axios
      .get(`${this.host}/horarios/quinta/${this.hora}`)
      .then(response => (
        this.dias.quinta = response.data
      ))
    axios
      .get(`${this.host}/horarios/sexta/${this.hora}`)
      .then(response => (
        this.dias.sexta = response.data
      ))
  }
}
</script>

<style>
  div.dias {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  div.dias > * {
    border-right: 2px solid #D9D9D9;
    padding: 10px;
  }

  div.horario {
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-gap: 5px;
    height: 20vh;
    border-top: 1px solid #E3EAF0;
  }
  
  h4 {
    display: flex;
    height: 100%;
    margin: 0;
    color: #8A308E;
    align-items: center;
    justify-content: center;
  }
</style>