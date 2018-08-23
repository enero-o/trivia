import { RESPONSE, NEXT_QUESTION } from "./../actions/action_types";
import questions from "./../../questions";

let intialState = {
  questions: questions,
  activeIndex: 0
};
export function response(state = intialState, action) {
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
    default:
      return state;
  }
}

export function index(state = 0, action) {
  switch (action.type) {
    case NEXT_QUESTION:
      let res = state;
      return (res = res + 1);
    default:
      return state;
  }
}

//let reducers = combineReducers({ response, index });
export default response;
