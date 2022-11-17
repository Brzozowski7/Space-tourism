import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    allData: dataSliceReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
