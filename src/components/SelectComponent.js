import React, { useState } from 'react';
import { tab } from '../dane/dane.js'
import "../styles/SelectComponent.scss"

const OptComponent = (props) => {

    const { id } = props;
    const [colorSel, setColorSel] = useState(tab[id].color);
    const [idSel, setIdSel] = useState(id);

    function changeElement(event) {
        setColorSel(tab[event.target.value].color);
        setIdSel(event.target.value);
    }

    const options = tab.map((item) => (
        <option key={item.id}
            value={item.id}
            style={{ backgroundColor: item.color }} >
            { item.label}
        </ option>
    ));

    const selectComponent =
        <select className="selectOpt"
            onChange={changeElement}
            value={idSel}
            style={{ backgroundColor: colorSel }}
        >
            {options}
        </select>

    return (
        <>
            <div className='OptComponent'>
                {selectComponent}
            </div>
        </>
    );
}

export default OptComponent;