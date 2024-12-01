import { useState } from "react";
import "./App.css";
import ThemePreview from "./components/ThemePreview";
import ThemeCustomizationForm from "./components/ThemeCustomizationForm";

function App() {
  return (
    <>
      <ThemeCustomizationForm />
      <ThemePreview />
    </>
  );
}

export default App;
