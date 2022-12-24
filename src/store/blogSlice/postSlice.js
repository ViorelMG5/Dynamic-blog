import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    postList: [],
  },
  reducers: {
    setPostsList: (currentSlice, action) => {
      currentSlice.postList = action.payload;
    },
  },
});

export const { setPostsList } = postSlice.actions;
export const postReducer = postSlice.reducer;
