import React from "react";

type AccordionTitlePropsType = {
    title2: string
    onChange: ()=> void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <>

        <h3 onClick={props.onChange}> {props.title2}</h3>

    </>
}

export default AccordionTitle;