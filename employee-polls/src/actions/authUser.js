export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const SAVE_QUESTION_ANSWER_AUTHED_USER =
  "SAVE_QUESTION_ANSWER_AUTHED_USER";
export const LOGOUT = "LOGOUT";

export function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}

export function logout() {
  localStorage.removeItem('previousSearch')
  return {
    type: LOGOUT,
  };
}

export function saveQuestionAnswerAuthedUser(qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER_AUTHED_USER,
    qid,
    answer,
  };
}
