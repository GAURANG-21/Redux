import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfFollowers: 1500,
};

const followers = createSlice({
  initialState,
  name: "followers",
  reducers: {
    incrementFollowers: (state, action) => {
      if (action.payload != null) state.noOfFollowers += action.payload;
      else state.noOfFollowers++;
    },
    decrementFollowers: (state, action) => {
      if (action.payload == null) action.payload = 1;
      state.noOfFollowers =
        state.noOfFollowers - action.payload >= 0
          ? state.noOfFollowers - action.payload
          : 0;
    },
  },
});

export default followers.reducer;
export const followerActions = followers.actions;
