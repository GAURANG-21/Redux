const store = require("./app/store.js");
const { followerActions } = require("./features/followers/followersSlice.js");

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(followerActions.incrementFollowers());
store.dispatch(followerActions.incrementFollowers(2));
store.dispatch(followerActions.incrementFollowers(3));
store.dispatch(followerActions.incrementFollowers(4));
store.dispatch(followerActions.decrementFollowers(4));
store.dispatch(followerActions.decrementFollowers(3));
store.dispatch(followerActions.decrementFollowers());

unsubscribe();
