import React from 'react'
import Modal from 'react-modal';

import './style.css'

import cross from '../../assets/cross.svg'

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '42.6rem',
      padding: '2.5rem 4rem',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,.3)'
    }
  };

function SubjectModal({ subjectData, modalIsOpen, closeModal }) {
    return (
        <div id="subject-modal-container">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                id="modal"
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="header">
                    <h3>DETALHES</h3>
                    <button onClick={closeModal}>
                        <img src={cross} alt=""/>
                    </button>
                </div>
                <p>Disciplina: {subjectData.disciplina}</p>
                <p>Nome: {subjectData.nome}</p>
                <p>Período: {subjectData.periodo}</p>
                <p>Tipo: {subjectData.categoria}</p>
                <p>Turma: {subjectData.turma}</p>
                <p>Sala: {subjectData.sala}</p>
            </Modal>
        </div>
    )
} 

export default SubjectModal