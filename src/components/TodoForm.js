import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please enter a task');
      return;
    }
    onAddTodo(input);
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
