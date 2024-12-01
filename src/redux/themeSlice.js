import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  primaryColor: "#3498db",
  secondaryColor: "#2ecc71",
  backgroundColor: "#ffffff",
  fontFamily: "Arial",
  fontSize: "16px",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload;
    },
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const {
  setPrimaryColor,
  setSecondaryColor,
  setBackgroundColor,
  setFontFamily,
  setFontSize,
} = themeSlice.actions;

export default themeSlice.reducer;
