import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { Global } from "@emotion/core";

import App from "./components/App";

import rootReducer from "./reducer";
import { globalCSS } from "./style";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Global styles={globalCSS} />
    <App />
  </Provider>,
  document.getElementById("root")
);
