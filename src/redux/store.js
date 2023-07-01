import { configureStore } from "@reduxjs/toolkit";
import stockSlicer from "./slices/stocks"
export const store = configureStore({
    reducer: {
        stock:stockSlicer
    },
  });

  export var RootState = store.getState;
  export var AppDispatch = store.dispatch;