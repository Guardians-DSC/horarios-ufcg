import React from 'react'

import './style.css'
import Arrow from '../Arrow'

function Hour({ content, color }) {
    return (
       <div id='hour-container' className={color}>
          <div className="hour">
            <p>{content}</p>
            <Arrow />
          </div>
          <div className="content">
          </div>
       </div>
    )
}

export default Hour;