<template>
  <div class="horario">
    <h4 class="hora">{{hora}}h</h4>
    <div class="dias">
      <dia :aulas="this.$store.getters.getAulasDiaHora('segunda',hora)"/>
      <dia :aulas="this.$store.getters.getAulasDiaHora('terca',hora)"/>
      <dia :aulas="this.$store.getters.getAulasDiaHora('quarta',hora)"/>
      <dia :aulas="this.$store.getters.getAulasDiaHora('quinta',hora)"/>
      <dia :aulas="this.$store.getters.getAulasDiaHora('sexta',hora)" style="border-right: 0px;"/>
    </div>
  </div>
</template>

<script>
import Dia from "./Dia.vue";
import api from "@/services/api";
import localstorage from "@/services/localstorage";
export default {
  name: "horario",
  props: ["hora"],
  components: {
    Dia
  },
  data() {
    return {
      curso: "Computação"
    }
  },
  methods: {
    initStore(data) {
      data.forEach(item => {
        item.identifier = `${item.disciplina}.${item.turma}`;
        localstorage.haveDisciplineInLocalStorage(item) ? item.ativado = true  : item.ativado = false;
        item.ativaHover = false;
      })
      this.$store.commit("setAulas", data)
    }
  },
  mounted() {
    api.get("/horarios")
       .then(response => this.initStore(response.data))
  }
};
</script>

<style>
div.dias {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

@media screen and (max-width: 500px) {
  .aulas {
    width: calc(100vw - 30px);
  }
}

div.dias > * {
  border-right: 2px solid #d9d9d9;
  padding: 10px;
}

div.horario {
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-gap: 5px;
  border-top: 1px solid #e3eaf0;
}

.horario > h4 {
  display: flex;
  height: 100%;
  margin: 0;
  color: #521782;
  align-items: center;
  justify-content: center;
}
</style>