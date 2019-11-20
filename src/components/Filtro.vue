<template>
    <div class="filtro">
        <svg class="filter-icon" 
             v-bind:class="[ activeOpt.length ? 'filter-icon-ativado' : 'filter-icon-desativado']"
             @click="clickFilter()">
          <use xlink:href="./../assets/filter-svg.svg#Layer_1" />
        </svg>
        <div class="option" v-for="(option, id) in options" v-bind:key="id"
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
      options: [
        {label: "1° P", ativado: false, info: "periodo", valor: 1},
        {label: "2° P", ativado: false, info: "periodo", valor: 2},
        {label: "3° P", ativado: false, info: "periodo", valor: 3},
        {label: "4° P", ativado: false, info: "periodo", valor: 4},
        {label: "5° P", ativado: false, info: "periodo", valor: 5},
        {label: "6° P", ativado: false, info: "periodo", valor: 6},
        {label: "7° P", ativado: false, info: "periodo", valor: 7},
        {label: "8° P", ativado: false, info: "periodo", valor: 8},
        {label: "9° P", ativado: false, info: "periodo", valor: 9},
        {label: "opt-especifica", ativado: false, info: "categoria", valor: "opt-especifica"},
        {label: "opt-geral", ativado: false, info: "categoria", valor: "opt-geral"},
        {label: "outros-cursos", ativado: false, info: "categoria", valor: "outros-cursos"},
      ],
      activeOpt: []
    }
  },
  methods: {
    clickOption(option) {
      if(option.ativado) this.activeOpt.push(option);
      else this.activeOpt = this.activeOpt.filter(item => item.ativado);
      this.$store.commit('setAulaVisivel', this.activeOpt);
    },
    clickFilter() {
      this.activeOpt = [];
      this.options.forEach(item => item.ativado = false);
      this.$store.commit('setAulaVisivel', this.activeOpt);
    }
  }
}
</script>

<style>
.filtro {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}

.filter-icon-ativado{
  cursor: pointer;
  fill: #521782;
}

.filter-icon-desativado{
  fill:#656565;
}

.option {
  display: inline-block;
  font-weight: bold;
  border: 2px solid #6d6d6d;
  color: #6d6d6d;
  font-size: 13px;
  src: url("../assets/RobotoMono-Regular.ttf");
  border-radius: 12px;
  padding: 0px 5px;
  margin-left: 7px;
  cursor: pointer;
}
.option:hover , .filter-icon-ativado:hover{
  transform: scale(1.04);
}
.option:active , .filter-icon-ativado:active{
  transform: scale(1);
}
.opt-ativado {
  border: 2px solid #521782;
  color: #521782;
}
.filter-icon {
  height: 28px;
  width: 28px;
  float: left;
  margin-left: 20px;
}

</style>