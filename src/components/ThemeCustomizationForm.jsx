import React from "react";
import { useDispatch } from "react-redux";
import {
  setPrimaryColor,
  setSecondaryColor,
  setBackgroundColor,
  setFontFamily,
  setFontSize,
} from "../redux/themeSlice";

function ThemeCustomizationForm() {
  const dispatch = useDispatch();

  const handlePrimaryColorChange = (e) => {
    dispatch(setPrimaryColor(e.target.value));
  };

  const handleSecondaryColorChange = (e) => {
    dispatch(setSecondaryColor(e.target.value));
  };

  const handleBackgroundColorChange = (e) => {
    dispatch(setBackgroundColor(e.target.value));
  };

  const handleFontFamilyChange = (e) => {
    dispatch(setFontFamily(e.target.value));
  };

  const handleFontSizeChange = (e) => {
    dispatch(setFontSize(e.target.value));
  };

  return (
    <div>
      <h2>Customize Your Theme</h2>
      <form>
        {/* Primary Color */}
        <label>
          Primary Color:
          <input type="color" onChange={handlePrimaryColorChange} />
        </label>
        <br />

        {/* Secondary Color */}
        <label>
          Secondary Color:
          <input type="color" onChange={handleSecondaryColorChange} />
        </label>
        <br />

        {/* Background Color */}
        <label>
          Background Color:
          <input type="color" onChange={handleBackgroundColorChange} />
        </label>
        <br />

        {/* Font Family */}
        <label>
          Font Family:
          <select onChange={handleFontFamilyChange}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
          </select>
        </label>
        <br />

        {/* Font Size */}
        <label>
          Font Size:
          <input type="number" onChange={handleFontSizeChange} /> px
        </label>
      </form>
    </div>
  );
}

export default ThemeCustomizationForm;
