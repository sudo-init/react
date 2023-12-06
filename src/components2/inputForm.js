
import React, {useState} from "react";


export default function InputForm({addToDoList}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
        addToDoList(inputValue)
        setInputValue('');
    }
  };

  return (
      <div>
      <form onSubmit={handleAdd} >
 
        <input 
          type="text" 
          value={inputValue}
          id="to-do-input" 
          onChange={handleInputChange}
          placeholder="Input to do"
        />
      {/* <button type="submit">+</button> */}
      <button onClick={handleAdd}>+</button>
      </form>
      </div>
      
  );
}