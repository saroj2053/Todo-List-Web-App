import React from 'react';
import "./TodoShow.css";
import deleteIconSvg from "../assets/delete.svg";

function TodoShow({ todo, onDelete, markTodo}) {
  const handleClick = () => {
    onDelete(todo.id);
  }

  const handleMarkClick = () =>{
    markTodo(todo.id);
  }

  function getCharactersTillN(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="todo-show">
      <input type="checkbox" className='mark' style={{display: todo.isDone? "none" : ""}} onClick={handleMarkClick}></input>
      <span style={{textDecoration: todo.isDone? "line-through" : " "}}>{getCharactersTillN(todo.todotext, 40)}</span>

      <div className="actions">
        <button className="delete" onClick={handleClick}><img src={deleteIconSvg} style={{width: "1.5rem"}} alt="delete-icon"/></button>
      </div>
      
    </div>
  )
}

export default TodoShow;
