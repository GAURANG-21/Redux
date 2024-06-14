import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./userSlice.js";

const Users = () => {
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  return (
    <div>
      <div>List of News Title</div>
      {news.loading ? <div>Loading...</div> : null}
      {!news.loading && news.error ? <div>{news.error}</div> : null}
      {!news.loading && news.news.length > 0
        ? news.news.map((item) => {
            return <div>{item}</div>;
          })
        : null}
    </div>
  );
};

export default Users;
