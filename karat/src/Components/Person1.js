import React from "react";

function Person1(props){
    return(
        <div style = {{background:"darkblue",margin:"auto",padding:"10px",border:"2px solid black",borderRadius:"20px",color:"white"}}>
            my favourites are {props.f1},{props.cricket},{props.football},{props.series}.
        </div>
    )
}

export default Person1;