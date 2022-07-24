import React from 'react';
import './OnOff..css'

const OnOff = (props: any) => {
    return (
        <div className={'wrapper'}>
            <div style={{
                backgroundColor: 'blue',
                width: '700px',
                height: '300px',
                display: 'block',

            }}>
                on
            </div>
            <div style={{
                backgroundColor: 'green',
                width: '700px',
                height: '300px',
                display: 'block',

            }}>


                off
            </div>
            ;
            <div style={{borderRadius: '100%', backgroundColor: 'blue', width: '700px'}}>круг</div>;
        </div>
    )
        ;
};

export default OnOff;