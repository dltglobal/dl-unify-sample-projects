import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState: {
    pressedButton: "Account",
  },
  reducers: {
    setPressedButton: (state, action) => {
      state.pressedButton = action.payload;
    },
    resetDashboardSlice: (state) => {
      state.pressedButton = "Account";
    },
  },
});

export const { setPressedButton, resetDashboardSlice } = dashboardSlice.actions;

export default dashboardSlice.reducer;
