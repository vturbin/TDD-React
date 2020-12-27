import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  return (
    <div data-test="component-app">
    <h1 data-test="counter-display">App</h1>
    <button data-test="increment-button">Increment Counter</button>
    </div>
  );
}

export default App;
