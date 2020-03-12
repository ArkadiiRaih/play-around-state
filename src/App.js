import React from "react";
import "./App.css";
import { Main, Controls, Count, Control } from "./components";

const getStateFromLocalStorage = state => {
  const storage = localStorage.getItem("counterStorage");
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

const setStateToLocalStorage = state => {
  localStorage.setItem("counterStorage", JSON.stringify(state));
  return state;
};

const setStatetoTitle = state => {
  document.title = `Counter: ${state.count}`;
  return state;
};

function compose(...fns) {
  return function(arg) {
    fns.reduceRight((y, f) => f(y), arg);
  };
}

const callback = compose(setStateToLocalStorage, setStatetoTitle);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getStateFromLocalStorage();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(
      state => ({ count: state.count + 1 }),
      () => callback(this.state)
    );
  }

  decrement() {
    this.setState(
      state => ({ count: state.count - 1 }),
      () => callback(this.state)
    );
  }

  reset() {
    this.setState({ count: 0 }, () => callback(this.state));
  }

  render() {
    return (
      <Main className="counter">
        <Count className="count">{this.state.count}</Count>
        <Controls className="controls">
          <Control onClick={this.increment}>Increment</Control>
          <Control onClick={this.decrement}>Decrement</Control>
          <Control onClick={this.reset}>Reset</Control>
        </Controls>
      </Main>
    );
  }
}

export default App;
