import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {

    console.log('App rendering')
    return (
        <div>
        <PageTitle title={'PageTitle component'}/>
            <PageTitle title={'Main Text'}/>

            <Rating value={3}/>
            <Accordion title={'Hello Accordion'}/>
            <Rating value={4}/>
            <Accordion title={'Learn JS!'}/>

        </div>
    );
}








function PageTitle(props: any) {
    return (
        <h1> {props.title}</h1>
    )
}

export default App;


