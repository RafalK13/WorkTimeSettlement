import { Fragment } from 'react';
import SelectComponent from './SelectComponent'
import '../styles/RowComponent.scss'

const RowComponent = (props) => {

    const { lp, tab } = props;

    const nrRows = tab.length;

    const getFirstCol = (index) => {

        if (nrRows > 1 && index === 0)
            return (<td rowSpan={nrRows}>{lp}</td>)

        if (nrRows > 1 && index > 0)
            return null;

        return (<td >{lp}</td>)
    }

    const row = tab.map((index, i) => {
        return (
            <tr key={index.id + "-" + i} >
                {getFirstCol(i)}

                <td className='rodzaj'>
                    {<SelectComponent id={index.rodzaj} />}
                </td>
                <td className='Od'> <input className='time' /></td>
                <td className='Do'> <input className='time' /></td>
                <td> <input className='time' /></td>
            </tr>
        )
    })

    return (
        <>
            <Fragment key={lp + "-"}>
                {row}
            </Fragment>
        </>
    );
}

export default RowComponent;

// const RowComponent = (props) => {

//     const { lp, nrRows } = props;

//     const rowSingle = (
//         <Fragment key={lp + "-" + nrRows}>
//             <td rowSpan={nrRows}>{lp}</td>
//             <td><OptComponent tab={tabIn} /></td>
//             <td></td>
//             <td></td>
//             <td></td>
//         </Fragment>
//     )
//     const tabMulti = [rowSingle];
//     const createRow = () => {
//         if (nrRows !== "1")
//             for (let n = 0; n < nrRows - 1; n++) {
//                 tabMulti.push(
//                     <tr key={lp + "-" + n} >
//                         <td><OptComponent tab={tabIn} /></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>

//                     </tr >
//                 )
//             }
//     }
//     createRow();

//     return (
//         <>
//             { tabMulti}
//         </>
//     );
// }

// export default RowComponent;




// const { lp, nrRows } = props;

// const rowSingle = (
//     <Fragment key={lp + "-" + nrRows}>
//         <td rowSpan={nrRows}>{lp}</td>
//         <td><OptComponent tab={tabIn} /></td>
//         <td></td>
//         <td></td>
//         <td></td>
//     </Fragment>
// )
// const tabMulti = [rowSingle];
// const createRow = () => {
//     if (nrRows !== "1")
//         for (let n = 0; n < nrRows - 1; n++) {
//             tabMulti.push(
//                 <tr key={lp + "-" + n} >
//                     <td><OptComponent tab={tabIn} /></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>

//                 </tr >
//             )
//         }
// }
// createRow();