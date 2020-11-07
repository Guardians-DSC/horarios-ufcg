import React, { useState, useEffect } from 'react'

import './style.css'

import api from '../../services/api'

import Subject from '../../components/Subject'

function HourMobile({ content, day }) {
   const [subjects, setSubjects] = useState();

   useEffect(() => {
      const fetchData = async () => {
         let subs = await api.get(`horarios?dia=${day}&hora=${content}`)
      
         await setSubjects(subs.data)
      }

      fetchData()
   }, [])

    return (
      <div id="hour-mobile-container">
         <div className="hour-mobile">
            <p>{content}</p>
         </div>
         <div className="content-mobile">
            {subjects && subjects.map(elem => (
               <Subject key={`${elem.disciplina}`+`${elem.turma}`} subjectData={elem}/>
            ))}
         </div>
      </div>
    )
}

export default HourMobile;