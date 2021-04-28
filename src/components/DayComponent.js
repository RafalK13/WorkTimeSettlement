import React from 'react';
import RowComponent from './RowComponent'

import { getDataRaf, createDaysTab, createWorkDaysTab } from './FunkcjeRaf.js'

const tabHeader =
    <thead>
        <tr>
            <th className='row1-1 row1Sticky' rowSpan='2'>Dzień</th>
            <th className='row1-2 row1Sticky' rowSpan='2'>Rodzaj</th>

            <th className='row1 row1Sticky' colSpan='2' >Godziny</th>
            <th className='row1-5 row1Sticky' rowSpan='2' ><p></p>+/-</th>
        </tr>
        <tr>
            <th className='row2-1 row2Sticky'>Od</th>
            <th className='row2-2 row2Sticky'>Do</th>
        </tr>
        {/* <tr>
        </tr> */}
    </thead>

const daysExtraFree = ['2021-04-01', '2020-04-06', '2020-05-06', '2021-04-06', '2021-04-14', '2021-07-22', '2021-08-06', '2021-09-13'];

const daneZBazy = [
    {
        data: '2021-04-05',
        rodzaj: 2,
        godzinaOd: 7,
        godzinaDo: 15
    },
    {
        data: '2021-04-07',
        rodzaj: 1,
        godzinaOd: 13,
        godzinaDo: 15
    },
    {
        data: '2021-04-02',
        rodzaj: 3,
        godzinaOd: 7,
        godzinaDo: 15
    },
    {
        data: '2021-04-07',
        rodzaj: 1,
        godzinaOd: 7,
        godzinaDo: 11
    },
    {
        data: '2021-04-07',
        rodzaj: 2,
        godzinaOd: 11,
        godzinaDo: 13
    },
    {
        data: '2021-04-27',
        rodzaj: 2,
        godzinaOd: 11,
        godzinaDo: 13
    }

]

const DayComponent = (props) => {

    const daysOfMonth = createDaysTab(props.dataRozl, daysExtraFree);

    const daysWork = createWorkDaysTab(daysOfMonth, daneZBazy);

    console.log(daysWork);
    const rows = daysWork.map((item) => {

        if (item.weekend === true) {
            return (
                <tr key={item.data.getDate()} className="weekend">
                    <td>{item.data.getDate()}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        }
        let lp = new Date(item[0].data).getDate();

        return <RowComponent lp={lp} tab={item} />
    })

    return (
        <>
            <table>
                {tabHeader}
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    );
}

export default DayComponent;