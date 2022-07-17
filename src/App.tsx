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

            <Rating value={0}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={true}/>

            <Rating value={7}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>

        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1> {props.title}</h1>
    )
}

export default App;


