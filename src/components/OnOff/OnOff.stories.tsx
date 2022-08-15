import {OnOff} from './OnOff';
import {useState} from 'react';

export default {
    title: 'OnOff stories',
    component: OnOff
}

export const OnMode = () => <OnOff on={true} />
export const OffMode = () => <OnOff on={false} />

export const ModeChanging = () => {

    const[value, setValue] = useState<boolean>(true)
    return <OnOff on={value}/>
}