import React from 'react'

function FilterImg({ color }) {
    return (
        <svg
            fill={color} 
            data-name="Layer 1" 
            id="Layer_1" 
            viewBox="0 0 48 48" 
            xmlns="http://www.w3.org/2000/svg"
            height="3rem"
            width="3rem"
        >
            <path d="M47,12a2,2,0,0,0-2-2H24a2,2,0,0,0,0,4H45A2,2,0,0,0,47,12Z"/>
            <path d="M3,14H8.35a6,6,0,1,0,0-4H3a2,2,0,0,0,0,4Zm11-4a2,2,0,1,1-2,2A2,2,0,0,1,14,10Z"/>
            <path d="M45,22H37.65a6,6,0,1,0,0,4H45a2,2,0,0,0,0-4ZM32,26a2,2,0,1,1,2-2A2,2,0,0,1,32,26Z"/>
            <path d="M22,22H3a2,2,0,0,0,0,4H22a2,2,0,0,0,0-4Z"/>
            <path d="M45,34H28a2,2,0,0,0,0,4H45a2,2,0,0,0,0-4Z"/>
            <path d="M18,30a6,6,0,0,0-5.65,4H3a2,2,0,0,0,0,4h9.35A6,6,0,1,0,18,30Zm0,8a2,2,0,1,1,2-2A2,2,0,0,1,18,38Z"/>
        </svg>
    )
}

export default FilterImg 
