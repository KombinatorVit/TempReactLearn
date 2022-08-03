import React, {useState} from 'react';


type PropsType = {
    on: boolean
    onChange:(on:boolean)=> void
}


export const OnOff = (props: PropsType) => {




    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on? 'green' : 'white'

    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '2px',
        backgroundColor: props.on? 'green' : 'red'

    };
    return (
        <div>

            <div style={onStyle} onClick={()=> {props.onChange(false)}}>ON</div>
            <div style={offStyle} onClick={()=> {props.onChange(true)}}>OFF</div>
            <div style={indicatorStyle} ></div>
        </div>
    );

};