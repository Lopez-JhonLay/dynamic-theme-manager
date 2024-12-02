import React from "react";
import { useSelector } from "react-redux";

function ThemePreview() {
  const theme = useSelector((state) => state.theme);
  console.log("Theme state:", theme);

  if (!theme) {
    return <div>Loading theme...</div>;
  }

  const getFontSizeClass = (size) => {
    if (size <= 12) return "text-xs";
    if (size <= 14) return "text-sm";
    if (size <= 16) return "text-base";
    if (size <= 18) return "text-lg";
    if (size <= 20) return "text-xl";
    if (size <= 24) return "text-2xl";
    if (size <= 30) return "text-3xl";
    if (size <= 36) return "text-4xl";
    if (size <= 48) return "text-5xl";
    if (size <= 60) return "text-6xl";
    if (size <= 72) return "text-7xl";
    if (size <= 96) return "text-8xl";
    return "text-9xl";
  };

  return (
    <div
      className="max-w-3xl mx-auto my-8 p-8 rounded-lg border shadow-sm transition-transform duration-300"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.primaryColor,
        fontFamily: theme.fontFamily,
      }}
    >
      <h1
        className={`text-center font-semibold mb-6 ${getFontSizeClass(
          theme.fontSize
        )}`}
      >
        Theme Preview
      </h1>
      <p className="text-center text-base text-gray-600 mb-8">
        This is a live preview of your custom theme.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div
          className="flex items-center justify-center p-6 rounded-md text-white font-medium text-base shadow-sm"
          style={{ backgroundColor: theme.secondaryColor }}
        >
          Secondary Color Box
        </div>
        <div
          className="flex items-center justify-center p-6 rounded-md text-white font-medium text-base shadow-sm"
          style={{ backgroundColor: theme.primaryColor }}
        >
          Primary Color Box
        </div>
      </div>
    </div>
  );
}

export default ThemePreview;
