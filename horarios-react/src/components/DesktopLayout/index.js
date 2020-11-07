import React, { useState } from 'react'

import './style.css'

import Filter from '../Filter'
import Table from '../Table'

function DesktopLayout() {
    return (
        <div id="desktop-layout">
            <Filter />
            <Table />
        </div>
    )
}

export default DesktopLayout