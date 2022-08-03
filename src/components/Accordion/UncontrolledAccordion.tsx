import React from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';


type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onChange: ()=> void
}

function UncontrolledAccordion(props: AccordionPropsType) {

        return <div>
            <AccordionTitle title2={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody />}

        </div>;

}




export default UncontrolledAccordion;