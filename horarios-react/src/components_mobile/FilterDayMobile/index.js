import React, { useState } from 'react'

import './style.css'

import FilterButtonMobile from '../FilterButtonMobile'

function FilterDayMobile() {
    const [days, setDays] = useState(['SEG', 'TER', 'QUA', 'QUI', 'SEX'])

    return (
       <div id="filter-day-mobile-container">
           {days.map(elem => (
               <FilterButtonMobile content={elem} />
           ))}
       </div>
    )
} 

export default FilterDayMobile