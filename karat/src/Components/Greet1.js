import React,{Component} from 'react';
//props in class component function
class Greet1 extends Component{
    render(){
        return(
            <div style={{background:"green",border:"2px solid black",borderRadius:"20px"}}>
                <h1>Hi, {this.props.name}</h1>
            </div>
        )
    }
}

export default Greet1;