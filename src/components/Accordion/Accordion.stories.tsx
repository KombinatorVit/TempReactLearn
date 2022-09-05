import {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some items was clicked')
export const MenuCollapsedMode = () => <Accordion title={'Menu'} accordionCollapsed={true} setControlledAccordionCollapsed={callback} items={[]} onClick={onClickCallback} />
export const UsersUncollapsedMode = () => <Accordion title={'Users'} accordionCollapsed={false} setControlledAccordionCollapsed={callback} items={[{title:'Dim', value:1}, {title:'Maks', value:2}, {title:'Vit', value:3}]}
                                                     onClick={onClickCallback} />

export const ModeChanging = () => {

    const[value, setValue] = useState<boolean>(true)
    return <Accordion accordionCollapsed={value} title={'Users'} setControlledAccordionCollapsed={()=>setValue(!value)} items={[{title:'Dim', value:1},
        {title:'Maks', value:2},
        {title:'Vit', value:3}]} onClick={onClickCallback}/>
}