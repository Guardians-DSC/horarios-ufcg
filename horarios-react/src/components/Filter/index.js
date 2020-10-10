import React, { useState } from 'react'

import './style.css'

import FilterButton from '../FilterButton'
import FilterImg from '../FilterImg'

function Filter() {
    return (
       <div id='filter-container'>
            <FilterImg color="#6d6d6d" />
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
