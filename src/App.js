
import './App.css';
import { useState } from 'react';
import InputForm from './components2/inputForm';
import TodoItem from './components2/toDoItem';


function ToDoList() {
  const [items, setItems] = useState([]);

  const [value, setValue] = useState("");

  const addToDoList = (value) => {
    setItems([...items, value]);
    console.log(value)
  }

  const deleteToDo = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Test</h1>
      {/* <Form/> */}
      {/* <SearchBox/> */}
      <InputForm addToDoList={addToDoList}/>

      <div>
        <h2>List</h2>
        {items.map((item, index) => (
          <TodoItem 
            key={index} 
            text={item} 
            onDelete={() => deleteToDo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
