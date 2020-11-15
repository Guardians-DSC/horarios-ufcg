import React, { useState } from 'react'

import './style.css'

import FilterButtonMobile from '../FilterButtonMobile'

function FilterDayMobile({ daysArray, click }) {
    const [days, setDays] = useState(daysArray)

    return (
       <div id="filter-day-mobile-container">
           {days.map(elem => (
               <FilterButtonMobile content={elem.label} active={elem.active} click={click} />
           ))}
       </div>
    )
} 

export default FilterDayMobile