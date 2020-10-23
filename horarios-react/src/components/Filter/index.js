import React, { useState } from 'react'

import './style.css'

import FilterButton from '../FilterButton'
import FilterImg from '../FilterImg'

function Filter() {
    const [buttonsInfo, setButtonsInfo] = useState([
        { label: "1ºP", active: false },
        { label: "2ºP", active: false },
        { label: "3ºP", active: false },
        { label: "4ºP", active: false },
        { label: "5ºP", active: false },
        { label: "6ºP", active: false },
        { label: "7ºP", active: false },
        { label: "8ºP", active: false },
        { label: "9ºP", active: false },
        { label: "optativa", active: false },
        { label: "complementar", active: false },
    ]);

    function click(buttonContent) {
        setButtonsInfo(buttonsInfo.map(item => {
            if(item.label === buttonContent)  item.active = !item.active;
            return item;
        }));
    }

    function clear() {
        setButtonsInfo(buttonsInfo.map(item => {
            item.active = false;
            return item;
        }));
    }

    return (
       <div id="filter-container">
            <button className="clear-button" onClick={clear}>
                <FilterImg color="#6d6d6d" />
            </button>
            {buttonsInfo.map(elem => (
                <FilterButton content={elem.label} active={elem.active} click={click} />
            ))}
       </div>
    )
}

export default Filter;
