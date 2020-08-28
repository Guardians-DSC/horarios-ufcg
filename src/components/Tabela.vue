<template>
    <div class="table">
        <div class="header-dias">
            <span id="seg">SEG</span>
            <span id="ter">TER</span>
            <span id="qua">QUA</span>
            <span id="qui">QUI</span>
            <span id="sex" style='border-right: 0px;'>SEX</span>
        </div>
        <horario v-for="(hora, id) in horas" v-bind:key="id" :hora="hora" :loading="loading"></horario>
    </div>
</template>

<script>
import horario from './Horario.vue';
import api from "@/services/api";
import localstorage from "@/services/localstorage";
export default {
  name: "tabela",
  components: {
    horario
  },
  data() {
    return {
      loading: true,
      horas: [],
     };
  },
  methods: {
    initStore(data) {
      data.forEach(item => {
        item.identifier = `${item.disciplina}.${item.turma}`;
        localstorage.haveDisciplineInLocalStorage(item) ? item.ativado = true  : item.ativado = false;
        item.ativaHover = false;
        item.visivel = true;
      })
      this.$store.commit("setAulas", data)
    }
  },
  mounted() {
    api.get("/horarios/horas")
       .then(response =>  this.horas = response.data)
    api.get("/horarios")
       .then(response => {this.initStore(response.data); this.loading = false})
  }
}
</script>

<style>

.table {
    display: inline-block;
    min-width: 900px;
}

@media screen and (min-width: 900px) {
      .table {
        width: 100%;
      }
  }

.horario {
    width: 100%;
}

div.horario:nth-child(even) {
    background: #EEEEEE;
}
div.horario:nth-child(odd) {
    background: white; 
}

.header-dias {
    display: grid;
    grid-template-columns: 65px 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 5px;

    text-align: center;
    color: #626161;
}

.header-dias span {
    padding: 10px;
    border-right: 2px solid #D9D9D9;
}

#seg {
    grid-column: 2/3;
}

</style>
