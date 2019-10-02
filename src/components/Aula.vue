<template>
    <div class="aula">
        <div class="box" v-bind:class="{ 'ativado': isActive }" 
            @click="showDetails = true" @click.right="isActive=!isActive">
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
        margin: 1px;
        font-weight: bold;
        font-size: 12px;
        padding-left: 6px;
        padding-right: 6px;
        border-radius: 4px;
        background-color: #E1DFDF;
        border: 2px solid #CECECE;
    }

    .box:hover{
        background-color: #CECECE;
        border: 2px solid #CECECE;
        transform: scale(1.04);
        cursor: pointer;
    }

    .box:active{
        transform: scale(1.0);
        opacity: 0.9;
    }

    .ativado{
        background-color: #AD3DB3;
        border: 2px solid #8B2091;
        color: rgb(255, 255, 255);
    }

    .ativado:hover{
        background-color: rgb(164, 14, 172);
        border: 2px solid #8B2091;
    }

    @media screen and (min-width: 1920px) {
      .box {
            font-size: 14px;
            margin: 2px;
       }
    }
</style>