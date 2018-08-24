import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { calculateResults } from "./../../helpers";

const Quiz = props => {
  console.log("props are", props);
  let activeIndex = props.store.activeIndex;
  let questionCount = props.store.questions.length;

  if (questionCount === 0) {
    // no more questions,
    return (
      <div>
        <p>You are out of trials, take a break and try again later</p>
      </div>
    );
  }

  if (activeIndex < questionCount) {
    // quiz is active
    let activeQuestion = props.store.questions[activeIndex];
    return (
      <div className="flex-item">
        <div>
          <small>Category - {activeQuestion.category}</small>
          <small>Difficulty - {activeQuestion.difficulty}</small>
          <p>{activeQuestion.question}</p>
        </div>
        <button
          className="green"
          onClick={() => {
            props.onAnswerClick(activeQuestion.id, true);
          }}
        >
          TRUE
        </button>
        <button
          className="red"
          onClick={() => {
            props.onAnswerClick(activeQuestion.id, false);
          }}
        >
          FALSE
        </button>
      </div>
    );
  } else {
    //active question is above the question count, show result
    let result = calculateResults(props.store.questions);
    return (
      <div>
        <p>The End, your score is</p>
        <h1>
          <strong>{result}</strong>/{questionCount}
        </h1>
        <ul>
          {props.store.questions.map((item, index) => {
            return (
              <li key={index}>
                <span
                  className={
                    item.correct_answer === item.user_answer
                      ? "fa fa-check-square"
                      : "fa fa-times-circle"
                  }
                />
                {item.question}
              </li>
            );
          })}
        </ul>
        <button
          className="green"
          onClick={() => {
            props.restart();
          }}
        >
          Play Again
        </button>
        <Link to="/">Quit</Link>
      </div>
    );
  }
};

Quiz.propTypes = {
  onAnswerClick: PropTypes.func.isRequired,
  store: PropTypes.shape({
    activeIndex: PropTypes.number.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        difficulty: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        correct_answer: PropTypes.bool.isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};

export default Quiz;
