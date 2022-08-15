import React from 'react';

export type AccordionPropsType = {
    accordionCollapsed:boolean
    title: string
    setControlledAccordionCollapsed: (accordionCollapsed:boolean)=> void
}
const Accordion = ({accordionCollapsed, title,setControlledAccordionCollapsed}: AccordionPropsType) => {


        return (
            <div>
<AccordionTitle title={title} setControlledAccordionCollapsed={setControlledAccordionCollapsed} accordionCollapsed={accordionCollapsed}/>
                {!accordionCollapsed && <AccordionBody />}
            </div>
        );



};



export function AccordionBody() {
    return <>

        <ul>
            <li>
                1
            </li>
            <li>
                2
            </li>
            <li>
                3
            </li>

        </ul>

    </>;
}

type AccordionTitlePropsType = {
    title: string
    setControlledAccordionCollapsed: (accordionCollapsed:boolean) => void
    accordionCollapsed: boolean
}

export function   AccordionTitle(props: AccordionTitlePropsType){

    function onClick() {
        props.setControlledAccordionCollapsed(!props.accordionCollapsed)
    }

    return (
        <h3 onClick={onClick}>--{props.title}-- </h3>
    )

}

export default Accordion;