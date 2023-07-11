export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER_QUESTION = "SAVE_QUESTION_ANSWER_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export function saveQuestionAnswerQuestion(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}



export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}
