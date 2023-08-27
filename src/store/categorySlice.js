import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    const response = await axios.get("http://localhost:3000/categories");
    const data = response.data;
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});

export default categorySlice.reducer;
