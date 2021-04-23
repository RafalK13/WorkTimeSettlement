import { Fragment } from 'react';
import SelectComponent from './SelectComponent'
// import '../styles/DayComponent.scss'
import '../styles/RowComponent.scss'


const RowComponent = (props) => {
    const { lp, tab } = props;
    const p1 = <Fragment key={lp + "-"}>
        <td>{lp}</td>
        <td>
            {
                tab.map((index) => {
                    return <SelectComponent id={index.rodzaj} />
                })
            }
        </td>
        <td>
            <div>
                {
                    tab.map((index) => {
                        return <input className='time' />
                    })
                }
        :
            {
                    tab.map((index) => {
                        return <input className='time' />
                    })
                }
            </div>

        </td>
        <td>
            <div>
                {
                    tab.map((index) => {
                        return <input className='time' />
                    })
                }
                {
                    tab.map((index) => {
                        return <input className='time' />
                    })
                }
            </div>
        </td>
        <td></td>
    </Fragment>



    // const p2 = <tr  >
    //     <td><OptComponent tab={tabIn} /></td>
    //     <td></td>
    //     <td></td>
    //     <td></td>

    // </tr >

    //const tab = [p1]

    return (
        <>


            {p1}




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