import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInsurances = createAsyncThunk(
  "insurance/getInsurance",
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/case2`);
    return res.data.offerList;
  }
);
export const fetchCount = createAsyncThunk("count/getCount", async () => {
  const res = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/get_offer_count`
  );
  return res.data.num_offers;
});

export const insuranceSlice = createSlice({
  name: "insurance",
  initialState: {
    items: [],
    isLoading: false,
    count: 0,
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
    [fetchCount.fulfilled]: (state, action) => {
      state.count = action.payload;
    },
  },
});

export default insuranceSlice.reducer;
