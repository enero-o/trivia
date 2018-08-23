import React from "react";
import PropTypes from "prop-types";

const Quiz = props => {
  console.log("poep", props);
  let index = props.store.activeIndex;
  let questionCount = props.store.questions.length;
  if(index < questionCount){
    let activeQuestion = props.store.questions[index].question;
    return (
      <div>
        <div>{activeQuestion}</div>;
        <button
          onClick={() => {
            props.onAnswerClick(index, true);
          }}
        >
          TRUE
        </button>
        <button
          onClick={() => {
            props.onAnswerClick(index, true);
          }}
        >
          FALSE
        </button>
      </div>
    );
  }
  else{
    return <p>The end</p>
  }
};

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
