export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_QUESTION_ANSWER_USER = "SAVE_QUESTION_ANSWER_USER"
export const SAVE_QUESTION_USER = "SAVE_QUESTION_USER"

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveQuestionAnswerUser(authedUser, qid, answer) {
    return {
        type: SAVE_QUESTION_ANSWER_USER,
        authedUser,
        qid, 
        answer
    }
}

export function saveQuestionUser(question){
    return {
        type: SAVE_QUESTION_USER,
        question
    }
}
