import React, { useState, useEffect } from 'react'

import './style.css'

import FilterButton from '../FilterButton'
import FilterImg from '../FilterImg'

function Filter() {
    const [buttonsInfo, setButtonsInfo] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        setButtonsInfo([
            { label: "1ºP", active: false, color: "normal-color" },
            { label: "2ºP", active: false, color: "normal-color" },
            { label: "3ºP", active: false, color: "normal-color" },
            { label: "4ºP", active: false, color: "normal-color" },
            { label: "5ºP", active: false, color: "normal-color" },
            { label: "6ºP", active: false, color: "normal-color" },
            { label: "7ºP", active: false, color: "normal-color" },
            { label: "8ºP", active: false, color: "normal-color" },
            { label: "9ºP", active: false, color: "normal-color" },
            { label: "optativa", active: false, color: "normal-color" },
            { label: "complementar", active: false, color: "normal-color" },
        ])
    }, []);

    async function click(buttonContent) {
        let newArray = buttonsInfo;
        for (let obj in newArray) {
            if ((newArray[obj].label === buttonContent)) {
                if (newArray[obj].active === false) {
                    newArray[obj].color = "active-color"
                    newArray[obj].active = true
                } else {
                    newArray[obj].color = "normal-color"
                    newArray[obj].active = false
                }
            } 
        }
        await setButtonsInfo(newArray);
        setRender(!render);
    }

    async function clear() {
        let newArray = buttonsInfo;
        for (let obj in newArray) {
            newArray[obj].color = "normal-color"
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
                <FilterButton content={elem.label} color={elem.color} click={click}/>
            ))}
       </div>
    )
}

export default Filter;
