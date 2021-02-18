import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

import './App.css';

// test redux 
const App = ()=>{

  const counter  = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter : {counter} </h1>
      <button onClick={ ()=> dispatch(increment(5))}>+</button>
      <button onClick={ ()=> dispatch(decrement())} >-</button>
      {isLogged?(<h3>You are loggedin!</h3>):null}
    </div>
  );
}

export default App;
