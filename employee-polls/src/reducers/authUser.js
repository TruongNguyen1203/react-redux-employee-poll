import { SET_AUTHED_USER, LOGOUT , SAVE_QUESTION_ANSWER_AUTHED_USER} from "../actions/authUser";

export default function authUser(state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...action.user,
      };
    case SAVE_QUESTION_ANSWER_AUTHED_USER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.qid]: action.answer,
        },
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
