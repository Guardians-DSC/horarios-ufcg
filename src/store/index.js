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
        setAulaAtivado (state, aula) {
            state.all.forEach(item => {
                if(item.identifier == aula){
                    item.ativado = !item.ativado
                } 
            })
        },
        setAulaHover (state, objHover) {            
            state.all.forEach(item => {
                if(item.identifier == objHover.aula){
                    if(objHover.cond == 'enter') item.ativaHover = true
                    else item.ativaHover = false
                } 
            })
        },
        setAulaVisivel (state, options) {
            if(options.length){
                state.all.forEach(item => {
                    let visivel = false
                    options.forEach(objOption => {
                        if((objOption.info == "periodo" && item.periodo_ppc_novo == objOption.valor) ||
                        (objOption.info == "categoria" && item.categoria == objOption.valor)){
                            visivel = true
                        }
                    })
                    item.visivel = visivel
                })
            }else {
                state.all.forEach(item => item.visivel = true)
            }
        },
        setAulaAtivadoSearch(state, aula) {
            state.all.forEach(item => {
                if(`${item.disciplina}-${item.turma}` == aula){
                    item.ativado = !item.ativado
                } 
            })
        },

        clearActive(state) {
            state.all.forEach(item => {
                if (item.ativado) item.ativado = !item.ativado
            })
        }
     },

    getters: {
        getAulasDiaHora: (state) => (dia,hora) => {
            return state.all.filter(aula => aula.horario.dia == dia && aula.horario.hora == hora)
        },

        getAulas: state => state.all.filter( (aula, i, array) => array.map(x => x.identifier).indexOf(aula.identifier) == i),

        getAll:state => state.all,
    }
})