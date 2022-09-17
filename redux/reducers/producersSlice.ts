import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProducersState {
  search: string;
}

const initialState: ProducersState = {
  search: "",
};

export const ProducersSlice = createSlice({
  name: "producers",
  initialState,
  reducers: {
    searchFilter: (state: ProducersState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { searchFilter } = ProducersSlice.actions;
export default ProducersSlice.reducer;
