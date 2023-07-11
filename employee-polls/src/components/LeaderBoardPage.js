import { connect } from "react-redux";
const LeaderBoardPage = ({ usersByDes }) => {
  return (
    <table className="leaderboard">
      <thead>
        <tr>
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {usersByDes.map((user) => {
          return (
            <tr key={user.id}>
              <td>
                <div className="user-info">
                  <img src={user.avatarURL}></img>
                  <div>
                    <p className="name">{user.name}</p>
                    <p className="id">{user.id}</p>
                  </div>
                </div>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
const mapStateToProps = ({ users }) => {
  const userIds = Object.keys(users);
  const usersByDes = userIds
    .map((id) => users[id])
    .sort(
      (a, b) =>
        Object.keys(b.answers).length +
        b.questions.length -
        (Object.keys(a.answers).length + a.questions.length)
    );
  return { usersByDes };
};
export default connect(mapStateToProps)(LeaderBoardPage);
