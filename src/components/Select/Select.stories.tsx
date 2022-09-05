import {useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Select',
    component: Select,
};


export const WithValue = () => {
    const [value, setValue] = useState('2');

    return (
        <div>
            <Select onChange={setValue}
                    value={value}
                    items={[
                        {value: '1', title: 'KKKK'},
                        {value: '2', title: 'ddddd'},
                        {value: '3', title: 'mmm'}
                    ]}/>


        </div>
    );
};


export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return (
        <div>
            <Select
                onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'KKKK'},
                    {value: '2', title: 'ddddd'},
                    {value: '3', title: 'dddddd'}
                ]}/>


        </div>
    );
};