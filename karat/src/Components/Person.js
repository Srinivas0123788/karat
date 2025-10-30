import React,{Component} from "react";

class Person extends Component{
    render(){
        const {name,age,company,id} = this.props;
        return(
            <div style = {{background:"darkred",margin:"auto",padding:"10px",border:"2px solid black",borderRadius:"20px",color:"white"}}>
                <h1>I am {name}.and i'm {age} years old, working in {company} and my id is {id}</h1>
            </div>
        )
    }
}

export default Person;