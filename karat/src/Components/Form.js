import React,{Component} from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            comments:'',
            topic:'react'
        }
    }
    handleusername=(Event)=>{
        this.setState({username:Event.target.value
        })
    }

    handlepassword=(Event)=>{
        this.setState({password:Event.target.value
        })
     }

    handlecomments=(Event)=>{
        this.setState({comments:Event.target.value
        })
    }

    handletopic=(Event)=>{
        this.setState({topic:Event.target.value
        })
     }

    handlesubmit=()=>{
        alert(`${this.state.username} ${this.state.password} ${this.state.comments} ${this.state.topic}`)
    }

    render(){
        return(
            <p style={{background:"skyblue", border:"2px solid black",borderRadius:"20px",margin:"auto",padding:"10px",width:"250px"}}>Form Component
            <form onSubmit={this.handlesubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={this.state.username} onChange={this.handleusername}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={this.state.password} onChange={this.handlepassword}></input>
                </div>
                <div>
                    <label>Comments:</label>
                    <textarea value={this.state.comments} onChange={this.handlecomments}></textarea>
                </div>
                <div>
                    <label>Topic:</label>
                    <select value={this.state.topic} onChange={this.handletopic}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="python">Python</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
            </p>
        )
    }
}

export default Form;