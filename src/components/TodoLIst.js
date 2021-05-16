import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let todos = [];
    for (let [key, value] of Object.entries(localStorage)) {
      let todo = {
        id: key,
        text: value,
      };
      todos.push(todo)
    }
    setTodos(todos);
  }, [setTodos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    localStorage.setItem(todo.id, todo.text);
    setTodos(newTodos);
  };


  const removeTodo = (id) => {
    localStorage.removeItem(id);
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };


  return (
    <>
      <h1>My To do List</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoItems
        todos={todos}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default TodoList;
