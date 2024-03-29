import React, {useState} from 'react';

 type RatingPropsType = {
    value: number
     onClick: (value:RatingValueType) => void
}
export type RatingValueType = 0 | 1| 2| 3| 4| 5;

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    );

}

type StarPropsType = {
    selected: boolean
    setValue?: (value: number) => void
    onClick: (value: RatingValueType)=> void
    value: RatingValueType
}

export const Star = (props: StarPropsType) => {

    return (
        <span onClick={()=> {props.onClick(props.value)}}>{props.selected ? <b>Star ---</b> : 'Star--'}

        </span>);
};