import React from 'react'

import './style.css'

function FilterButtonMobile({ content, active, click }) {
    return (
        <button id='filter-button-mobile-container' className={active ? "active" : "normal"} onClick={() => click(content)}>
           <p>{content}</p>
       </button> 
    )
} 

export default FilterButtonMobile