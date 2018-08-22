import { RESPONSE } from "./../actions/action_types";

export default function response(state = [], action) {
  switch (action.type) {
    case RESPONSE:
      return [
        ...state,
        {
          answer: action.answer
        }
      ];
    default:
      return state;
  }
}
