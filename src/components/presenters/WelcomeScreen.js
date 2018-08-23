import React from "react";
import { Link } from "react-router-dom";

console.log(<Link />);

const WelcomeScreen = props => {
  console.log(props);

  return (
    <div>
      <p>
        Welcome to Quiz app, start playing now.
        <Link to="/quiz" onClick={props.restart()}>
          Play Game
        </Link>
      </p>
    </div>
  );
};

export default WelcomeScreen;
