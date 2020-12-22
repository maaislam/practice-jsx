import React, {useState} from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [maxReached, setMaxReached] = useState(false);

    const increaseCount = () => {
        if(!maxReached){
            setCounter(counter+1)
        }else{
            setCounter(counter-1);
        }
        if (counter===9){
              setMaxReached(true);
        }else if(counter===1){
            setMaxReached(false)
        }
       
    }


    return (
        <div className="ui segment container">
            <button className="ui primary button" onClick = {()=>increaseCount()}>
                Click Me
            </button>
            <div>
                <h1>Current Count: {counter}</h1>
            </div>
        </div>
    );
}

export default Counter;
