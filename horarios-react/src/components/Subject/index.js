import React from 'react'

import './style.css'

function Subject({ subjectData, rightClick, leftClick }) {
    return (
        <button id='subject-container' className={subjectData.active ? "active" : "normal"} onClick={() => leftClick(subjectData.disciplina, subjectData.turma)} onContextMenu={(e) => {e.preventDefault(); rightClick(subjectData);}}>
           <p>{subjectData.disciplina}-{subjectData.turma}</p>
       </button> 
    )
} 

export default Subject