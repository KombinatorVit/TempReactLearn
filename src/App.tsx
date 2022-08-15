import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';

import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import {UncontrilledOnOff} from './components/OnOff/UncontrolledOnOff';
import Accordion from './components/Accordion/Accordion';
import RandomNumber from './components/RandomNumber/RundomNumber';

function App() {

    let [ratingValue, setRatingValue] = useState<0|1|2|3|4|5>(1)
    // let [collapsed, setControlledAccordionCollapsed] = useState<boolean>(false)
    // let [switchOn, setSwitchOn] = useState<boolean>(true)

    console.log('App rendering');


    return (
        <div className={'App'}>
            {/*<PageTitle title={'PageTitle component'}/>*/}
            {/*<PageTitle title={'Main Text'}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={ratingValue}/>*/}
<UncontrolledAccordion title={'РРР'} />
            <UncontrolledRating />

            {/*<UncontrilledOnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<OnOff on={false} />*/}
            {/*<OnOff on={true} />*/}
            {/*<OnOff on={false} />*/}
            {/*<Accordion collapsed={true}/>*/}
            {/*<Accordion collapsed={false}/>*/}
            <RandomNumber />

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


