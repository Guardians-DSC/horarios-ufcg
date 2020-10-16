import React, { useState, useEffect } from 'react'

import './style.css'

import FilterButton from '../FilterButton'
import FilterImg from '../FilterImg'

function Filter() {
    const [buttonsInfo, setButtonsInfo] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        setButtonsInfo([
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
        ])
    }, []);

    async function click(buttonContent) {
        let newArray = buttonsInfo;
        for (let obj in newArray) {
            if ((newArray[obj].label === buttonContent)) {
                newArray[obj].active = !newArray[obj].active
            } 
        }
        await setButtonsInfo(newArray);
        setRender(!render);
    }

    async function clear() {
        let newArray = buttonsInfo;
        for (let obj in newArray) {
            newArray[obj].active = false
        }
        await setButtonsInfo(newArray);
        setRender(!render);
    }

    return (
       <div id='filter-container'>
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
