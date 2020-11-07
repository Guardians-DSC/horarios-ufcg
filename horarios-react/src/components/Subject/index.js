import React from 'react'

import './style.css'

function Subject({ subjectData }) {
    return (
        <button id='subject-container' className="normal">
           <p>{subjectData.disciplina}-{subjectData.turma}</p>
           {/* <p>sla = teste</p> */}
       </button> 
    )
} 

export default Subject