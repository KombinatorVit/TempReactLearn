
import {useState} from 'react';


export default {
    title: 'input',
    // component: input,
};





export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    return <select value={parentValue} onChange={(e)=> {
        setParentValue(e.currentTarget.value)
    }
    }>

        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Dnipro</option>
        <option value={'3'}>Kiev</option>
    </select>
}

