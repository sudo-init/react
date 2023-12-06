// TodoItem.js
import React from 'react';
import '../css/ToDoItem.css';

function ToDoItem({ todo, onDelete, check}) {
  const { id, text, completed } = todo;

  const handleChange = () => {
    check(id)
  }

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleChange}
        />
        {text}
      </label>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

export default ToDoItem;