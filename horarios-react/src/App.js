import React, { useState } from 'react';

import './global.css'

import Header from './components/Header'
import Filter from './components/Filter'
import Table from './components/Table'
import SubjectModal from './components/SubjectModal'

function App() {
  const [subject, setSubject] = useState()
  const [classroom, setClassroom] = useState()
  const [subjectName, setSubjectName] = useState()
  const [type, setType] = useState()
  const [period, setPeriod] = useState()
  const [group, setGroup] = useState()
  const [modalIsOpen, setIsOpen] = useState(false);
 
  //funcao responsavel por fechar o modal
  function closeModal(){
    setIsOpen(false);
  }

  //funcao responsavel por abrir o modal e receber as informacoes da disciplina necessarias p o modal
  function openModal(subject, group, subjectName, type, period, classroom) {
    setIsOpen(true);

    setData(subject, group, subjectName, type, period, classroom)
  }

  //funcao responsavel por setar os states com as novas informacoes pro modal
  function setData(subject, group, subjectName, type, period, classroom) {
    setSubject(subject)
    setGroup(group)
    setSubjectName(subjectName)
    setType(type)
    setPeriod(period)
    setClassroom(classroom)
  }

  return (
    <>
      <Header />
      <Filter />
      <Table showModal={openModal}/>
      <SubjectModal 
        subject={subject}
        subjectName={subjectName}
        classroom={classroom}
        type={type}
        period={period}
        group={group}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  )
}

export default App;
