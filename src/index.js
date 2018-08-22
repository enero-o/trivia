import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import response from "./redux/reducers/reducers";

const store = createStore(response);
console.log(store.getState());

function render() {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
}
render();
store.subscribe(render);
  