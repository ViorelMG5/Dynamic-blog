import { postReducer } from "./blogSlice/postSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    postSlice: postReducer,
  },
});
