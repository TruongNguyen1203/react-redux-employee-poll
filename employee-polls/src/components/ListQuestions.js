import Question from "./Question";
const ListQuestions = (props) => {
  return (
    <div className="list">
      {props.questions && props.questions.map((question) => <Question key={question.id} question={question}/>)}
    </div>
  );
};
export default ListQuestions;
