import React from 'react';

type AccordionPropsType = {
    collapsed?:boolean
}
const Accordion = ({collapsed}: AccordionPropsType) => {


        return (
            <div>

                {!collapsed && <AccordionBody />}
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
    setCollapsed: (collapsed:boolean) => void
    collapsed?: boolean
}

export function AccordionTitle(props: AccordionTitlePropsType){

    function onClickSetCollapsed(){
        props.setCollapsed(!props.collapsed)}


    return (
        <h3 onClick={onClickSetCollapsed}>--{props.title}-- {props.collapsed}</h3>
    )

}

export default Accordion;