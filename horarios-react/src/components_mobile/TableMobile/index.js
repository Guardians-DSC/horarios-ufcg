import React, { useState, useEffect } from 'react'

import './style.css'

import hours from '../../data/hours.json'

import HourMobile from '../HourMobile'

import api from '../../services/api'

function TableMobile({ shifts, day }) {
    const [subjects, setSubjects] = useState();

    useEffect(() => {
        const fetchData = async () => {
            let subs = await api.get(`horarios`)
            
            await setSubjects(subs.data)
        }

        fetchData()
    }, [day])
    
    return (
        <div id="table-mobile-container">
            <div className="hours-mobile">
                {shifts[0].active && hours.map(elem => (
                    elem.hour < 12 && <HourMobile key={elem.hour} content={elem.hour} day={day} subjects={subjects}/>
                ))}
                {shifts[1].active && hours.map(elem => (
                    elem.hour > 12 && elem.hour < 18 && <HourMobile key={elem.hour} content={elem.hour} day={day} subjects={subjects}/>
                ))}
                {shifts[2].active && hours.map(elem => (
                    elem.hour >= 18 && <HourMobile key={elem.hour} content={elem.hour} day={day} subjects={subjects}/>
                ))}
            </div>
        </div>
    )
}

export default TableMobile