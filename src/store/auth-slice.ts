import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
});

export const authActions = authSlice.actions;
export const authSliceReducer = authSlice.reducer;