import React from 'react'

import './style.css'

function Subject({ subject, group, active, rightClick, leftClick }) {
    return (
        <button id='subject-container' className={active ? "active" : "normal"} onClick={() => leftClick(subject, group)} onContextMenu={rightClick}>
           <p>{subject}-{group}</p>
       </button> 
    )
} 

export default Subject