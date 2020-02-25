import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createEpicMiddleware } from "redux-observable";

import rootEpic from "./fetchCharacterEpic";
import rootReducer from "./reducer";

import App from "./Components/App";

import { Global } from "@emotion/core";
import { global } from "./style";

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <Global styles={global} />
    <App />
  </Provider>,
  document.getElementById("root")
);
