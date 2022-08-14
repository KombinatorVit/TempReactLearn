import React from 'react';

type AccordionPropsType = {
    collapsed:boolean
}
const Accordion = ({collapsed}: AccordionPropsType) => {


        return (
            <div>

                <AccordionTitle  title={'kl'}/>
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
}

export function AccordionTitle(props: AccordionTitlePropsType){
    console.log('AccordionTitle rendering');
    return (
        <h3 >--{props.title}--</h3>
    )

}

export default Accordion;