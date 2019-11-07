<template>
    <div class="filtro">
        <img class="filter-icon" src="./../assets/filter.png" alt="filter-icon">
        <div>
          <div class="option" v-for="(option, id) in optPeriodo" v-bind:key="id"
             v-bind:class="[ { 'opt-ativado': option.ativado } ]"
             @click="option.ativado = !option.ativado; clickOption(option)">
            {{option.label}}
          </div>
        </div>
        
        <div class="option" v-for="(option, id) in optCategoria" v-bind:key="id"
             v-bind:class="[ { 'opt-ativado': option.ativado } ]"
             @click="option.ativado = !option.ativado; clickOption(option)">
            {{option.label}}
        </div>
    </div>
</template>

<script>
export default {
  name: "filtro",
  data() {
    return {
      optPeriodo: [
        {label: "1° P", ativado: true, info: "periodo", valor: 1},
        {label: "2° P", ativado: true, info: "periodo", valor: 2},
        {label: "3° P", ativado: true, info: "periodo", valor: 3},
        {label: "4° P", ativado: true, info: "periodo", valor: 4},
        {label: "5° P", ativado: true, info: "periodo", valor: 5},
        {label: "6° P", ativado: true, info: "periodo", valor: 6},
        {label: "7° P", ativado: true, info: "periodo", valor: 7},
        {label: "8° P", ativado: true, info: "periodo", valor: 8},
        {label: "9° P", ativado: true, info: "periodo", valor: 9},
      ],
      optCategoria: [
        {label: "opt-especifica", ativado: true, info: "categoria", valor: "opt-especifica"},
        {label: "opt-geral", ativado: true, info: "categoria", valor: "opt-geral"},
        {label: "outros-cursos", ativado: true, info: "categoria", valor: "outros-cursos"},
      ]
    }
  },
  methods: {
    clickOption(option) {
      this.$store.commit('setAulaVisivel', option);
    }
  }
}
</script>

<style>
.filtro {
    margin-top: 70px;
}
.option {
    display: inline-block;
    font-weight: bold;
    border: 2px solid #6d6d6d;
    color: #6d6d6d;
    font-size: 12px;
    border-radius: 12px;
    padding: 0px 5px;
    margin-left: 7px;
    cursor: pointer;
}
.option:hover {
    transform: scale(1.04);
}
.option:active {
    transform: scale(1);
}
.opt-ativado {
    border: 2px solid #521782;
    color: #521782;
}
.filter-icon {
    height: 28px;
    float: left;
    margin-left: 20px;
    opacity: 0.6;
}

</style>