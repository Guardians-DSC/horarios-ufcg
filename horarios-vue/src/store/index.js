import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        all: []
    },
    mutations: {
        setAulas (state, aulas) {
            state.all = aulas;
            let ativadas = state.all.filter(element => element.ativado);
            ativadas.forEach(ativada => {
                if (!ativada.conflito) {
                    let aulasConflitantes = state.all.filter(element => 
                        element.ativado &&
                        element.identifier != ativada.identifier &&
                        element.horario.dia == ativada.horario.dia && 
                        element.horario.hora == ativada.horario.hora);
                
                    if (aulasConflitantes.length > 0) {
                        ativada.conflito = true;
                        aulasConflitantes.forEach(element => element.conflito = true);
                    }
                }
            })
        },
        setAulaAtivado (state, identifier) {
            let aulas = state.all.filter(element => element.identifier == identifier);

            aulas.forEach(aula => {
                let aulasConflitantes = state.all.filter(element => 
                    element.ativado &&
                    element.identifier != aula.identifier &&
                    element.horario.dia == aula.horario.dia && 
                    element.horario.hora == aula.horario.hora);
                    
                if (!aula.ativado) {
                    aula.ativado = true;
    
                    if (aulasConflitantes.length > 0) {
                        aula.conflito = true;
                        aulasConflitantes.forEach(element => element.conflito = true);
                    }
                } else {
                    aula.ativado = false;
                    if (aula.conflito) {
                        aula.conflito = false;
                        if (aulasConflitantes.length == 1) aulasConflitantes[0].conflito = false;
                    }
                }
            });
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
                        if((objOption.info == "periodo" && item.periodo == objOption.valor) ||
                        (objOption.info == "categoria" && item.categoria == objOption.valor)){
                            visivel = true
                        }
                    })
                    item.visivel = visivel
                })
            }else {
                state.all.forEach(item => item.visivel = true)
            }
        }
     },
    getters: {
        getAulasDiaHora: (state) => (dia,hora) => {
            return state.all.filter(aula => aula.horario.dia == dia && aula.horario.hora == hora)
        },

        getAulas: state => state.all.filter( (aula, i, array) => array.map(x => x.identifier).indexOf(aula.identifier) == i)
    }
})