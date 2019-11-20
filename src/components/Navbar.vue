<template>
    <div class="navbar">
        <div id="curso">{{curso}}</div>
        <h1>Horários UFCG</h1>
        <div id="search">
            <Autocomplete id="inputSearch" 
            @submit="searchActive" 
            v-model="itemSearch"
            v-bind:value='itemSearch' 
            v-on:input='itemSearch = $event.target.value'
            :search="search" 
            auto-select
            placeholder="Pesquisar disciplina"/>
        </div>
        
    </div>
</template>

<script>
import localstorage from "@/services/localstorage"
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

export default {
    name: "navbar",
    props: ["aulas"],
    components: {
        Autocomplete
    },
    data() {
        return {
            curso: "Ciência da Computação",
            itemSearch: ""
        }
    },

    methods: {
        searchActive(input) {
            this.$store.commit("setAulaAtivadoSearch", input)
            localstorage.updateStorage(this.aulas.find( aula => `${aula.disciplina}-${aula.turma}` === input))
            this.itemSearch = ""
        },

        search(inputSearch) {
            if(inputSearch.length < 1) { return [] }
            
            const aulasSaida = [];

            this.aulas.forEach(element => {
                aulasSaida.push(`${element.disciplina}-${element.turma}`)                
            });

            return aulasSaida.filter(aula => {
                return aula.toLowerCase().startsWith(inputSearch.toLowerCase())
            });
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

    #search{
        color: black;
        width: 240px;
        margin-right: 20px;
        font-size: 15px;
        justify-self: end;
        align-self: center;
    }

    #inputSearch {
        height: 25px;
        padding-top: 13px;
        padding-bottom: 13px;
        font-family: 'Montserrat', sans-serif;
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

