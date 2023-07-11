import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {useState} from 'react'
import {setAuthedUser} from '../actions/authUser'
const LoginPage = (props) => {
  const navigate = useNavigate();
  const [choosedUserId, setChooseUserId] = useState("");

  const onChangeUser = (e) => {
    setChooseUserId(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(props.users[choosedUserId]));
    navigate("/");
  };
  return (
    <div className="login">
      <h1>Employee Polls</h1>
      <img src="/login-img.webp" alt="login-img" className="login-img"></img>
      <h3>Log In</h3>

      {props.users && (
        <select onChange={(e) => onChangeUser(e)} data-testid="user-select">
          <option value="">Choose an User</option>
          {Object.keys(props.users).map((userId) => (
            <option key={userId} value={userId}>{props.users[userId].name}</option>
          ))}
        </select>
      )}

      <button onClick={(e) => handleLogin(e)} data-testid="login-button">Submit</button>
    </div>
  );
};
export const mapStateToProps = ({ users }) => ({
  users: users,
});
export default connect(mapStateToProps)(LoginPage);
