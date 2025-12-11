import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  // CREATE - Add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };
    setTodos([newTodo, ...todos]);
  };

  // READ - Get all todos (already done with state)
  
  // UPDATE - Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // UPDATE - Edit todo text
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // DELETE - Remove a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>📝 Todo List</h1>
        <p className="subtitle">Stay organized and manage your tasks</p>
        
        <TodoForm onAddTodo={addTodo} />
        
        <div className="stats">
          <span>Total: {todos.length}</span>
          <span>Completed: {todos.filter(t => t.completed).length}</span>
          <span>Pending: {todos.filter(t => !t.completed).length}</span>
        </div>

        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onEditTodo={editTodo}
          onDeleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
