import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleTodo, onEditTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSaveEdit = () => {
    if (editText.trim() === '') {
      alert('Task cannot be empty');
      return;
    }
    onEditTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button className="save-btn" onClick={handleSaveEdit}>
            Save
          </button>
          <button className="cancel-btn" onClick={handleCancelEdit}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            className="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
          />
          <div className="todo-content">
            <p className="todo-text">{todo.text}</p>
            <small className="todo-date">{todo.createdAt}</small>
          </div>
          <div className="todo-actions">
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
              title="Edit task"
            >
              ✏️
            </button>
            <button
              className="delete-btn"
              onClick={() => onDeleteTodo(todo.id)}
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
