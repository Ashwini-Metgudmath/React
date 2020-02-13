import React from "react";

class MainContent extends React.Component{
    render(){
        return(
            <main>
                <p>Hello {this.props.msg}</p>
            </main>
        )
    }
    
}

export default MainContent;