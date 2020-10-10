import React, { useState } from 'react'

import './style.css'

function FilterButton({ content }) {
    const [color, setColor] = useState('normal-color');

    function click() {
        if (color === "normal-color") {
            setColor('active-color')
        } else {
            setColor('normal-color')
        }
    }

    return (
       <button id='filter-button-container' className={color} onClick={click}>
           <p>{content}</p>
       </button> 
    )
}

export default FilterButton;
