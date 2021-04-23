import React from 'react';
import RowComponent from './RowComponent'


const getDataRaf = (data) => {
    const r = new Date(data);

    const y = r.getFullYear();
    const m = r.getMonth();
    const d = r.getDate();

    return (new Date(y, m, d));
}

const isBeetweenInt = (n, nMin, nMax) => {
    if (!Number.isInteger(n) ||
        !Number.isInteger(nMin) ||
        !Number.isInteger(nMax)
    )
        return false;

    if (n >= nMin && n <= nMax) {
        return true;
    }
    return false;
}

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

const daysTab = (dataRozl) => {

    const year = new Date(dataRozl).getFullYear();
    const month = new Date(dataRozl).getMonth();

    const daysExtra = daysExtraFree.filter((index) => (new Date(index).getFullYear() === year && new Date(index).getMonth() === month))

    if (!Number.isInteger(year) || !isBeetweenInt(month, 1, 12))
        return null;

    const days = [];
    let weekend = false;
    const date = new Date(year, month, 1);

    while (date.getMonth() === month) {

        const daysNow = daysExtra.filter((index) =>
            getDataRaf(index).getTime() === getDataRaf(date).getTime())

        if (isBeetweenInt(date.getDay(), 1, 5) && (daysNow.length === 0)) {
            weekend = false;
        }
        else
            weekend = true;
        days.push({ day: new Date(date), weekend: weekend });
        date.setDate(date.getDate() + 1);
    }
    return days;
}

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
    }, -
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

]

const daneZBazySort = daneZBazy.sort(sortDaneBaza);

function sortDaneBaza(o1, o2) {
    if (o1.data < o2.data) return -1;
    if (o1.data > o2.data) return 1;

    if (o1.godzinaDo < o2.godzinaDo) return -1;

    if (o1.godzinaDo > o2.godzinaDo) return 1;

    return 0;
}
// function filterTable(day, item) {
//     return day === item;
// }
// function daneZBazy.filter(filterTable.bind(this, dayToCompare));

const DayComponent = (props) => {

    const days = daysTab(props.dataRozl);
    const rows = days.map((item) => {

        if (item.weekend === true) {
            return (
                <tr key={item.day.getDate()} className="weekend">
                    <td>{item.day.getDate()}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        }
        let lp = item.day.getDate();

        const dane = daneZBazySort.filter((daneItem) => {
            return getDataRaf(item.day).getTime() === getDataRaf(daneItem.data).getTime()
        })
        return (
            <tr key={item.day.getDate()} className="">
                <RowComponent lp={lp} tab={dane} />
            </tr>
        )
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