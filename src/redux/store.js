import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import savedThemesReducer from "./savedThemeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    savedThemes: savedThemesReducer,
  },
});

export default store;
