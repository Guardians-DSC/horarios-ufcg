import React, { useState, useEffect } from 'react'

import './style.css'
import Arrow from '../Arrow'
import Subject from '../Subject'
import api from '../../services/api'

function Hour({ content, showModal }) {
   const [subjects, setSubjects] = useState()
   const [showSubjects, setShowSubjects] = useState(true)

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

   //funcao que eh executada quando o botao de disciplina eh clicado com o botao direito do mouse
   function rightClick(event) {
      event.preventDefault()
      //pega o texto interno do botao
      const value = event.target.innerText
      let arrays = []
      //pega a sigla da disciplina do texto interno
      arrays[0] = value.substring(0, (value.length - 3))
      //pega a turma da disciplina do texto interno
      arrays[1] = value.substring((value.length - 2), value.length)
      for (let obj in subjects) {
          //procura a disciplina x da turma y
          if (subjects[obj].disciplina === arrays[0] && subjects[obj].turma === arrays[1]) {
              //chama a funçao passada nas props para retornar os dados da disciplina pro modal
              showModal(subjects[obj])
          }
      }
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
            <div className="subjects">
               {subjects && subjects.map(elem => (
                  elem.horario.dia === "segunda" && <Subject key={`${elem.disciplina}`+`${elem.turma}`} subjectData={elem} rightClick={rightClick} leftClick={leftClick}/>
                ))}
            </div>
            <div className="subjects">
               {subjects && subjects.map(elem => (
                  elem.horario.dia === "terca" && <Subject key={`${elem.disciplina}`+`${elem.turma}`} subjectData={elem} rightClick={rightClick} leftClick={leftClick}/>
               ))}
            </div>
            <div className="subjects">
               {subjects && subjects.map(elem => (
                  elem.horario.dia === "quarta" && <Subject key={`${elem.disciplina}`+`${elem.turma}`} subjectData={elem} rightClick={rightClick} leftClick={leftClick}/>
               ))}
            </div>
            <div className="subjects">
               {subjects && subjects.map(elem => (
                  elem.horario.dia === "quinta" && <Subject key={`${elem.disciplina}`+`${elem.turma}`} subjectData={elem} rightClick={rightClick} leftClick={leftClick}/>
               ))}
            </div>
            <div className="subjects">
               {subjects && subjects.map(elem => (
                  elem.horario.dia === "sexta" && <Subject key={`${elem.disciplina}`+`${elem.turma}`} subjectData={elem} rightClick={rightClick} leftClick={leftClick}/>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Hour;