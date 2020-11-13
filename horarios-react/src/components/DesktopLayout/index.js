import React from 'react'

import './style.css'

import Filter from '../Filter'
import Table from '../Table'

function DesktopLayout({ showModal }) {
    return (
        <div id="desktop-layout">
            <Filter />
            <Table showModal={showModal}/>
        </div>
    )
}

export default DesktopLayout