import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        all: []
    },
    mutations: {
        setAulas (state, aulas) {
            state.all = aulas
        },
        setAula (state, aula) {
            state.all.forEach(item => {
                if(item.disciplina == aula.disciplina && item.turma == aula.turma){
                    item.ativado = !item.ativado
                } 
            })
        }
    },
    getters: {
        getSegunda: (state) => (hora) => {
            return state.all.filter(aula => aula.horario.dia == "segunda" && aula.horario.hora == hora)
        },
        getTerca: (state) => (hora) => {
            return state.all.filter(aula => aula.horario.dia == "terca" && aula.horario.hora == hora)
        },
        getQuarta: (state) => (hora) => {
            return state.all.filter(aula => aula.horario.dia == "quarta" && aula.horario.hora == hora)
        },
        getQuinta: (state) => (hora) => {
            return state.all.filter(aula => aula.horario.dia == "quinta" && aula.horario.hora == hora)
        },
        getSexta: (state) => (hora) => {
            return state.all.filter(aula => aula.horario.dia == "sexta" && aula.horario.hora == hora)
        }
    }
})