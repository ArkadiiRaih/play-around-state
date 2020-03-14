import React, { useState, useEffect } from "react";
import "./App.css";
import { Main, Controls, Count, Control } from "./components";

// function getStateFromLocalStorage() {
//   const storage = localStorage.getItem("counterStorage");
//   if (!storage) return 0;
//   return JSON.parse(storage).count;
// }

// function setStateToLocalStorage(count) {
//   localStorage.setItem("counterStorage", JSON.stringify({ count }));
// }

function useLocalStorage(initialState, key) {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage)["value"];
    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  });

  return [value, setValue];
}

function App() {
  const [count, setCount] = useLocalStorage(0, "count");

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
