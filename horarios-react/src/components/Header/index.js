import React from 'react'

import './style.css'

import searchIcon from '../../assets/search.svg'

function Header() {
    return (
        <div id='header-container'>
            <div className='header-content'>
                <div className='course-name'>
                    <h2>Ciência da Computação</h2>
                </div>
                <h1>Horários UFCG</h1>
                <div className='search-bar'>
                    <img src={searchIcon} alt=""/>
                    <input type="text" placeholder='Pesquisar disciplina'/>
                </div>
            </div>
        </div>
    )
}

export default Header;