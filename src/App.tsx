import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';

import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import Accordion from './components/Accordion/Accordion';
import {UncontrilledOnOff} from './components/OnOff/UncontrolledOnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(5)
    let [accordionCollapsed, setControlledAccordionCollapsed] = useState< boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(true)

    console.log('App rendering');


    return (
        <div className={'App'}>
            {/*<PageTitle title={'PageTitle component'}/>*/}
            {/*<PageTitle title={'Main Text'}/>*/}
            {/*<Rating value={5}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={5}/>*/}
            {/*<Rating value={ratingValue}/>*/}
{/*<UncontrolledAccordion title={'РРР'} />*/}
            <UncontrolledRating />

            <UncontrilledOnOff on={switchOn} onChange={()=>setSwitchOn(!switchOn)} />
            <OnOff on={false} />
            {/*<OnOff on={true} />*/}
            {/*<OnOff on={false} />*/}
            <Accordion accordionCollapsed={accordionCollapsed} title={'Пиво'} setControlledAccordionCollapsed={()=>{setControlledAccordionCollapsed(!accordionCollapsed)}}/>


        </div>
    );
}


// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     return (
//         <h1> {props.title}</h1>
//     );
// }

export default App;


