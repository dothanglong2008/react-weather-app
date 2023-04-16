import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/weatherSlice";
import searchFormReducer from "../components/weather/search/searchFormSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    searchForm: searchFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
