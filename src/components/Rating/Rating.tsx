import React from "react";

export function Rating(props:any) {
    if (props.value === 0) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 1) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    } else {

        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>

            </div>
        )
    }
}
const Star = (props: any) => {
    console.log('Star rendering')
    if(props.selected){
        return <span>  <b>Star</b> </span>
    } else {
        return <span>  Star </span>

    }

}