import React,{Component} from "react";

class ConditionalRendering1 extends Component{
    constructor(props){
        super(props);
        this.state = {isLoggedin : false};
    }
    render(){
        const { isLoggedin } = this.state;
        let message;
                if(isLoggedin){
                   message =  <h1>Welcome</h1>  
                }
                else{
                   message =  <h1>go back</h1>
                }
        return(
            <div style= {{background:"indigo",margin:"auto",padding:"10px",width:"250px",border:"2px solid black",borderRadius:"20px"}}>
                {/* {isLoggedin ? <h1>Welcome User!</h1> : <h1>Please Sign up User!</h1>} */}
                {message}
            </div>
        )
    }
}

export default ConditionalRendering1;