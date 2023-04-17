import React, {useState} from 'react';
import "./TodoCreate.css";


function TodoCreate( { onCreate }) {

    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!text) return;
        onCreate(text);
        setText("");
    }


  return (
      <div className="todo-create">
          <h1 className="todoCreate__heading">Create Todo</h1>
          <form onSubmit={handleSubmit} className="form-todo">
              <div className="form-group">
                <span>&#9998;</span>
                <input type="text" value={text} onChange={handleChange} placeholder="Add new Todo" />    
              </div>
        </form> 
    </div>
  )
}

export default TodoCreate;
