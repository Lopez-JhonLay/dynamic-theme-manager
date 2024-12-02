import { createSlice } from "@reduxjs/toolkit";

// Load the current theme from localStorage
const loadCurrentTheme = () => {
  const theme = localStorage.getItem("currentTheme");
  return theme
    ? JSON.parse(theme)
    : {
        primaryColor: "#3498db",
        secondaryColor: "#2ecc71",
        backgroundColor: "#ffffff",
        fontFamily: "Arial",
        fontSize: 16,
      };
};

const initialState = loadCurrentTheme();

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
      localStorage.setItem("currentTheme", JSON.stringify(state));
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload;
      localStorage.setItem("currentTheme", JSON.stringify(state));
    },
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
      localStorage.setItem("currentTheme", JSON.stringify(state));
    },
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
      localStorage.setItem("currentTheme", JSON.stringify(state));
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
      localStorage.setItem("currentTheme", JSON.stringify(state));
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
