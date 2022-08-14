import React, {useState} from 'react';
import { AccordionBody } from './Accordion';


type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log( 'Accordion rendering');
    let [collapsed, setCollapsed] = useState(false)

    return <div>
            <AccordionTitle title={props.title} onClick={()=> {setCollapsed(!collapsed)}}/>
            {!props.collapsed && <AccordionBody />}

        </div>;

}

type AccordionTitlePropsType = {
    title:string
    onClick:()=>void
}

function AccordionTitle(props:AccordionTitlePropsType){
    console.log('AccordionTitle rendering');
return (
    <h3 onClick={() =>{props.onClick()} }>--{props.title}--</h3>
)

}


export default UncontrolledAccordion;