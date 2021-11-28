import React, { useState } from 'react';
import moment from 'moment';
import {gregToDeka} from '@sepbit/dekajs'
import './Dekalendar.css'
import Mes from './Mes';

const translate = {
    0:'domingo',
    1:'segunda',
    2:'terca',
    3:'quarta',
    4:'quinta',
    5:'sexta',
    6:'sabdo',
};

function star_month(dday, dia) {
    for (let i = 1; i < dday ; i++){
        dia -= 1;
        if (dia === -1) {
            dia = 6
        }
    }
    return dia
}

function leap(year) {
    return year % 4 === 0 && year % 400 !== 0
}


const Calendar = () => {
    const [year, gmonth, day, dia] = moment().format("YYYY-MM-DD-d").split('-').map((e) => parseInt(e))
    const [dyear, dmonth, dday] = gregToDeka(year, gmonth, day).split('-').map((e) => +e)
    const [month, setMonth] = useState(dmonth)
    const firstDayOfMonth = () => {
        return star_month(dday, dia)
    };
    const weekdayshortname = ['DOM','SEG','TER','QUR','QUI','SEX','SAB']
            .map((e) => {
                return <li key = {e} > {e} </li>
            })
    let blanks = []
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(
            <li className="calendar-day empty">{""}</li>
        );
    }
    let daysInMonth = [];
    for (let d = 1; d <= 28 ; d++) {
        let current_day = d === dday ? "today" : "";
        daysInMonth.push(
            <li key={d} className={`calendar-day ${current_day} `}>
                {d}
            </li>
        );
    }
    let total_slots = [...blanks, ...daysInMonth]
    const meses = [['Achronian', '#fff'],['Auroran', '#fbda38'], ['Borean', '#9df3ed'],
                    ['Coronian', '#4888c8'], ['Driadan','#3e8914'],
                    ['Electran', '#c11a1a'], ['Faian','#3e8914'],
                    ['Gaian','#73ad3a'], ['Hermerian','#173679'],
                    ['Irisian','#5f62b6'], ['Kaosian', '#173679'],
                    ['Lunan', '#5591a9'], ['Maian', '#0b1e38'], ['Nixian', '#2e2e2e']]
    const mesStyle = {
        backgroundColor : meses[month][1],
        color : month !== 0? '#fff':'#000',
    }
    return (
        <div>
            <div style={mesStyle}>
                <Mes mes={month}/>
                <span onClick={(e) => setMonth(month - 1 < 0 ? 13 : month -1 )}><ion-icon name="arrow-dropleft"></ion-icon></span>
                <span onClick={(e) => setMonth((month + 1) % 14)}><ion-icon name="arrow-dropright"></ion-icon></span>
            </div>
            <ul className ='week-day'>
                    {weekdayshortname}
                </ul>
            <ul className= 'month-grid'>
                {total_slots}
            </ul>
            <div>
                asdfasdf
            </div>
        </div>
    )
}
export default Calendar;