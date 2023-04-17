import React from 'react';
import TodoShow from './TodoShow';
import "../App.css";

function TodoLists( {todos, onDelete, markTodo} ) {

  const renderedTodos = todos.length > 0 ? todos.map(todo => {
    return <TodoShow onDelete={onDelete} markTodo={markTodo} key={todo.id} todo={todo} todos={todos} />
  }) : (
      <div className="notodo__found">
        <span>?</span>
        <h1>No Todos !!</h1>
      </div>);

  return (
    <div className="rendered__todos">
      {renderedTodos}
    </div>
  )
}

export default TodoLists
