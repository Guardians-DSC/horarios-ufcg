import React from 'react'

import './style.css'

import Day from '../Day'
import Hour from '../Hour'

function Table() {
    return (
        <div id='table-container'>
            <div className='days'>
                <Day content="SEG"/>
                <Day content="TER"/>
                <Day content="QUA"/>
                <Day content="QUI"/>
                <Day content="SEX"/>
            </div>
            <div className='hours'>
                <Hour content="8h" color="gray"/>
                <Hour content="10h" color="white"/>
                <Hour content="14h" color="gray"/>
                <Hour content="16h" color="white"/>
                <Hour content="18h" color="gray"/>
                <Hour content="20h" color="white"/>
                <Hour content="22h" color="gray"/>
            </div>
        </div>
    )
}

export default Table;