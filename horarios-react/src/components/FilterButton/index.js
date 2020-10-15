import React, { useState } from 'react'

import './style.css'

function FilterButton({ content, color, click }) {
    return (
       <button id='filter-button-container' className={color} onClick={() => click(content)}>
           <p>{content}</p>
       </button> 
    )
}

export default FilterButton;
