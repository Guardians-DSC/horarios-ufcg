import React from 'react'

import './style.css'

function Day({ content }) {
    return (
       <div id='day-container'>
           <p>{content}</p>
       </div>
    )
}

export default Day;