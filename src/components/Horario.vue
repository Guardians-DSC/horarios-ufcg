<template>
  <div class='horario'>
    <h4>{{hora}}h</h4>
    <div class='dias'>
      <!-- <Dia v-for="(dia, index) in dias" :key="index" :dia="dia"></Dia> -->
      <!-- <div v-for="(dia, index) in dias" :key="index" class="dia">
        <div>aula</div>
        <div>aula</div>
        <div>aula</div>
        <div>aula</div>
        <div>aula</div>
      </div> -->
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
        dias: []
    }
  },
  mounted() {
    axios
      .get(`${this.host}/horarios/segunda/${this.hora}`)
      .then(response => (
        this.dias.push(response.data)
      ))
    axios
      .get(`${this.host}/horarios/terca/${this.hora}`)
      .then(response => (
        this.dias.push(response.data)
      ))
    axios
      .get(`${this.host}/horarios/quarta/${this.hora}`)
      .then(response => (
        this.dias.push(response.data)
      ))
    axios
      .get(`${this.host}/horarios/quinta/${this.hora}`)
      .then(response => (
        this.dias.push(response.data)
      ))
    axios
      .get(`${this.host}/horarios/sexta/${this.hora}`)
      .then(response => (
        this.dias.push(response.data)
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
/* 
  div.dia {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  div.dia > * { margin: 5px; background: deepskyblue; height: 20px; padding: 2px 10px; } */

  div.horario {
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-gap: 5px;
    border-top: 2px solid #EEEEEE;
    height: 20vh;
  }
  
  h4 {
    display: flex;
    height: 100%;
    margin: 0;
    color: #544081;
    align-items: center;
    justify-content: center;
  }
</style>