import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import producersReducer from "./reducers/producersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    producers: producersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
