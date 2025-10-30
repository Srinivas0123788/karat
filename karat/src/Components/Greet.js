import React from "react";
//props in basicfunction
function Greet(props){
    return(
        <div style={{border:"2px solid black",borderRadius:"20px",background:"orange"}}>
            <h1>Hello, {props.name}</h1>
        </div>
    )
}

export default Greet;