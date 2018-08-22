import { RESPONSE } from "./action_types";

export function answerQuestion(id,answer) {
  return {
    type: RESPONSE,
    answer: answer,
    id: id
  };
}
