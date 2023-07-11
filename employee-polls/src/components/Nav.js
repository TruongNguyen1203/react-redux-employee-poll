import { Link } from "react-router-dom";
import { logout } from "../actions/authUser";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Nav = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    props.dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="nav">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/add">New</Link>
      </nav>
      <nav>
        <div>
          <img alt="avt" src={props.authUser.avatarURL}></img>
          <span data-testid="user-id">{props.authUser.id}</span>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

const mapStateToProps = ({authUser}) => {
  return {
    authUser
  }
}
export default connect(mapStateToProps)(Nav);
