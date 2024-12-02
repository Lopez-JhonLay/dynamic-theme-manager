import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPrimaryColor,
  setSecondaryColor,
  setBackgroundColor,
  setFontFamily,
  setFontSize,
} from "../redux/themeSlice";
import { addTheme } from "../redux/savedThemeSlice";

const ThemeSettingsForm = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);
  const [themeName, setThemeName] = useState("");

  const [formData, setFormData] = useState({
    primaryColor: theme.primaryColor,
    secondaryColor: theme.secondaryColor,
    backgroundColor: theme.backgroundColor,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPrimaryColor(formData.primaryColor));
    dispatch(setSecondaryColor(formData.secondaryColor));
    dispatch(setBackgroundColor(formData.backgroundColor));
    dispatch(setFontFamily(formData.fontFamily));
    dispatch(setFontSize(formData.fontSize));
  };

  const handleSaveTheme = () => {
    if (!themeName.trim()) {
      alert("Please enter a theme name.");
      return;
    }

    const newTheme = {
      id: Date.now(),
      name: themeName,
      ...theme,
    };

    dispatch(addTheme(newTheme));
    setThemeName("");
    alert(`Theme "${themeName}" saved successfully!`);
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-8 bg-white border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
        Customize Your Theme
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-2">
          <label
            htmlFor="primaryColor"
            className="text-sm font-medium text-gray-700"
          >
            Primary Color
          </label>
          <input
            type="color"
            id="primaryColor"
            name="primaryColor"
            value={formData.primaryColor}
            onChange={handleChange}
            className="h-10 w-10 rounded border border-gray-300"
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="secondaryColor"
            className="text-sm font-medium text-gray-700"
          >
            Secondary Color
          </label>
          <input
            type="color"
            id="secondaryColor"
            name="secondaryColor"
            value={formData.secondaryColor}
            onChange={handleChange}
            className="h-10 w-10 rounded border border-gray-300"
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="backgroundColor"
            className="text-sm font-medium text-gray-700"
          >
            Background Color
          </label>
          <input
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
            className="h-10 w-10 rounded border border-gray-300"
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="fontFamily"
            className="text-sm font-medium text-gray-700"
          >
            Font Family
          </label>
          <select
            id="fontFamily"
            name="fontFamily"
            value={formData.fontFamily}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-100"
          >
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="fontSize"
            className="text-sm font-medium text-gray-700"
          >
            Font Size (px)
          </label>
          <input
            type="number"
            id="fontSize"
            name="fontSize"
            value={formData.fontSize}
            onChange={handleChange}
            min="10"
            max="100"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-100"
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="themeName"
            className="text-sm font-medium text-gray-700"
          >
            Theme Name
          </label>
          <input
            type="text"
            id="themeName"
            value={themeName}
            onChange={(e) => setThemeName(e.target.value)}
            placeholder="Enter a name for this theme"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-100"
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none"
          >
            View
          </button>
          <button
            type="button"
            onClick={handleSaveTheme}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring focus:ring-green-200 focus:outline-none"
          >
            Save Theme
          </button>
        </div>
      </form>
    </div>
  );
};

export default ThemeSettingsForm;
