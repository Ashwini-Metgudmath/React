import React from "react";

function ToDoItem(props){
    const textStyle = {
        textDecoration : "line-through",
        color: "#cdcdcd"
    }
    
        return(
            <div className="todo-item">
                <input type="checkbox" 
                checked={props.todoList.completed}
                onChange = {()=> props.handleChanged(props.todoList.id)}
                />
                <p style={props.todoList.completed ? textStyle : null}>{props.todoList.text}</p>
            </div>
        )
    
}

export default ToDoItem;