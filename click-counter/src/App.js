import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from "react";

function App() {
  const [count,setCount] = useState(0);
  const [errorMsg,setErrorMsg] = useState(false);

  const checkCount = () => {
    if(count == 0) {
      setErrorMsg(true);
    }
    else {
      setCount(count-1);
    }
  }

  useEffect(()=>{
    console.log("HI THERE")
  },[])

  return (
    <div data-test="component-app">
    <h1 data-test="counter-display">
    The counter is currently&nbsp;
    <span data-test="count">{count}</span>
    </h1>
    <button data-test="increment-button" onClick={()=>{setCount(count+1); setErrorMsg(false)}}>Increment Counter</button>
    <button data-test="decrement-button" onClick={checkCount}>Decrement Counter</button>
    {errorMsg? <h1 data-test="error-message">Cannot decrement below 0!</h1> : null}
    </div>
  );
}

export default App;
