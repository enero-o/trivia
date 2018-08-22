import { RESPONSE } from "./action_types";

export function answerQuestion(answer) {
  return {
    type: RESPONSE,
    answer: answer
  };
}
