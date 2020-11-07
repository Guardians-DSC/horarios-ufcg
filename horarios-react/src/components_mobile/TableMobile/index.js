import React, { useState, useEffect } from 'react'

import './style.css'

import hours from '../../data/hours.json'

import HourMobile from '../HourMobile'

import Subject from '../../components/Subject'

function TableMobile({ shifts, day }) {
    const [hoursArray, setHoursArray] = useState(hours);
    const [daySelected, setDaySelected] = useState(day)
    
    return (
        <div id="table-mobile-container">
            <div className="hours-mobile">
                {shifts[0].active && hoursArray.map(elem => (
                    elem.hour < 12 && <HourMobile key={elem.hour} content={elem.hour} day={daySelected}/>
                ))}
                {shifts[1].active && hoursArray.map(elem => (
                    elem.hour > 12 && elem.hour < 18 && <HourMobile key={elem.hour} content={elem.hour} day={daySelected}/>
                ))}
                {shifts[2].active && hoursArray.map(elem => (
                    elem.hour >= 18 && <HourMobile key={elem.hour} content={elem.hour} day={daySelected}/>
                ))}
            </div>
        </div>
    )
}

export default TableMobile