import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import todos from "./redux/reducers/todos";
import { TOGGLE_TODO } from "./redux/actions/action_types";

const store = createStore(todos);
let nextTodoId = 0;
class TodoApp extends React.Component {
  _addTodo() {}

  render() {
    return (
      <div>
        <input
          ref={node => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            if (this.input.value) {
              store.dispatch({
                type: "ADD_TODO",
                text: this.input.value,
                id: nextTodoId++
              });
            }
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(function(todo) {
            return (
              <li
                className={todo.completed ? "completed" : ""}
                onClick={() => {
                  store.dispatch({
                    type: TOGGLE_TODO,
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
      </div>
    );
  }
}

const render = function() {
  console.log(store.getState());
  ReactDOM.render(
    <TodoApp todos={store.getState()} />,
    document.getElementById("root")
  );
};
store.subscribe(render);
render();
