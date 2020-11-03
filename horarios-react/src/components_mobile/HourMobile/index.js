import React from 'react'

import './style.css'

function HourMobile({ content }) {
    return (
       <div id="hour-mobile-container">
          <div className="hour">
            <p>{content}</p>
          </div>
          <div className="content">
          </div>
       </div>
    )
}

export default HourMobile;