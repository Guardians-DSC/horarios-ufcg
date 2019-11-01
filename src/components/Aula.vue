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
      const aulas = document.getElementsByClassName(
        `${this.aula.disciplina} ${this.aula.turma}`
      );
      const refName = Object.keys(this.$refs)[0];
      const isActive = this.$refs[refName].classList.contains("ativado");

      for (let aula of aulas) {
        if (this.isMouseOver && !aula.classList.contains("box-hover"))
          aula.classList.add("box-hover");
        if (!this.isMouseOver) aula.classList.remove("box-hover");
      }

      if (this.$refs[refName].classList.contains("box-hover")) return;

      // If it can find only one or no nodes
      if (!aulas[0] || !aulas[1]) return;

      // If one node is active and other is not
      if (aulas[0].className != aulas[1].className) {
        if (isActive)
          aulas[0].classList.contains("ativado")
            ? aulas[1].click()
            : aulas[0].click();
        else if (!isActive)
          aulas[0].classList.contains("ativado")
            ? aulas[0].click()
            : aulas[1].click();
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
      return `${this.aula.disciplina}.${this.aula.turma}`;
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

.emComflito {
  background-color: rgb(228, 104, 104);
  border: 2px solid rgb(221, 82, 82);
}

.emComflito:hover {
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
