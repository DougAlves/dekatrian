import React from "react";
import { useState } from "react/cjs/react.development";

const Mes = (props) => {
    const meses = [['Achronian', '#fff'],['Auroran', '#fbda38'], ['Borean', '#9df3ed'],
                    ['Coronian', '#4888c8'], ['Driadan','#3e8914'],
                    ['Electran', '#c11a1a'], ['Faian','#3e8914'],
                    ['Gaian','#73ad3a'], ['Hermerian','#173679'],
                    ['Irisian','#5f62b6'], ['Kaosian', '#173679'],
                    ['Lunan', '#5591a9'], ['Maian', '#0b1e38'], ['Nixian', '#2e2e2e']]
    return (
        <div className='mes'>
            <div>
            <h1>{meses[props.mes][0]}</h1>
            </div>
        </div>
    )
}

export default Mes