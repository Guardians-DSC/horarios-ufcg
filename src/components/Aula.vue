<template>
  <div class="aula">
    <div
      class="box" v-bind:class="[ { 'box-hover': aula.ativaHover }, { 'ativado': aula.ativado } ]"
      @mouseenter="onMouseOver()" @mouseleave="onMouseOver()"
      @click="toggleState()" @click.right="showDetails = true"
      @contextmenu.capture.prevent>
    
      {{aula.disciplina}}-{{aula.turma}}
    
    </div>
    <Modal v-if="showDetails == true" @close="showDetails = false" :aula="aula" />
  </div>
</template>

<script>
import Modal from "./Modal.vue";
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
  computed: {
    identifier() {
      return `${this.aula.disciplina}.${this.aula.turma}`;
    }
  },
  methods: {
    onMouseOver() {
      this.$store.commit('setAulaHover', this.aula);
    },
    toggleState() {
      this.$store.commit('setAula', this.aula)
      this.updateStorage();
    },
    updateStorage() {
      const disciplinesIdentifier = this.getUpdatedDisciplinesIdentifier();
      this.addDisciplineIdentifierToStorage(disciplinesIdentifier);
    },
    getUpdatedDisciplinesIdentifier() {
      if (this.aula.ativado) {
        return this.addDisciplineIfNotExists();
      }
      return this.removeDicipline();
    },
    addDisciplineIfNotExists() {
      if (this.haveDisciplineInStore()) {
        return this.getStoreDisciplineIdentifier();
      }
      return this.getStoreDisciplineIdentifier().concat(this.identifier);
    },
    haveDisciplineInStore() {
      return this.getStoreDisciplineIdentifier().some(
        discipline => discipline === this.identifier
      );
    },
    getStoreDisciplineIdentifier() {
      if (!window.localStorage) {
        return [];
      }
      return (
        JSON.parse(window.localStorage.getItem("disciplinesIdentifier")) || []
      );
    },
    removeDicipline() {
      return this.getStoreDisciplineIdentifier().filter(
        discipline => discipline !== this.identifier
      );
    },
    addDisciplineIdentifierToStorage(disciplinesIdentifier = []) {
      if (!window.localStorage) return;
      window.localStorage.setItem(
        "disciplinesIdentifier",
        JSON.stringify(disciplinesIdentifier)
      );
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

.box:hover,
.box-hover {
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
