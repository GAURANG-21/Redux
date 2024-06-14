import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { decrementSubscribers, incrementSubscribers } from "./subscribersSlice";

const Subscribers = () => {
  const noOfSubscribers = useSelector(
    (state) => state.subscribers.noOfSubscribers
  );

  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div>NUMBER OF SUBSCRIBERS - {noOfSubscribers}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => dispatch(incrementSubscribers(value))}>
          SUBSCRIBE NOW
        </button>
        <button onClick={() => dispatch(decrementSubscribers(value))}>
          UNSUBSCRIBE
        </button>
      </div>
      <input onChange={(e) => setValue(Number(e.target.value))} />
    </div>
  );
};

export default Subscribers;
