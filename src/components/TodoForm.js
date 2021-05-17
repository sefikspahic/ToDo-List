import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');
  const [requiredMessage, setMessage] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {

    e.preventDefault();
  if (!input) {
      setMessage('*This field is required');
  } 
  else {
    setMessage('');
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  }};

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
      <div className='clormesage'> {requiredMessage}</div>
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
          
          
    </form>
  );
}

export default TodoForm;
