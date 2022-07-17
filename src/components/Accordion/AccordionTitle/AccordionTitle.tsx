import React from "react";

type AccordionTitlePropsType = {
    title2: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <>

        <h3> {props.title2}</h3>

    </>
}

export default AccordionTitle;