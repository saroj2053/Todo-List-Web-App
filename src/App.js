import React, { useState } from 'react';
import "./App.css";
import TodoCreate from './components/TodoCreate';
import TodoLists from "./components/TodoLists";
import Navbar from './components/Navbar';


function App() {
  const [todos, setTodos] = useState([{id: 1, todotext: "Hey this is the default todo", isDone: false}]);


  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter(todo => {
      return todo.id!==id;
    });
    setTodos(updatedTodos);
  };

   const markTodoById = (id => {
    const retrievedTodos = todos.map(todo => {
      if(todo.id ===id) {
        return {...todo, isDone: true};
      }
      return todo;
    });
   
    setTodos(retrievedTodos);
    });

  const createTodo =  (text) => {
    const updatedTodos = [
      { id: Math.round(Math.random() * 9999),
        todotext: text,
        isDone: false
      }, ...todos
    ]
    setTodos(updatedTodos);
  }


  return (
    <>
    <Navbar />
    <div className="container">
        <TodoCreate onCreate={createTodo}/>
        <TodoLists  todos={todos} onDelete={deleteTodoById} markTodo={markTodoById}/>
    </div>
    </>
  )
}

export default App
