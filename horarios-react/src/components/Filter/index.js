import React, { useState } from 'react'

import './style.css'

import FilterButton from '../FilterButton'
import filterImg from '../../assets/filter.svg'

function Filter() {
    const [vari, setVari] = useState(false);

    function click() {
        if (vari === "color") {
            setVari('change-color')
        } else {
            setVari('color')
        }
    }

    return (
       <div id='filter-container'>
            <img src={filterImg} alt=""/>
            <FilterButton content='1ºP'/>
            <FilterButton content='2ºP'/>
            <FilterButton content='3ºP'/>
            <FilterButton content='4ºP'/>
            <FilterButton content='5ºP'/>
            <FilterButton content='6ºP'/>
            <FilterButton content='7ºP'/>
            <FilterButton content='8ºP'/>
            <FilterButton content='9ºP'/>
            <FilterButton content='optativa'/>
            <FilterButton content='complementar'/>
       </div>
    )
}

export default Filter;
