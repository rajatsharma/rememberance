import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import navigation from "../features/navigation/Navigation.store";

export const store = configureStore({
  reducer: {
    navigation,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
