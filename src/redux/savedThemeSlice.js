import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedThemes: [],
};

const savedThemesSlice = createSlice({
  name: "savedThemes",
  initialState,
  reducers: {
    addTheme: (state, action) => {
      state.savedThemes.push(action.payload);
    },
    deleteTheme: (state, action) => {
      state.savedThemes = state.savedThemes.filter(
        (theme) => theme.id !== action.payload
      );
    },
  },
});

export const { addTheme, deleteTheme } = savedThemesSlice.actions;

export default savedThemesSlice.reducer;
