import React, { useState, useEffect } from 'react'

import './style.css'
import days from '../../data/days.json'
import api from '../../services/api'

import Day from '../Day'
import Hour from '../Hour'


function Table({ showModal }) {
    const [daysArray, setDaysArray] = useState(days);
    const [hoursArray, setHoursArray] = useState();

    useEffect(() => {
        //faz as requisicoes pra api
        const fetchData = async () => {
            let hours = await api.get('horarios/horas')

            await setHoursArray(hours.data)
       }

       fetchData()
    }, [])

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
                    <Hour key={elem} content={elem} showModal={showModal}/>
                ))}
            </div>
        </div>
    )
}

export default Table;