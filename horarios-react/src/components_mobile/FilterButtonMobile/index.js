import React from 'react'

import './style.css'

function FilterButtonMobile({ content }) {
    return (
        <button id='filter-button-mobile-container'>
           <p>{content}</p>
       </button> 
    )
} 

export default FilterButtonMobile