import React from "react";
import "./App.css";
import { Main, Controls, Count, Control } from "./components";
import { connect } from "react-redux";
import { increment, decrement } from "./redux";

function App({ count, increment, decrement }) {
  return (
    <Main className="counter">
      <Count className="count">{count}</Count>
      <Controls className="controls">
        <Control onClick={increment}>Increment</Control>
        <Control onClick={decrement}>Decrement</Control>
        <Control>Reset</Control>
      </Controls>
    </Main>
  );
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
