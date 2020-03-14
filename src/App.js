import React, { useState, useEffect } from "react";
import "./App.css";
import { Main, Controls, Count, Control } from "./components";

function getStateFromLocalStorage(state) {
  const storage = localStorage.getItem("counterStorage");
  if (!storage) return 0;
  return JSON.parse(storage).count;
}

function App() {
  const [count, setCount] = useState(getStateFromLocalStorage());

  const increment = () => {
    setCount(c => c + 1);
  };

  const decrement = () => {
    setCount(c => c - 1);
  };

  const reset = () => {
    setCount(c => 0);
  };

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  useEffect(() => {
    localStorage.setItem("counterStorage", JSON.stringify({ count }));
  }, [count]);

  return (
    <Main className="counter">
      <Count className="count">{count}</Count>
      <Controls className="controls">
        <Control onClick={increment}>Increment</Control>
        <Control onClick={decrement}>Decrement</Control>
        <Control onClick={reset}>Reset</Control>
      </Controls>
    </Main>
  );
}

export default App;
