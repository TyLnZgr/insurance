import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInsurances = createAsyncThunk(
  "insurance/getInsurance",
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/case2`);
    return res.data.offerList;
  }
);

export const insuranceSlice = createSlice({
  name: "insurance",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchInsurances.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchInsurances.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
  },
});

export default insuranceSlice.reducer;
