import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const PopularWithSlice = createSlice({
  name: 'celebrity',
  initialState,
  reducers: {
    loadPopularWith: (state, action) => {
      state.info = action.payload;
    },
    removePopularWith: (state, action) => {
      state.info = null;
    },
  },
})

export const { loadTVShows, removeTVShows } = PopularWithSlice.actions;

export default PopularWithSlice.reducer;

