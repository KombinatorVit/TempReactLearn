import React, {useState} from 'react';
import './select.css'

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value:any) => void
    items: ItemType[]

}

export function Select(props: SelectPropsType) {
    const [showSelect, setShowSelect] = useState(false)
    const onClick = () => {
        setShowSelect(!showSelect)
    }
    const mapItem = props.items.map(i => <div className={'select__item'}>{i.title}</div>)
    return (
        <div className={'select'}>
            <div className={'select__header'} onClick={onClick}>{props.value}</div>
            {showSelect &&          <SelectItem mapItem={mapItem} />
            }

        </div>
    );

}


export  function SelectItem(props: any ) : any{
    return (
<div>
        {props.mapItem}
</div>
    )
}