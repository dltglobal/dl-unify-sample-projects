import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "paymentSlice",
  initialState: {
    depositPaid: false,
  },
  reducers: {
    setDepositPaid: (state) => {
      state.depositPaid = true;
    },
    resetPaymentSliceState: (state) => {
      state.depositPaid = false;
    },
  },
});

export const { setDepositPaid, resetPaymentSliceState } = paymentSlice.actions;

export default paymentSlice.reducer;
