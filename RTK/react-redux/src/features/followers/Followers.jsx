import { useSelector } from "react-redux";

const Followers = () => {
  const noOfFollowers = useSelector((state) => state.followers.noOfFollowers);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div>NUMBER OF FOLLOWERS - {noOfFollowers}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button>FOLLOW NOW</button>
        <button>UNFOLLOW</button>
      </div>
    </div>
  );
};

export default Followers;
