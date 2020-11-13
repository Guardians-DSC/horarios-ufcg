import React, { useState } from 'react';

import './global.css'

import Header from './components/Header'
import MobileLayout from './components_mobile/MobileLayout'
import DesktopLayout from './components/DesktopLayout'
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
      <DesktopLayout showModal={openModal} />
      <MobileLayout />
      <SubjectModal 
        subjectData={subjectData}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  )
}

export default App;
