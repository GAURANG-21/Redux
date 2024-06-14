import Followers from "./features/followers/Followers.jsx";
import Subscribers from "./features/subscribers/Subscribers.jsx";
import Users from "./features/users/Users.jsx";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5vh",
        margin: "20vh",
      }}
    >
      <Followers />
      <Subscribers />
      <Users />
    </div>
  );
};

export default App;
