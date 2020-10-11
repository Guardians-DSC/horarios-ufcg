import React from 'react'

import './style.css'
import arrowDownIcon from '../../assets/arrow-down.svg'

function Hour({ content, color }) {
    return (
       <div id='hour-container' className={color}>
          <div className="hour">
            <p>{content}</p>
            <img src={arrowDownIcon} alt=""/>
          </div>
          <div className="content">
          </div>
       </div>
    )
}

export default Hour;