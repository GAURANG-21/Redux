import { configureStore } from "@reduxjs/toolkit";
import followersReducer from "../features/followers/followersSlice.js";
import subscribersReducer from "../features/subscribers/subscribersSlice.js";
import newsReducer from "../features/users/userSlice.js";

const store = configureStore({
  reducer: {
    followers: followersReducer,
    subscribers: subscribersReducer,
    news: newsReducer,
  },
  //The middleware object expects list of middlewares used.
  //* middleware : [list_of_middlewares]
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
