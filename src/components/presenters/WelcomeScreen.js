import React from "react";
import { Link } from "react-router-dom";

console.log(<Link />);

const WelcomeScreen = props => {
  console.log(props);

  return (
    <div className="flex-item">
      <h2>Welcome to the Trivia Challenge!</h2>
      <h4>
        {" "}
        You will be presented with 10 True or False Questions Can you score
        100%?
      </h4>

      <Link to="/quiz" onClick={props.restart()}>
        <button className="green">Start Quiz</button>
      </Link>
    </div>
  );
};

export default WelcomeScreen;
