import React, { useState } from 'react'

import './style.css'

import FilterButtonMobile from '../FilterButtonMobile'

function FilterShiftMobile({ shifts, click }) {
    const [shiftsArray, setShiftsArray] = useState(shifts)

    return (
       <div id="filter-shift-mobile-container">
           {shiftsArray.map(elem => (
               <FilterButtonMobile content={elem.label} active={elem.active} click={click}/>
           ))}
       </div>
    )
} 

export default FilterShiftMobile