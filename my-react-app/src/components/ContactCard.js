import React from "react";

function ContactCard(props){
    return(
        <div>
            <img src={props.imgUrl} />
            <h3>{props.Name}</h3>
            <p>Phone No: {props.phoneNo}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard;