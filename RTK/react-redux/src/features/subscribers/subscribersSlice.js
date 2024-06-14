import { createSlice } from "@reduxjs/toolkit";

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

  //* Use of extraReducers is: if for each increase in followers, I need to increase the subscriber.
  //* If I need to update the state of a slice which is dependent on another slice.
  //! "createSlice.extraReducers" notation has been removed. It now accepts only "builder callback" notation.
  //!   extraReducers: {
  //!    // Add reducers that you want to combine here
  //!   ["subscribers/incrementSubscribers"]: (state) =>
  //!      (state.noOfSubscribers += 1),
  //!   },

  extraReducers: (builder) => {
    // console.log(builder.addCase.toString());
    builder.addCase("followers/incrementFollowers", (state) => {
      state.noOfSubscribers += 1;
    });
  },
});

const subscriberActions = subscribers.actions;

export default subscribers.reducer;
export {subscriberActions};
