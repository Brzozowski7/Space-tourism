import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: {} as SerializedError,
};

export const getData = createAsyncThunk(
  "data/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default dataSlice.reducer;
