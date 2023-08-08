import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default foodSlice.reducer;
export const { addFilter } = foodSlice.actions;