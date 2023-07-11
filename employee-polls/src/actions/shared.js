import { _getUsers, _saveQuestionAnswer } from "../utils/_DATA";
import {
  receiveUsers,
  saveQuestionAnswerUser,
  saveQuestionUser,
} from "./users";
import { receiveQuestions, saveQuestionAnswerQuestion, saveQuestion } from "./questions";
import { getInitialData } from "../utils/api";
import { saveQuestionAnswerAuthedUser } from "./authUser";
import { _saveQuestion } from "../utils/_DATA";


export const handleInitData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
};

export const handleSaveQuestionAnswer = (authedUser, qid, answer) => {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer }).then((result) => {
      dispatch(saveQuestionAnswerUser(authedUser, qid, answer));
      dispatch(saveQuestionAnswerQuestion(authedUser, qid, answer));
      dispatch(saveQuestionAnswerAuthedUser(qid, answer));
    });
  };
};

export function handleSaveQuestion(question) {
  return (dispatch) => {
    return _saveQuestion(question).then((q) => {
      dispatch(saveQuestion(q));
      dispatch(saveQuestionUser(q));
    });
  };
}
