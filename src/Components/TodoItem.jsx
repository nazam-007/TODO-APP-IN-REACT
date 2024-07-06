import React from "react";

const TodoItems=(props)=>{
    return(
        <li className="todo-item">
            <span>
            <input type="checkbox" />
            <span className="Todo-Item-text">{props.text}</span>
            </span>
            <p>...</p>
        </li>
    )
}

export default TodoItems;