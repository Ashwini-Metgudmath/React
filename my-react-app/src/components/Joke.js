import React from "react";


function Joke(props){
    return (
        <div>
            <p style={{display : !props.question && "none"}}>Question: {props.question}</p>
            <p style={{display: !props.answer && "none"}}>Answer: {props.answer}</p>
            <hr/>
        </div>
    )
}

export default Joke;