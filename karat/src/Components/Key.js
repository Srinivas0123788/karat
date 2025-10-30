import React,{Component} from "react";
import Person from "./Person";

class Key extends Component{
    render(){
        const persons = [
            {id:1,name:'srinivas',age:23,company:'accenture'},
            {id:2,name:'Abhirami',age:26,company:'accenture'},
        ]
        const personList = persons.map(person=><Person key={person.id} name={person.name} age={person.age} company={person.company} id={person.id}/>)
        return(
            <div>
                <h1>{personList}</h1>
            </div>
        )
    }
}

export default Key;