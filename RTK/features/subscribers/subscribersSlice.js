const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  noOfSubscribers: 1200,
};

const subscribers = createSlice({
  name: "subscribers",
  initialState,
  reducers: {
    incrementSubscribers(state, action) {
      if (action.payload == null) action.payload = 1;
      state.noOfSubscribers += action.payload;
    },
    decrementSubscribers(state, action) {
      if (action.payload == null) action.payload = 1;
      state.noOfSubscribers -= action.payload;
      if (state.noOfSubscribers < 0) state.noOfSubscribers = 0;
    },
  },
});

module.exports = subscribers.reducer;
module.exports.subscriberActions = subscribers.actions;
