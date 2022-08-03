import React from "react";
import {rename} from 'fs';

type RatingPropsType = {
    value: number
}


export function Rating(props: RatingPropsType) {

        return (
            <div>
                <Star selected={props.value > 0}/>
                <Star selected={props.value > 1}/>
                <Star selected={props.value > 2}/>
                <Star selected={props.value > 3}/>
                <Star selected={props.value > 4}/>
            </div>
        )

}

type StarPropsType = {
    selected: boolean
    setValue?: (value:number)=> void
}

export const Star = (props: StarPropsType) => {
    console.log('Star rendering')


return <span>{ props.selected ? <b>Star</b> : 'Star'}</span>
}