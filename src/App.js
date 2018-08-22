import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RESPONSE } from "./redux/actions/action_types";
import Question from "./components/Question";

class App extends Component {
  questions = this.props.store.getState().questions;
  activeQuestion = this.questions[this.props.store.getState().activeIndex];

  render() {
    console.log(this.questions);
    console.log(this.props.store.getState().activeIndex);
    console.log(
      this.props.store.getState().questions[
        this.props.store.getState().activeIndex
      ]
    );
    return (
      <div>
        <Question
          question={
            this.props.store.getState().questions[
              this.props.store.getState().activeIndex
            ].question
          }
        />
        <button
          onClick={() => {
            this.props.store.dispatch({
              type: RESPONSE,
              answer: true,
              id: this.props.store.getState().activeIndex
            });
            console.log(this.props.store.getState().activeIndex);
            console.log(this.props.store.getState().questions);
          }}
        >
          TRUE
        </button>
        <button
          onClick={() => {
            this.props.store.dispatch({
              type: RESPONSE,
              answer: false,
              id: this.props.store.getState().activeIndex
            });
            console.log(this.props.store.getState());
          }}
        >
          FALSE
        </button>
      </div>
    );
  }
}
export default App;

// store.subscribe(render);
// render();

/*
<ul>
          {this.props.todos.map(function(todo) {
            return (
              <li
                className={todo.completed ? "completed" : ""}
                onClick={() => {
                  store.dispatch({
                    type: RESPONSE,
                    id: todo.id
                  });
                }}
                key={todo.id}
              >
                {todo.text}
              </li>
            );
          })}
        </ul>
*/
