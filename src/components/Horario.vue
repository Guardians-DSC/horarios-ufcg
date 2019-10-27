<template>
  <div class='horario'>
    <h4 class="hora" @click="collapse = !collapse">{{hora}}h</h4>
    <transition name="fadeHeight" mode="out-in">
      <div class="dias" v-if="!collapse">
          <dia :aulas="this.dias.segunda"/>
          <dia :aulas="this.dias.terca"/>
          <dia :aulas="this.dias.quarta"/>
          <dia :aulas="this.dias.quinta"/>
          <dia :aulas="this.dias.sexta" style='border-right: 0px;'/>
      </div>
    </transition>
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
        host: 'https://horarios-cc-api.herokuapp.com',
        dias: {
          segunda: [],
          terca: [],
          quarta: [],
          quinta: [],
          sexta: []
        },
        collapse: false,
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
  .fadeHeight-enter-active,
  .fadeHeight-leave-active {
    transition: all .3s;
    max-height: 230px;
  }
  
  .fadeHeight-enter,
  .fadeHeight-leave-to {
    opacity: 0;
    max-height: 0px;
  }

  div.dias {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    min-height: 20px
  }

  @media screen and (max-width: 500px) {
      .aulas {
        width: calc(100vw - 30px);
      }
  }

  div.dias > * {
    border-right: 2px solid #D9D9D9;
    padding: 10px;
  }

  div.horario {
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-gap: 5px;
    border-top: 1px solid #E3EAF0;
  }
  
  .horario>h4 {
    display: flex;
    height: 100%;
    margin: 0;
    color: #521782;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>