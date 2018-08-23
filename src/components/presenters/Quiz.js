import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Quiz = props => {
  console.log("poep", props);
  let index = props.store.activeIndex;
  let questionCount = props.store.questions.length;

  if (index < questionCount) {
    let activeQuestion = props.store.questions[index];
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
    let result = calculateResults(props.store.questions);
    return (
      <div className="test">
        <p>
          The end, {result}/{questionCount}
        </p>
        <button
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

function calculateResults(data) {
  let result = 0;
  data.forEach(item => {
    if (item.correct_answer === item.userAnswer) {
      result = result + 1;
    }
  });
  return result;
}

Quiz.propTypes = {
  onAnswerClick: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};

export default Quiz;
