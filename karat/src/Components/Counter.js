import React,{Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state ={count : 0};
    }
    increment = () => {
        this.setState({count: this.state.count+1});
    }
    decrement = () => {
        if(this.state.count>0){
            this.setState({count: this.state.count-1});
        }    
    }
    reset = () =>{
        this.setState({count: 0});
    }
    render(){
        return(
            <div style={{background:"lightgrey",border:"2px solid black",borderRadius:"20px",padding:"10px",width:"250px",margin:"auto"}}>
                <h1>Count: {this.state.count}</h1>
                <button style={{backgroundColor:"green",border:"2px solid black",borderRadius:"20px"}} onClick={this.increment}>Increment</button>
                <button style={{backgroundColor:"red",border:"2px solid black",borderRadius:"20px"}} onClick={this.decrement}>Decrement</button>
                <button style={{backgroundColor:"yellow",border:"2px solid black",borderRadius:'20px'}} onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter;