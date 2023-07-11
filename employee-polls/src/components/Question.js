import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

const Question = (props) => {
  const { question } = props;
  return (
    <div className="question-card">
      <p className="name" data-testid="question-author">{question.author}</p>
      <p className="date" data-testid="question-date">{formatDate(question.timestamp)}</p>
      <hr />
      <p>
        <Link to={`/questions/${question.id}`}>Show</Link>
      </p>
    </div>
  );
};

export default Question;
