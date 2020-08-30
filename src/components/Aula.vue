<template>
  <div class="aula" v-if="checkVisibility()">
    <div
      class="box" v-bind:class="[ { 'box-hover': aula.ativaHover }, { 'ativado': aula.ativado }, { 'emConflito': aula.conflito } ]"
      @mouseenter="onMouseOver('enter')" @mouseleave="onMouseOver('leave')"
      @click="toggleState()" @click.right="showDetails = true"
      @contextmenu.capture.prevent>
      {{aula.disciplina}}-{{aula.turma}}
    </div>
    <Modal v-if="showDetails == true" @close="showDetails = false" :aula="aula" />
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import localstorage from "@/services/localstorage";
export default {
  name: "aula",
  props: ["aula"],
  components: {
    Modal
  },
  data() {
    return {
      showDetails: false
    };
  },
  methods: {
    onMouseOver(condition) {
      this.$store.commit('setAulaHover', {aula: this.aula.identifier, cond: condition});
    },
    toggleState() {
      this.$store.commit('setAulaAtivado', this.aula.identifier);
      localstorage.updateStorage(this.aula);
    },
    checkVisibility() {
      if(this.aula.visivel || this.aula.ativado) return true;
      else {
        this.onMouseOver("leave");
        return false;
      }
    }
  }
};
</script>

<style>
.aula {
  flex-grow: 2;
}

.box {
  margin: 2px;
  font-family: "Roboto-mono", sans-serif;
  font-weight: bold;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: #e1dfdf;
  border: 2px solid #cecece;
  text-align: center;
}

.box:hover, .box-hover {
  background-color: #8948bf;
  border: 2px solid #671fa3;
  color: #ffffff;
  transform: scale(1.04);
  cursor: pointer;
}

.box:active {
  transform: scale(1);
  opacity: 0.9;
}

.ativado {
  background-color: #521782;
  border: 2px solid #421268;
  color: rgb(255, 255, 255);
}

.ativado:hover {
  background-color: #48067e;
  border: 2px solid #421268;
}

.emConflito {
  background-color: rgb(228, 104, 104);
  border: 2px solid rgb(221, 82, 82);
}

.emConflito:hover {
  background-color: rgb(235, 149, 149);
  border: 2px solid rgb(221, 82, 82);
}

@media screen and (min-width: 1920px) {
  .box {
    font-size: 14px;
    margin: 2px;
  }
}

@font-face {
  font-family: Roboto-mono;
  src: url("../assets/RobotoMono-Regular.ttf");
}
</style>
