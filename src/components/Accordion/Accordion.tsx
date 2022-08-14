import React from 'react';

const Accordion = () => {
    return (
        <div>
            <AccordionBody />
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

export default Accordion;