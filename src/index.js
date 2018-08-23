import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import response from "./redux/reducers/reducers";
import {Provider} from "react-redux";
import App from './components/containers/Quiz';

const store = createStore(response);
console.log(store.getState());
console.log(<App/>);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
