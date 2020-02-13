import React from "react";

class StateComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            loggedIn: false,
            answer:"Yes",
            name: "Dia",
            age: 16
        }
    }
    render(){
        let msg;
        if(this.state.loggedIn){
            msg = "Yes";
        }
        else{
            msg = "No";
        }
        return(
            <div>
                <h1>Is state import !{this.state.answer}</h1>
                <h2>{this.state.name}</h2>
                <h3>{this.state.age} years old</h3>
                <h3>Are you currently logged in? - {msg}</h3>
            </div>
        )
    }
}

export default StateComponent;