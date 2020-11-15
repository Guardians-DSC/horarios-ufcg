import React, { useState, useEffect } from 'react'

import './style.css'

import hours from '../../data/hours.json'

import HourMobile from '../HourMobile'

import api from '../../services/api'

function TableMobile({ shifts, day }) {
    const [subjects, setSubjects] = useState();
    const [hoursArray, setHoursArray] = useState(hours);

    useEffect(() => {
        //faz as requisicoes pra api
        const fetchData = async () => {
            let hours = await api.get('horarios/horas')

            await setHoursArray(hours.data)
       }

       fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            let subs = await api.get(`horarios`)
            const subsArray = subs.data.map(obj => (
                { ...obj, active: false }
            ))
            
            await setSubjects(subsArray)
        }

        fetchData()
    }, [day])

    async function leftClick(subject, group) {
        setSubjects(subjects.map(item => {
            if(item.disciplina === subject && item.turma === group)  item.active = !item.active;
            return item;
        }));
    }
    
    return (
        <div id="table-mobile-container">
            <div className="hours-mobile">
                {shifts[0].active && hoursArray.map(elem => (
                    parseInt(elem) < 12 && <HourMobile key={elem} content={elem} day={day} subjects={subjects} leftClick={leftClick}/>
                ))}
                {shifts[1].active && hoursArray.map(elem => (
                    parseInt(elem) > 12 && parseInt(elem) < 18 && <HourMobile key={elem} content={elem} day={day} subjects={subjects} leftClick={leftClick}/>
                ))}
                {shifts[2].active && hoursArray.map(elem => (
                    parseInt(elem) >= 18 && <HourMobile key={elem} content={elem} day={day} subjects={subjects} leftClick={leftClick}/>
                ))}
            </div>
        </div>
    )
}

export default TableMobile