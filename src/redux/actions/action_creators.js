import { RESPONSE, RESTART } from "./action_types";

export function answerQuestion(id, answer) {
  return {
    type: RESPONSE,
    answer: answer,
    id: id
  };
}

export function restart() {
  return { type: RESTART };
}
