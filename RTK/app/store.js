const { configureStore } = require("@reduxjs/toolkit");
const followersReducer = require("../features/followers/followersSlice.js");

const store = configureStore({
  reducer: {
    followers: followersReducer,
  },
});

module.exports = store;
