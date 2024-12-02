import { useState } from "react";
import "./App.css";
import ThemePreview from "./components/ThemePreview";
import ThemeCustomizationForm from "./components/ThemeCustomizationForm";
import SavedThemeList from "./components/SavedThemeList";

function App() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="sticky top-6">
            <ThemeCustomizationForm />
          </div>
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="sticky top-6">
            <ThemePreview />
            <SavedThemeList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
