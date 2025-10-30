import React from "react";

function ConditionalRendering(){
    const isLoggedin = true;
    let message;
        if(isLoggedin){
                message =  <h1>Welcome</h1>  
            }
        else{
                message =  <h1>go back</h1>
            }
    return(
        <div style={{background:"lightgrey",margin:"auto",padding:"10px",width:"250px",border:"2px solid black",borderRadius:"20px"}}>
            {/* {isLoggedin ? <h1>Welcome Back!</h1> : <h1>Please sign up!</h1>} */}
            {message}
        </div>
    )
}

export default ConditionalRendering;