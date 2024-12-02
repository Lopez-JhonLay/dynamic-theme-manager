import { useState } from "react";
import "./App.css";
import ThemePreview from "./components/ThemePreview";
import ThemeCustomizationForm from "./components/ThemeCustomizationForm";
import SavedThemeList from "./components/SavedThemeList";

function App() {
  return (
    <>
      <ThemeCustomizationForm />
      <ThemePreview />
      <SavedThemeList />
    </>
  );
}

export default App;
