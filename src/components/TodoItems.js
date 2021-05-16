import React from 'react';


const TodoItems = ({todos, removeTodo }) => {
 

  return todos.map((todo, index) => (
    <div onClick={() => removeTodo(todo.id)}
      className={'todo-row'}
      key={index}
    >
      <div key={todo.id} >
        {todo.text}
      </div>
    </div>
  ));
};

export default TodoItems;
