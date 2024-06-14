import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { incrementFollowers, decrementFollowers } from "./followersSlice";

const Followers = () => {
  const noOfFollowers = useSelector((state) => state.followers.noOfFollowers);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div>NUMBER OF FOLLOWERS - {noOfFollowers}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => dispatch(incrementFollowers(value))}>
          FOLLOW NOW
        </button>
        <button onClick={() => dispatch(decrementFollowers(value))}>
          UNFOLLOW
        </button>
      </div>
      <input type="number" onChange={(e) => setValue(Number(e.target.value))} />
    </div>
  );
};

export default Followers;
