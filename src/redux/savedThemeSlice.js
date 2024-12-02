import { createSlice } from "@reduxjs/toolkit";

const loadSavedThemes = () => {
  const themes = localStorage.getItem("savedThemes");
  return themes ? JSON.parse(themes) : [];
};

const initialState = {
  savedThemes: loadSavedThemes(),
};

const savedThemesSlice = createSlice({
  name: "savedThemes",
  initialState,
  reducers: {
    addTheme: (state, action) => {
      state.savedThemes.push(action.payload);
      localStorage.setItem("savedThemes", JSON.stringify(state.savedThemes));
    },
    deleteTheme: (state, action) => {
      state.savedThemes = state.savedThemes.filter(
        (theme) => theme.id !== action.payload
      );
      localStorage.setItem("savedThemes", JSON.stringify(state.savedThemes));
    },
  },
});

export const { addTheme, deleteTheme } = savedThemesSlice.actions;
export default savedThemesSlice.reducer;
