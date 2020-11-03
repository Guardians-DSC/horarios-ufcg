import React, { useState } from 'react'

import './style.css'
import days from '../../data/days.json'
import hours from '../../data/hours.json'

import Day from '../Day'
import Hour from '../Hour'
import HourMobile from '../../components_mobile/HourMobile'

function Table() {
    const [daysArray, setDaysArray] = useState(days);
    const [hoursArray, setHoursArray] = useState(hours);

    return (
        <div id="table-container">
            <div className="days">
                <span></span>
                {daysArray.map(elem => (
                    <Day key={elem.day} content={elem.day}/>
                ))}
            </div>
            <div className="hours">
                {hoursArray.map(elem => (
                    <Hour key={elem.hour} content={elem.hour} />
                ))}
            </div>
            <div className="hours-mobile">
                {hoursArray.map(elem => (
                    <HourMobile key={elem.hour} content={elem.hour} />
                ))}
            </div>
        </div>
    )
}

export default Table;