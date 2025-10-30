import React, {Component} from "react";

//class component functions are stateful
class ClassFunction extends Component{
    render(){
        return(
            <div>
                <h1 style={{border:"2px solid black",borderRadius:"20px",background:"grey"}}>Class Component</h1>
            </div>
        )
    }
}

export default ClassFunction;