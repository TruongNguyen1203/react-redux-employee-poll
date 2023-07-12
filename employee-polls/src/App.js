import LoginPage from "./components/LoginPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import Nav from "./components/Nav";
import { useEffect } from "react";
import { handleInitData } from "./actions/shared";
import { connect } from "react-redux";
import RequiredAuth from "./components/RequiredAuth";
import PollPage from "./components/PollPage";
import NewPage from "./components/NewPage";
import NotFoundPage from "./components/NotFoundPage";
import LeaderBoardPage from "./components/LeaderBoardPage";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitData());
  }, [props]);
  return (
    <div className="app">
      {Object.keys(props.authUser).length !== 0 && <Nav />}
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/"
          exact
          element={
            <RequiredAuth>
              <DashboardPage />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/questions/:questionId"
          element={
            <RequiredAuth>
              <PollPage />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/add"
          exact
          element={
            <RequiredAuth>
              <NewPage />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/leaderboard"
          exact
          element={
            <RequiredAuth>
              <LeaderBoardPage />
            </RequiredAuth>
          }
        ></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};
export default connect(mapStateToProps)(App);
