import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface SearchFormState {
  locationField: string;
}

export const initialState: SearchFormState = {
  locationField: "",
};

export const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    changeLocationField: (state, action: PayloadAction<string>) => {
      state.locationField = action.payload;
    },
  },
});

export const { changeLocationField } = searchFormSlice.actions;

export const selectLocationField = (state: RootState) =>
  state.searchForm.locationField;

export default searchFormSlice.reducer;
