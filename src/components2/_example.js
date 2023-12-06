import React, { useState } from 'react';

function TodoApp() {
  // 할 일 목록과 현재 입력 중인 할 일 상태
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // 새로운 할 일 추가
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  // 할 일 삭제
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>

      {/* 새로운 할 일 입력 */}
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>

      {/* 할 일 목록 */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>

      
  );
}

export default TodoApp;
