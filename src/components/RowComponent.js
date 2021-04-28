import { Fragment, useEffect, useState } from 'react';
import SelectComponent from './SelectComponent'
import '../styles/RowComponent.scss'

const RowComponent = (props) => {

    const [timeHOd, setTimeHOd] = useState('')
    const [timeMOd, setTimeMOd] = useState('')
    const [timeHDo, setTimeHDo] = useState('')
    const [timeMDo, setTimeMDo] = useState('')
    const [classOd, setClassOd] = useState('Od');
    const [classDo, setClassDo] = useState('Do');

    useEffect(() => {
        let error = false;
        if (isNaN(timeHOd))
            error = true;

        if (timeHOd.length === 1) {

            setTimeHOd('13');
            // setTimeHOd((prev) => {

            //     const result = prev + 'Dupa';
            //     console.log(result);

            //     return { result }
            // })

        }

        if (timeHOd.length > 2 || timeMOd.length > 2)
            error = true;

        if (timeHOd < 0 || timeHOd > 23)
            error = true;

        if (timeHOd < 0 || timeMOd > 60)
            error = true;


        error === false ? setClassOd('Od') : setClassOd('Od Error');
    }, [timeHOd, timeMOd]
    );


    const onChange = ({ target: { value } }) => {
        // setTimeHOd(value);
        // console.log(value);
        // console.log(value);
        // const n = e.target.value;

        // if (n.length > 2)
        //     setClassOd("Od Error")
        // else
        //     setClassOd("Od")
        // console.log(e.target.className);
    }

    // const onChangeH = ({ target: { value } }) => {
    //     const n = value;
    //     if (n <= 0 || n > 23)
    //         setClassOd("Od timeHError")
    //     else
    //         setClassOd("Od")

    //     setTimeH(n);
    // }

    // const onChangeM = ({ target: { value } }) => {
    //     const n = value;
    //     if (n <= 0 || n > 59)
    //         setClassOd("Od timeHError")
    //     else
    //         setClassOd("Od")

    //     setTimeM(n);
    // }

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
                <td >
                    <div className={classOd}>
                        <input
                            name='godzinyOd'
                            className='time'
                            onChange={e => setTimeHOd(e.target.value)}
                        />
                        <div className='timeBreak'>:</div>
                        <input
                            name='minutyOd'
                            className='time minuty'
                            onChange={e => setTimeMOd(e.target.value)}
                        />
                    </div>
                </td>
                <td >
                    <div className={classDo}>
                        <input
                            name='godzinyOd'
                            className='time'
                            onChange={e => setTimeHDo(e.target.value)}
                        />
                        <div className='timeBreak'>:</div>
                        <input
                            name='minutyOd'
                            className='time minuty'
                            onChange={e => setTimeMDo(e.target.value)}
                        />
                    </div>
                </td>
                <td>
                    {/* <button className='btnAdd'>+</button>
                    <button className='btnAdd'>-</button> */}
                </td>
                {/* <td></td>
                <td></td>
                <td></td> */}
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