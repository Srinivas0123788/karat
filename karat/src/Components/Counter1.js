import React, {useState} from 'react';

function Counter1(){
    const [count,setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if(count>0){
            setCount(count - 1);
        }
    };
    const reset = () => setCount(0);
    return(
        <div style={{background:"skyblue",border:"2px solid black",borderRadius:"20px",margin:"auto",padding:"10px",width:"250px"}}>
            <h1>Count: {count}</h1>
            <button style={{background:"green",border:"2px solid black",borderRadius:"20px"}} onClick={increment}>Increment</button>
            <button style={{background:"red",border:"2px solid black",borderRadius:"20px"}} onClick={decrement}>Decrement</button>
            <button style={{background:"yellow",border:"2px solid black",borderRadius:"20px"}} onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter1;