
import React from 'react';
import '../css/ToDoItem.css';


function TodoItem({ text , onDelete}) {
  return (
    <div className='todo-item'>
      <input type="checkbox" />
      <p>{text}</p>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default TodoItem;
