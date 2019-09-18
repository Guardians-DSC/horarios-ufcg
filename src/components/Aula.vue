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
        font-weight: bold;
        font-size: 11px;
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
        background-color: #72195A;
        border: 2px solid #49183C;
        color: rgb(255, 255, 255);
    }

    .ativado:hover{
        background-color: #49183C;
        border: 2px solid #49183C;
    }

</style>