import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue(''); // Clear input after adding todo
  };

  return (
    <div className="todo-container">  
      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} className="todo-input" />
      <button onClick={handleAddTodo} className="todo-button">Add Todo</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item" dangerouslySetInnerHTML={{ __html: todo }}></li>
          // <li key={index} className="todo-item" >{todo}</li>
        ))}  
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
