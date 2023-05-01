import "./App.css";
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
