<template>
  <div class='horario'>
    <h4 class="hora">{{hora}}h</h4>
    <div class="dias">
      <dia :aulas="this.$store.getters.getAulasDiaHora('segunda',hora)"/>
      <dia :aulas="this.$store.getters.getAulasDiaHora('terca',hora)"/>
      <dia :aulas="this.$store.getters.getAulasDiaHora('quarta',hora)"/>
      <dia :aulas="this.$store.getters.getAulasDiaHora('quinta',hora)"/>
      <dia :aulas="this.$store.getters.getAulasDiaHora('sexta',hora)" style='border-right: 0px;'/>
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
        host: 'https://horarios-cc-api.herokuapp.com'
    }
  },
  methods: {
    constroiStore(data) {
      data.forEach(item => {
        item.ativado = false
      })
      this.$store.commit('setAulas', data)
    }
  },
  mounted() {
    axios
      .get(`${this.host}/horarios/`)
      .then(response => (
        this.constroiStore(response.data)
      ))
  }
}
</script>

<style>
  div.dias {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 500px) {
      .aulas{
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
  }
</style>