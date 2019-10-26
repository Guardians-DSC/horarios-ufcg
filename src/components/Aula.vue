<template>
  <div class="aula">
    <div
      class="box"
      :ref="'.' + identifier"
      v-bind:class="[aula.disciplina, aula.turma, { 'box-hover': isMouseOver }, { 'ativado': isActive } ]"
      @mouseenter="onMouseOver('enter')"
      @mouseleave="onMouseOver('leave')"
      @click="toggleState()"
      @click.right="showDetails = true"
      @contextmenu.capture.prevent
    >{{aula.disciplina}}-{{aula.turma}}</div>
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
  mounted() {
    this.isActive = this.haveDisciplineInStore();
  },
  updated: function() {
    this.$nextTick(function() {
      let bothElements = document.querySelectorAll(
        `.${this.aula.disciplina}.${this.aula.turma}`
      );

      for (let elm of bothElements) {
        if (this.isMouseOver && !elm.classList.contains("box-hover"))
          elm.classList.add("box-hover");
        if (!this.isMouseOver) elm.classList.remove("box-hover");
      }

      for (var classe in this.$refs) {
        if (this.$refs[classe].className.includes("box-hover")) return;
        const ativado = this.$refs[classe].className.includes("ativado");
        const nodeList = document.querySelectorAll(classe);

        // if can't find nodes
        if (!nodeList[0] || !nodeList[1]) return;

        // if one node is active and other is not
        if (nodeList[0].className != nodeList[1].className) {
          if (ativado)
            nodeList[0].className.includes("ativado")
              ? nodeList[1].click()
              : nodeList[0].click();
          else if (!ativado)
            nodeList[0].className.includes("ativado")
              ? nodeList[0].click()
              : nodeList[1].click();
        }
      }
    });
  },
  data() {
    return {
      isActive: false,
      isMouseOver: false,
      showDetails: false
    };
  },
  computed: {
    identifier() {
      return `${this.aula.disciplina}.${this.aula.turma}`.replace('/', '_');
    }
  },
  methods: {
    onMouseOver(condition) {
      if (condition === "enter") {
        this.isMouseOver = true;
      } else if (condition === "leave") {
        this.isMouseOver = false;
      }
    },
    toggleState() {
      this.isActive = !this.isActive;
      this.updateStorage();
    },
    updateStorage() {
      const disciplinesIdentifier = this.getUpdatedDisciplinesIdentifier();
      this.addDisciplineIdentifierToStorage(disciplinesIdentifier);
    },
    getUpdatedDisciplinesIdentifier() {
      if (this.isActive) {
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
