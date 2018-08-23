import { RESPONSE, RESTART } from "./../actions/action_types";
import questions from "./../../questions";
import { shuffle } from "./../../helpers"
//shuffle, shuffles and returns only 10 items from the array

let intialState = {
  questions: shuffle(questions).splice(0, 10),
  activeIndex: 0
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case RESPONSE:
      let res = state.questions.map(question => {
        if (question.id !== action.id) {
          return question;
        }
        return {
          ...question,
          userAnswer: action.answer
        };
      });
      let newState = {
        questions: res,
        activeIndex: state.activeIndex + 1
      };
      return newState;

    case RESTART:
    //use a new state here, for new set of questions
      return intialState
    default:
      return state;
  }
}

export default reducer;
