import {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
export const MenuCollapsedMode = () => <Accordion title={'Menu'} accordionCollapsed={true} setControlledAccordionCollapsed={callback} />
export const UsersUncollapsedMode = () => <Accordion title={'Users'} accordionCollapsed={false} setControlledAccordionCollapsed={callback} />

export const ModeChanging = () => {

    const[value, setValue] = useState<boolean>(true)
    return <Accordion accordionCollapsed={value} title={'Users'} setControlledAccordionCollapsed={()=>setValue(!value)} />
}