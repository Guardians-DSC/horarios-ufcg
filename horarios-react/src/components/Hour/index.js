import React, { useState, useEffect } from 'react'

import './style.css'
import Arrow from '../Arrow'
import Subject from '../Subject'
import api from '../../services/api'

function Hour({ content, showModal }) {
   const [subjects, setSubjects] = useState([])
   const [showSubjects, setShowSubjects] = useState(true)
   const [days, setDays] = useState(["segunda", "terca", "quarta", "quinta", "sexta"])

   useEffect(() => {
      const fetchData = async () => {
         let subjects = await api.get(`horarios?hora=${content}`)
         const subsArray = subjects.data.map(obj => (
            { ...obj, active: false }
        ))

         await setSubjects(subsArray)
      }

      fetchData()
   
   }, [])

   function rightClick(subjectData) {
      showModal(subjectData)
   }

   //funcao que eh executada quando o botao de disciplina eh clicado com o botao esquerdo do mouse
   async function leftClick(subject, group) {
      setSubjects(subjects.map(item => {
          if(item.disciplina === subject && item.turma === group)  item.active = !item.active;
          return item;
      }));
  }

   function click() {
      setShowSubjects(!showSubjects)
   }

   return (
      <div id="hour-container">
         <div className="hour" onClick={click}>
            <p>{content + "h"}</p>
            <span className={showSubjects ? "up" : ""}>
               <Arrow />
            </span>
         </div>
         <div className={showSubjects ? "content" : "content hide"}>
            {days.map(day => (
               <div className="subjects">
                  {subjects && subjects.map(subject => (
                     subject.horario.dia === day && <Subject key={`${subject.disciplina}`+`${subject.turma}`} subjectData={subject} rightClick={rightClick} leftClick={leftClick}/>
                  ))}
               </div>
            ))}
         </div>
      </div>
   )
}

export default Hour;