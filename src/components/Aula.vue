<template>
    <div class="aula">
        <div
            class="box"
            :ref="'.' + identifier"
            v-bind:class="[aula.disciplina, aula.turma, { 'ativado': isActive }]" 
            @click="toggleState()"
            @click.right="showDetails = true"
            @contextmenu.capture.prevent
        >
            {{aula.disciplina}}-{{aula.turma}}
        </div>
        <Modal v-if="showDetails == true" @close="showDetails = false" :aula='aula' />
    </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
    name: 'aula',
    props: ['aula'],
    components: {
        Modal
    },
    mounted() {
        this.isActive = this.haveDisciplineInStore();
    },
    updated: function() {
        this.$nextTick(function() {
            for (var classe in this.$refs) {
                const ativado = this.$refs[classe].className.includes('ativado')
                const classes = document.querySelectorAll(classe)

                if (!classes[0] || !classes[1]) return;
                if (classes[0].className != classes[1].className) {
                    if (ativado) classes[0].className.includes('ativado') ? classes[1].click() : classes[0].click()
                    else classes[0].className.includes('ativado') ? classes[0].click() : classes[1].click()
                }
            }
        })
    },
    data() {
        return {
            isActive: false,
            showDetails: false
        }
    },
    computed: {
        identifier() {
            return `${this.aula.disciplina}.${this.aula.turma}`;
        }
    },
    methods: {
        toggleState() {
            this.isActive = !this.isActive;
            this.updateStorage();
        },
        updateStorage() {
            const disciplinesIdentifier = this.getUpdatedDisciplinesIdentifier();
            this.addDisciplineIdentifierToStorage(disciplinesIdentifier);
        },
        getUpdatedDisciplinesIdentifier() {
            if(this.isActive) {
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
            return this.getStoreDisciplineIdentifier()
                .some(discipline => discipline === this.identifier);
        },
        getStoreDisciplineIdentifier() {
            if (!window.localStorage) {
                return [];
            }
            return JSON.parse(window.localStorage.getItem('disciplinesIdentifier')) || [];
        },
        removeDicipline() {
            return this.getStoreDisciplineIdentifier()
                .filter((discipline) => discipline !== this.identifier);
        },
        addDisciplineIdentifierToStorage(disciplinesIdentifier = []) {
            if (!window.localStorage) return;
            window.localStorage.setItem(
                'disciplinesIdentifier',
                JSON.stringify(disciplinesIdentifier)
            );
        },
    }
}
</script>

<style>
.aula {
    display: inline-block;
}

.box {
    margin: 2px;
    font-family: 'Roboto-mono', sans-serif;
    font-weight: bold;
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 4px;
    background-color: #E1DFDF;
    border: 2px solid #CECECE;
}

.box:hover {
    background-color: #8948bf;
    border: 2px solid #671FA3;
    color: #ffffff;
    transform: scale(1.04);
    cursor: pointer;
}

.box:active {
    transform: scale(1.0);
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
    src: url('../assets/RobotoMono-Regular.ttf');
}
</style>
