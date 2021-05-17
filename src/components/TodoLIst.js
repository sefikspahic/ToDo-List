import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

function TodoList() {
  
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    var todos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(todos);
  }, [setTodos]);

  const addTodo = (todo) => {
  
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    
   
  
    localStorage.setItem("todos", JSON.stringify(newTodos));
  
    setTodos(newTodos);
  };
  

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(removedArr));
    setTodos(removedArr);
  };

  return (
    <>
      <h1>My To do List</h1>
     
      <TodoForm  onSubmit={addTodo} />
     
      <TodoItems
        todos={todos}
        removeTodo={removeTodo}
      />
    </>
  );
}


export default TodoList;
