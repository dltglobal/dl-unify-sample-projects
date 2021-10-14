import { configureStore } from "@reduxjs/toolkit";
import accountSliceReducer from "./slices/accountSlice.js";
import dashboardSliceReducer from "./slices/dashboardSlice.js";
import listSliceReducer from "./slices/listSlice.js";
import paymentSliceReducer from "./slices/paymentSlice.js";

export default configureStore({
  reducer: {
    accountSlice: accountSliceReducer,
    dashboardSlice: dashboardSliceReducer,
    listSlice: listSliceReducer,
    paymentSlice: paymentSliceReducer,
  },
});
