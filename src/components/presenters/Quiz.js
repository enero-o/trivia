import React from "react";
import PropTypes from "prop-types";
import { RESPONSE } from "./../../redux/actions/action_types";
import Question from "./Question";

const Quiz = ({ question, onAnswerClick }) => {
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
        }}
      >
        FALSE
      </button>
    </div>
  );
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
