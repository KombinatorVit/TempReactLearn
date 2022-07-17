import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";


type AccordionPropsType = {
    title: string,
    collapsed: boolean
}
 function Accordion(props: AccordionPropsType) {
     if (props.collapsed) {
         return <div>
             <AccordionTitle title2={props.title}/>
             <AccordionTitle title2={props.title}/>

             <AccordionBody/>

         </div>
     } else {
         return <div>
             <AccordionTitle title2={props.title}/>
         </div>
     }
 }
export default Accordion;