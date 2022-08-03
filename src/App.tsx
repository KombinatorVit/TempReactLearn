import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';

import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';

function App() {

    let [ratingValue, setRatingValue] = useState<0|1|2|3|4|5>(1)

    console.log('App rendering');
    return (
        <div className={'App'}>
            {/*<PageTitle title={'PageTitle component'}/>*/}
            {/*<PageTitle title={'Main Text'}/>*/}

            {/*/!*<Rating value={0}/>*!/*/}
            {/*<UncontrolledAccordion title={'Users'} collapsed={false}/>*/}
            <Rating value={ratingValue}/>

            {/*<UncontrolledRating />*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
            {/*<div>1</div>*/}
            {/*<div>2</div>*/}
            {/*<div>3</div>*/}
            {/*<div>4</div>*/}
            {/*<div>5</div>*/}
            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}


        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1> {props.title}</h1>
    );
}

export default App;


