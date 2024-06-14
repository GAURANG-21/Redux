import { useSelector } from "react-redux";

const Followers = () => {
  const noOfSubscribers = useSelector(
    (state) => state.subscribers.noOfSubscribers
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div>NUMBER OF SUBSCRIBERS - {noOfSubscribers}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button>SUBSCRIBE NOW</button>
        <button>UNSUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Followers;
