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

function SubjectModal({ subject, subjectName, period, type, group, classroom, modalIsOpen, closeModal }) {
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
                <p>Disciplina: {subject}</p>
                <p>Nome: {subjectName}</p>
                <p>Período: {period}</p>
                <p>Tipo: {type}</p>
                <p>Turma: {group}</p>
                <p>Sala: {classroom}</p>
            </Modal>
        </div>
    )
} 

export default SubjectModal