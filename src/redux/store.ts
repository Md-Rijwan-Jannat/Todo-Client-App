import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import { baseApi } from "./api/api";

export const store = configureStore({
  reducer: {
    tasks: todoReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
