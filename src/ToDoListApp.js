
// TodoList.js

import React, { useState } from 'react';
import ToDoItem from './components/ToDoItem2';
import './css/ToDoList.css';

function ToDoListApp() {
  const [todoItems, setTodoItems] = useState([]);

  const addToDo = (text) => {
    setTodoItems([...todoItems, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedTodos);
  };

  const checkToDo = (id) => {
    const updatedTodos = todoItems.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoItems(updatedTodos);
  };

  return (
    <div className="kanban-board">
      
      <div className="column">
        <h2>To-Do</h2>
        <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addToDo(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
        {todoItems
          .map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onDelete={() => deleteTodo(todo.id)}
              check={() => checkToDo(todo.id)}
            />
          ))}
      </div>
      
    </div>
  );
}

export default ToDoListApp;
