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
          user_answer: action.answer
        };
      });
      let newState = {
        questions: res,
        activeIndex: state.activeIndex + 1
      };
      return newState;

    case RESTART:
    //resetstate here, with new set of questions
      return  {
        questions: shuffle(questions).splice(0, 10),
        activeIndex: 0
      };
    default:
      return state;
  }
}

export default reducer;
