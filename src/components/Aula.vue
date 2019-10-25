<template>
    <div class="aula">
        <div class="box" v-bind:class="{ 'ativado': aula.ativado }" 
            @click="showDetails = true" @click.right="ativa" 
            @contextmenu.capture.prevent>
            {{aula.disciplina}}-{{aula.turma}}
        </div>
        <Modal v-if="showDetails == true" @close="showDetails = false"  :aula='aula'/>
    </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
    name: 'aula',
    props: ['aula'],
    components:{
        Modal
    },
    methods: {
        ativa() {
            this.$store.commit('setAula', this.aula)
        }
    },
    data (){
        return {
            isActive: false,
            showDetails: false
        }
    }
}
</script>

<style>
    .aula{
        display: inline-block;
    }

    .box{
        margin: 2px;
        font-family: 'Roboto-mono', sans-serif;
        font-weight: bold;
        font-size: 11px;
        padding: 2px 6px;
        border-radius: 4px;
        background-color: #E1DFDF;
        border: 2px solid #CECECE;
    }

    .box:hover{
        background-color: #8948bf;
        border: 2px solid #671FA3;
        color: #ffffff;
        transform: scale(1.04);
        cursor: pointer;
    }

    .box:active{
        transform: scale(1.0);
        opacity: 0.9;
    }

    .ativado{
        background-color: #521782;
        border: 2px solid #421268;
        color: rgb(255, 255, 255);
    }

    .ativado:hover{
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
