import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import { createStore } from "redux";
import reducer from "./redux/reducers/reducers";
import { Provider } from "react-redux";
import App from "./components/containers/Quiz";
import WelcomeScreen from "./components/containers/WelcomeScreen";

const store = createStore(reducer);

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/quiz" component={App} />
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
