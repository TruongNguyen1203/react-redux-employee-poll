import { connect } from "react-redux";
import { useState } from "react";
import { handleSaveQuestion } from "../actions/shared";
import { useNavigate } from "react-router-dom";
const NewPage = (props) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const navigate = useNavigate();
  const handleOpionOneChange = (e) => {
    setOptionOne(e.target.value);
  };

  const handleOpionTwoChange = (e) => {
    setOptionTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: props.authUser.id,
    };
    props.dispatch(handleSaveQuestion(question));
    setOptionOne("");
    setOptionTwo("");
    navigate("/");
  };
  return (
    <div className="new-page">
      <h1>Would You Rather</h1>
      <h3>Create Your Own Poll</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>First Option</label>
        <input
          placeholder="Option One"
          type="text"
          onChange={(e) => handleOpionOneChange(e)}
          value={optionOne}
          data-testid = "option-one"
        />
        <label>Second Option</label>
        <input
          placeholder="Option Two"
          type="text"
          onChange={(e) => handleOpionTwoChange(e)}
          value={optionTwo}
          data-testid="option-two"
        />
        <button disabled={optionOne === "" || optionTwo === ""} data-testid="submit-new-btn">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authUser }) => {
  return { authUser };
};
export default connect(mapStateToProps)(NewPage);
