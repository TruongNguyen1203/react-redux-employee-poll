import { useState } from "react";
import ListQuestions from "./ListQuestions";
import { connect } from "react-redux";

const DashboardPage = (props) => {
  const [isUnansweredShow, setUnanswerShow] = useState(true);

  const [isAnsweredShow, setAnswerShow] = useState(false);

  const handleShowUnanswer = () => {
    setUnanswerShow(true);

    setAnswerShow(false);
  };

  const handleShowAnswer = () => {
    setAnswerShow(true);

    setUnanswerShow(false);
  };

  return (
    <div>
      <div className="toggle-category">
        <button
          onClick={() => handleShowUnanswer()}
          disabled={isUnansweredShow}
        >
          Unanswered Poll
        </button>

        <button onClick={() => handleShowAnswer()} disabled={isAnsweredShow}>
          Answered Poll
        </button>
      </div>

      {isUnansweredShow && (
        <div className="questions-container">
          <h3>New Questions</h3>

          <hr />

          <ListQuestions questions={props["unAnswers"]} />
        </div>
      )}

      {isAnsweredShow && (
        <div className="questions-container">
          <h3>Done</h3>

          <hr />

          <ListQuestions questions={props["answers"]} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authUser, questions }) => {
  const answersQuestionIds = Object.keys(authUser.answers);

  const answers = answersQuestionIds

    .map((questionId) => questions[questionId])

    .sort((a, b) => b.timestamp - a.timestamp);

  const unAnswersQuestionIds = Object.keys(questions).filter(
    (questionId) => !answersQuestionIds.includes(questionId)
  );

  const unAnswers = unAnswersQuestionIds

    .map((id) => questions[id])

    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answers,

    unAnswers,
  };
};

export default connect(mapStateToProps)(DashboardPage);
