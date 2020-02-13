import React from "react"

class LoggedInOut extends React.Component{
constructor(){
    super()
    this.state = {
        isLoggedIn : true,
    }
    this.changeState = this.changeState.bind(this)
}

changeState(){
    this.setState(prevState =>{
        return{
            isLoggedIn : !prevState.isLoggedIn
        }
    })
}


    render(){
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let DisplayText = this.state.isLoggedIn ? "Hi.. you are logged in!" : "You logged out!"
        return(
            <div>
                <h1>{DisplayText}</h1>
                <button onClick={this.changeState}>{buttonText}</button>
            </div>
        
        
        )
    }
}

export default LoggedInOut