import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfFollowers: 1500,
};

const followers = createSlice({
  name: "followers",
  initialState,
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
export const { incrementFollowers, decrementFollowers } = followers.actions;
