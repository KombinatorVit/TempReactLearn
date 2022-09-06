import React, {useReducer} from 'react';
import { reducer } from './Reducer';


type AccordionPropsType = {
    title: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer,{collapsed:true} )

    return <div>
            {/*<AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>*/}

        {/*<AccordionTitle title={props.title} onClick={() => {dispatch({type:'TOGGLE-COLLAPSED'})}}/>*/}



        {/*{collapsed && <AccordionBody items={props.title[0]} onClick={} />}*/}

        </div>;

}




export default UncontrolledAccordion;