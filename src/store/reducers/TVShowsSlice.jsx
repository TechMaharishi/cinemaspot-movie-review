import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const TVShowsSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    loadTVShows: (state, action) => {
      state.info = action.payload;
    },
    removeTVShows: (state, action) => {
      state.info = null;
    },
  },
})

export const { loadTVShows, removeTVShows } = TVShowsSlice.actions;

export default TVShowsSlice.reducer;

