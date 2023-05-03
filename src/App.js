/*import "./App.css";
import React from 'react'
import Display from "./components/display";
import Counter from "./components/counter";
import Colour from "./components/colours";
import Book from "./components/book/bookstore";
function App() {
  return (
    <React.Fragment>
      <Display></Display>
      <Counter></Counter>
      <Colour></Colour>
      <Book></Book>

    </React.Fragment>
  );
}

export default App;

*/



import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask) return;
    setTodoList([...todoList, { task: newTask, isCompleted: false }]);
    setNewTask('');
  };

  const handleCheck = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].isCompleted = !updatedTodoList[index].isCompleted;
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter new task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            <input type="checkbox" checked={item.isCompleted} onChange={() => handleCheck(index)} />
            <span style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


