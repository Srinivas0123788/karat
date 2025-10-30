import React, {Component} from "react";

class Destructuring1 extends Component{
    render(){
        const {name,place} = this.props;
        return(
            <div style={{background:"darkgreen",border:"2px solid black",borderRadius:"20px",color:"white"}}>
                <h1>Hi everyone, myself {name}, i'm from {place}</h1>
            </div>
        )
    }
}

export default Destructuring1;