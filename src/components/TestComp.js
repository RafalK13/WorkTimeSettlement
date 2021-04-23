import React from 'react';

const TestComp = () => {
    const styleRaf = {
        margin: '0 auto',
        height: '100px',
        width: '100px',
        backgroundColor: 'rgba(0,0,255,0.1)',
        border: ' 1px solid black ',
        lineHeight: '100px',
    }

    return (
        <>
            <div style={styleRaf}>XXX</div>
        </>
    );
}

export default TestComp;