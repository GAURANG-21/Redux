const store = require("./app/store.js");
const { followerActions } = require("./features/followers/followersSlice.js");
const {
  subscriberActions,
} = require("./features/subscribers/subscribersSlice.js");

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(followerActions.incrementFollowers());
store.dispatch(followerActions.incrementFollowers(2));
store.dispatch(followerActions.decrementFollowers());

store.dispatch(subscriberActions.incrementSubscribers());
store.dispatch(subscriberActions.decrementSubscribers(2));
store.dispatch(subscriberActions.decrementSubscribers());

unsubscribe();
