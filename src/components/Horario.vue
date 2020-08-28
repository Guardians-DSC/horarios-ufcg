<template>
  <div class='horario'>
    <div @click="collapse = !collapse">
      <h4 class="hora">{{hora}}h</h4>
      <span><i :class="`fas fa-chevron-${ collapse ? 'down' : 'up' }`"></i></span>
    </div>
    <transition name="fadeHeight" mode="out-in">
      <div class="dias" v-if="!collapse">
        <dia v-for="(dia, id) in dias" v-bind:key="id" :aulas="$store.getters.getAulasDiaHora(dia,hora)" :loading="loading"/>
      </div>
    </transition>
  </div>
</template>

<script>
import Dia from "./Dia.vue";
import localstorage from "@/services/localstorage";
export default {
  name: "horario",
  props: ["hora","loading"],
  components: {
    Dia
  },
  data() {
    return {
      curso: "Computação",
      collapse: false,
      dias: ["segunda", "terca", "quarta", "quinta", "sexta"]
    };
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

  .horario > div:first-child{
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    color: #521782;
  }
</style>
