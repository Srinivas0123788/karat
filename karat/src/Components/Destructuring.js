import React from "react";

function Destructuring({name,place}){
    return(
        <div style={{background:"lightgreen",border:"2px solid black",borderRadius:"20px"}}>
            <h1>Hey everyone, myself {name},i'm from {place}</h1>
        </div>
    )
}

export default Destructuring;