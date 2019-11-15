<template>
    <div class="navbar">
        <div id="curso">{{curso}}</div>
        <h1>Horários UFCG</h1>
        <form id="searchBar" v-if="search === true" v-on:submit.prevent="searchActive">
            <div id="searchBarInputContainer">
                <input id="inputSearch" v-model="searchTerm" placeholder="Pesquisar por Disciplina" type="text" list="aulasList" >
                <i id="searchIcon" class="fas fa-search"></i>
            </div>
            <datalist id="aulasList">
                <option v-for="(aula, index) in getAulas" v-bind:key="index" :value="`${aula.disciplina}-${aula.turma}`"></option>
            </datalist>
        </form>
        <button v-if="search !== true" @click="search = !search" id="icon-search"><i class="fas fa-search"></i></button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "navbar",
    data() {
        return {
            curso: "Ciência da Computação",
            search: false,
            searchTerm: ""
        }
    },


    computed: {
        ...mapGetters([
            'getAulas'  
        ])
    },

    methods: {
        searchActive() {
            this.$store.commit("setAulaAtivadoSearch", this.searchTerm)
            this.searchTerm = ""
        }
    }

}
</script>

<style>
    div.navbar {
        -webkit-box-shadow: 1px 3px 6px 0px rgba(56, 50, 50, 0.42);
        -moz-box-shadow:    1px 3px 6px 0px rgba(56, 50, 50, 0.42);
        box-shadow:         1px 3px 6px 0px rgba(56, 50, 50, 0.42); 
        position: fixed;
        top: 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        background-color: #521782;
        color: #E8E8E8; 
        font-family: 'Montserrat', sans-serif;
        z-index: 1;
    }

    #searchIcon {
        color: #a080c1;
        margin-right: 20px;
    }

    #searchBarInputContainer {
        background-color: #f9f9f9;
        border-radius: 20px;
        border: #521782;
    }

    #searchBar {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        justify-self: flex-end;
        margin-right: 20px;
    }

    #inputSearch {
        width: 250px;
        height: 25px;
        text-align: left;
        border-radius: 20px;
        border: #521782;
        padding-left: 10px;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        color: #521782
    }
    
    .fa-search {
        color: #E8E8E8;
    }
    
    div.navbar > h1 {
        margin: 0;
        padding: 0;
        font-weight: lighter;
        align-self: center;
        text-align: center;
    }

    #curso {
        background-color: #421268;
        font-size: 20px;
        padding: 13px;
        justify-self: start;
        font-weight: lighter;
    }

    #icon-search {
        display: flex;
        justify-items: center;
        align-items: center;
        font-size: 24px;
        padding: 0 16px;
        justify-self: flex-end;
        background-color:#521782; 
        border: #521782;
        cursor: pointer;
        
   }

    @media screen and (max-width: 900px) {
        #curso {
              font-size: 15px;
              padding: 13px;
        }

        div.navbar > h1 {
            font-size: 25px;
        }
    }

    @font-face {
        font-family: Montserrat;
        src: url('../assets/Montserrat-SemiBold.ttf');
    }
</style>

