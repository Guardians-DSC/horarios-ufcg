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
        getAulasDiaHora: (state) => (dia,hora) => {
            return state.all.filter(aula => aula.horario.dia == dia && aula.horario.hora == hora)
        }
    }
})