import React, {FC} from 'react';
import {ItemType} from '../Select/Select';

export type AccordionPropsType = {
    accordionCollapsed: boolean
    title: string
    setControlledAccordionCollapsed: (accordionCollapsed: boolean) => void
    items: Array<ItemType>
    onClick: (value: any) => void
}
const Accordion = ({
                       accordionCollapsed,
                       title,
                       setControlledAccordionCollapsed,
                       items,
                       onClick
                   }: AccordionPropsType) => {



    return (
        <div>
            <AccordionTitle title={title} setControlledAccordionCollapsed={setControlledAccordionCollapsed}
                            accordionCollapsed={accordionCollapsed}/>
            {!accordionCollapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    );


};

export type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}


export function AccordionBody(props: AccordionBodyPropsType) {
    return <>

        <ul>
            {props.items.map((i) => <li onClick={() => {
                props.onClick(i.value);
            }} key={i.value}>{i.title}</li>)}

        </ul>

    </>;
}

type AccordionTitlePropsType = {
    title: string
    setControlledAccordionCollapsed: (accordionCollapsed: boolean) => void
    accordionCollapsed: boolean
}

export function AccordionTitle(props: AccordionTitlePropsType) {

    function onClick() {
        props.setControlledAccordionCollapsed(!props.accordionCollapsed);
    }

    return (
        <h3 onClick={onClick}>--{props.title}-- </h3>
    );

}

export default Accordion;