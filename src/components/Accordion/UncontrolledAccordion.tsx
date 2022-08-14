import React, {useState} from 'react';
import { AccordionBody, AccordionTitle } from './Accordion';


type AccordionPropsType = {
    title: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)

    return <div>
            <AccordionTitle title={props.title} />
        <button onClick={()=> { setCollapsed(!collapsed)}}>Toggle</button>
            {collapsed && <AccordionBody />}

        </div>;

}




export default UncontrolledAccordion;