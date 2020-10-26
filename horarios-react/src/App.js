import React, { useState } from 'react';

import './global.css'

import Header from './components/Header'
import Filter from './components/Filter'
import Table from './components/Table'
import SubjectModal from './components/SubjectModal'

function App() {
  const [subjectData, setSubjectData] = useState({})
  const [modalIsOpen, setIsOpen] = useState(false);
 
  //funcao responsavel por fechar o modal
  function closeModal(){
    setIsOpen(false);
  }

  //funcao responsavel por abrir o modal e receber as informacoes da disciplina necessarias p o modal
  function openModal(subjectData) {
    setIsOpen(true);

    setSubjectData(subjectData)
  }

  return (
    <>
      <Header />
      <Filter />
      <Table showModal={openModal}/>
      <SubjectModal 
        subjectData={subjectData}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  )
}

export default App;
