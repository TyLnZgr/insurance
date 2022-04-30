import { configureStore } from "@reduxjs/toolkit";
import insuranceSlice from "./Insurances/insuranceSlice";

export const store = configureStore({
  reducer: {
    insurance: insuranceSlice,
  },
});
