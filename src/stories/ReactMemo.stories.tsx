import React, {useState} from 'react';

export default {
    title: 'React.memo demo',
};


const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>;

};
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS');
    return <div>{props.users.map((u, i) => <div key={i}>{u} </div>)}</div>;

};
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(10)
    const[users, setUsers] = useState(['Dim', 'Valera', 'Artem'])

    const addUser = () => {
        setUsers([...users, 'Katya'])
    }
    return <>
        <button onClick={()=> {setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>add User</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>;
};


