import React, { useState } from 'react'

import './style.css'

function FilterButton({ content }) {
    const [vari, setVari] = useState('normal-color');

    function click() {
        if (vari === "normal-color") {
            setVari('active-color')
        } else {
            setVari('normal-color')
        }
    }

    return (
       <button id='filter-button-container' className={vari} onClick={click}>
           <p>{content}</p>
       </button> 
    )
}

export default FilterButton;
