import ListQuestions from "./ListQuestions";
import { connect } from "react-redux";

const DashboardPage = (props) => {
  return (
    <div>
      <div className="questions-container">
        <h3>New Questions</h3>
        <hr />
        <ListQuestions questions={props["unAnswers"]} />
      </div>
      <div className="questions-container">
        <h3>Done</h3>
        <hr />
        <ListQuestions questions={props["answers"]} />
      </div>
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
