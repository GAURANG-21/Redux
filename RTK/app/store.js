const { configureStore } = require("@reduxjs/toolkit");
const followersReducer = require("../features/followers/followersSlice.js");
const subscribersReducer = require("../features/subscribers/subscribersSlice.js");
const logger = require("redux-logger").logger;


const store = configureStore({
  reducer: {
    followers: followersReducer,
    subscribers: subscribersReducer,
  },
  //The middleware object expects list of middlewares used.  
  //* middleware : [list_of_middlewares]
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
