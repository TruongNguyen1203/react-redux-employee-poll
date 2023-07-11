import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const RequiredAuth = (props) => {
  return Object.keys(props.authUser).length === 0 ? (
    <Navigate to="/login" replace />
  ) : (
    props.children
  );
};

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};

export default connect(mapStateToProps)(RequiredAuth);
