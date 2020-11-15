import React, { useState } from 'react'

import './style.css'

import FilterDayMobile from '../FilterDayMobile'
import FilterShiftMobile from '../FilterShiftMobile'
import SearchMobile from '../SearchMobile'
import TableMobile from '../TableMobile'

function MobileLayout() {
    const [shiftButtonsInfo, setShiftButtonsInfo] = useState([
        { label: "MANHÃ", active: true },
        { label: "TARDE", active: false },
        { label: "NOITE", active: false },
    ]);
    const [dayButtonsInfo, setDayButtonsInfo] = useState([
        { label: "SEG", day: "segunda", active: true },
        { label: "TER", day: "terca", active: false },
        { label: "QUA", day: "quarta", active: false },
        { label: "QUI", day: "quinta", active: false },
        { label: "SEX", day: "sexta", active: false }
    ]);
    const [daySelected, setDaySelected] = useState("segunda");

    function click(buttonContent) {
        setShiftButtonsInfo(shiftButtonsInfo.map(item => {
            if(item.label === buttonContent) {
                item.active = true
            } else {
                item.active = false
            }
            return item;
        }));
    }

    async function click2(buttonContent) {
        setDayButtonsInfo(dayButtonsInfo.map(item => {
            if(item.label === buttonContent) {
                item.active = true
            } else {
                item.active = false
            }
            return item;
        }));

        for (let i = 0; i < dayButtonsInfo.length; i++) {
            if (dayButtonsInfo[i].active) {
                await setDaySelected(dayButtonsInfo[i].day)
            }
        }
    }

    return (
        <div id="mobile-layout">
            <SearchMobile />
            <FilterDayMobile daysArray={dayButtonsInfo} click={click2}/>
            <FilterShiftMobile shifts={shiftButtonsInfo} click={click}/>
            <TableMobile shifts={shiftButtonsInfo} day={daySelected}/>
        </div>
    )
}

export default MobileLayout