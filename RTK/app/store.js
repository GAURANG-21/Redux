const { configureStore } = require("@reduxjs/toolkit");
const followersReducer = require("../features/followers/followersSlice.js");
const subscribersReducer = require("../features/subscribers/subscribersSlice.js");

const store = configureStore({
  reducer: {
    followers: followersReducer,
    subscribers: subscribersReducer,
  },
});

module.exports = store;
