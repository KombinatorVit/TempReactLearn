import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

 function Accordion(props: any) {

    return <div>
        <AccordionTitle title2={props.title}/>
        <AccordionTitle title2={props.title}/>

        <AccordionBody/>
        <AccordionBody/>
        <AccordionBody/>

    </div>
}

export default Accordion;