import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

import { Provider } from "mobx-react";

import ItemList from "./store/ItemStore";

const itemList = new ItemList();

ReactDOM.render(
  <Provider itemList={itemList}>
    <App />
  </Provider>,
  document.getElementById("root")
);
