import React, { useState } from 'react'

import './style.css'

import FilterButtonMobile from '../FilterButtonMobile'

function FilterTurnMobile() {
    const [turnos, setTurnos] = useState(['MANHÃ', 'TARDE', 'NOITE'])

    return (
       <div id="filter-turn-mobile-container">
           {turnos.map(elem => (
               <FilterButtonMobile content={elem} />
           ))}
       </div>
    )
} 

export default FilterTurnMobile