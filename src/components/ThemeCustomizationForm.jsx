import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPrimaryColor,
  setSecondaryColor,
  setBackgroundColor,
  setFontFamily,
  setFontSize,
} from "../redux/themeSlice";

const ThemeSettingsForm = () => {
  const dispatch = useDispatch();

  // Access the current theme from Redux state
  const theme = useSelector((state) => state.theme);

  // Local state for the form inputs
  const [formData, setFormData] = useState({
    primaryColor: theme.primaryColor,
    secondaryColor: theme.secondaryColor,
    backgroundColor: theme.backgroundColor,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPrimaryColor(formData.primaryColor));
    dispatch(setSecondaryColor(formData.secondaryColor));
    dispatch(setBackgroundColor(formData.backgroundColor));
    dispatch(setFontFamily(formData.fontFamily));
    dispatch(setFontSize(formData.fontSize));
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Customize Your Theme
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="primaryColor"
            className="block text-gray-700 font-medium mb-2"
          >
            Primary Color
          </label>
          <input
            type="color"
            id="primaryColor"
            name="primaryColor"
            value={formData.primaryColor}
            onChange={handleChange}
            className="w-16 h-16 border-2 border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="secondaryColor"
            className="block text-gray-700 font-medium mb-2"
          >
            Secondary Color
          </label>
          <input
            type="color"
            id="secondaryColor"
            name="secondaryColor"
            value={formData.secondaryColor}
            onChange={handleChange}
            className="w-16 h-16 border-2 border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="backgroundColor"
            className="block text-gray-700 font-medium mb-2"
          >
            Background Color
          </label>
          <input
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
            className="w-16 h-16 border-2 border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="fontFamily"
            className="block text-gray-700 font-medium mb-2"
          >
            Font Family
          </label>
          <select
            id="fontFamily"
            name="fontFamily"
            value={formData.fontFamily}
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300 rounded-md"
          >
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="fontSize"
            className="block text-gray-700 font-medium mb-2"
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
            className="w-full p-2 border-2 border-gray-300 rounded-md"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Save Theme
          </button>
        </div>
      </form>
    </div>
  );
};

export default ThemeSettingsForm;
