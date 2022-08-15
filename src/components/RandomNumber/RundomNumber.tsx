import React, {useState} from 'react';



function RandomNumber() {
    const[numbers, setNumbers] = useState([1, 2, 3, 536346, 4325, 4235235])
    const addRandomNumber = () => {
        let newNumber = Math.round(Math.random() * 100)

        setNumbers([...numbers, newNumber])
    }
    return (
        <div>
            <ul>
            {numbers.map((n:number, index)=> <li key={index}>{n}  </li>)}
                    <button onClick={addRandomNumber}> Add Random Number</button>
            </ul>
        </div>
    );
}

export default RandomNumber;