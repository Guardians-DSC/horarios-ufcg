import React from 'react'

import './style.css'

function FilterButton({ content, click, active }) {
    return (
       <button id="filter-button-container" className={active ? "active-color" : "normal-color"} onClick={() => click(content)}>
           <p>{content}</p>
       </button> 
    )
}

export default FilterButton;
