import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import GrudgeProvider from "./Components/GrudgeContext";

ReactDOM.render(
  <GrudgeProvider>
    <App />
  </GrudgeProvider>,
  document.getElementById("root")
);
