<template>
  <div class='horario'>
    <h4 class="hora">{{hora}}h</h4>
    <div class="dias">
      <dia :aulas="this.$store.getters.getSegunda(hora)"/>
      <dia :aulas="this.$store.getters.getTerca(hora)"/>
      <dia :aulas="this.$store.getters.getQuarta(hora)"/>
      <dia :aulas="this.$store.getters.getQuinta(hora)"/>
      <dia :aulas="this.$store.getters.getSexta(hora)" style='border-right: 0px;'/>
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
        host: 'https://horarios-cc-api.herokuapp.com/horarios/',
        dias: {
          segunda: [],
          terca: [],
          quarta: [],
          quinta: [],
          sexta: []
        }
    }
  },
  methods: {
    teste(res) {
      res.forEach(item => {
        item.ativado = false
      })
      this.$store.commit('setAulas', res)
    }
  },
  mounted() {
    axios
      .get(this.host)
      .then(response => (
        this.teste(response.data)
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