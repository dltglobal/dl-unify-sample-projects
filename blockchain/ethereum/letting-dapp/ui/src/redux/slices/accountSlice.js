import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "accountSlice",
  initialState: {
    signedIn: false,
    accountType: "",
    blockchainId: "",
  },
  reducers: {
    setAccountType: (state, action) => {
      state.accountType = action.payload;
    },
    setBlockchainId: (state, action) => {
      state.blockchainId = action.payload;
    },
    signIn: (state) => {
      state.signedIn = true;
    },
    signOut: (state) => {
      state.signedIn = false;
      state.accountType = "";
      state.blockchainId = "";
    }
  },
});

export const { setAccountType, setBlockchainId, signIn, signOut } = accountSlice.actions;

export default accountSlice.reducer;
