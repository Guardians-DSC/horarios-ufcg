import React, { useState, useEffect } from 'react'

import './style.css'
import days from '../../data/days.json'
import api from '../../services/api'

import Day from '../Day'
import Hour from '../Hour'
import Subject from '../Subject'

function Table({ showModal }) {
    const [daysArray, setDaysArray] = useState(days);
    const [hoursArray, setHoursArray] = useState();
    const [subjectsArray, setSubjectsArray] = useState();
    const [render, setRender] = useState(false)

    useEffect(() => {
        //faz as requisicoes pra api
        const fetchData = async () => {
            let hours = await api.get('horarios/horas')
            //pega algumas disciplinas só para teste mesmo
            let subjects = await api.get('horarios?dia=sexta&hora=8')
            //cria um novo array com o atributo active para definir se o botao ta ativado ou nao
            const subsArray = subjects.data.map(obj => (
                { ...obj, active: false }
            ))
            
            await setHoursArray(hours.data)
            await setSubjectsArray(subsArray)
       }

       fetchData()
    }, [])

    //funcao que eh executada quando o botao de disciplina eh clicado com o botao direito do mouse
    function rightClick(event) {
        event.preventDefault()
        //pega o texto interno do botao
        const value = event.target.innerText
        let arrays = []
        //pega a sigla da disciplina do texto interno
        arrays[0] = value.substring(0, (value.length - 3))
        //pega a turma da disciplina do texto interno
        arrays[1] = value.substring((value.length - 2), value.length)
        for (let obj in subjectsArray) {
            //procura a disciplina x da turma y
            if (subjectsArray[obj].disciplina === arrays[0] && subjectsArray[obj].turma === arrays[1]) {
                //chama a funçao passada nas props para retornar os dados da disciplina pro modal
                showModal(arrays[0], arrays[1], subjectsArray[obj].nome, subjectsArray[obj].categoria, subjectsArray[obj].periodo, subjectsArray[obj].sala)
            }
        }
    }

    //funcao que eh executada quando o botao de disciplina eh clicado com o botao esquerdo do mouse
    async function leftClick(subject, group) {
        let newArray = subjectsArray;
        for (let obj in newArray) {
            if (newArray[obj].disciplina === subject && newArray[obj].turma === group) {
                newArray[obj].active = !newArray[obj].active
            }
        }
        await setSubjectsArray(newArray)
        setRender(!render)
    }

    return (
        <div id="table-container">
            <div className="days">
                <span></span>
                {daysArray.map(elem => (
                    <Day key={elem.day} content={elem.day}/>
                ))}
            </div>
            <div className="hours">
                {hoursArray && hoursArray.map(elem => (
                    <Hour key={elem} content={elem + "h"} />
                ))}
            </div>
            <div>
                {subjectsArray && subjectsArray.map(elem => (
                    //passando as props pro botao de disciplina
                    <Subject key={elem.disciplina} subject={elem.disciplina} group={elem.turma} active={elem.active} rightClick={rightClick} leftClick={leftClick}/>
                ))}
            </div>
        </div>
    )
}

export default Table;