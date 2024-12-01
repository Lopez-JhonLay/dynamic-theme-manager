import React from "react";
import { useSelector } from "react-redux";

function ThemePreview() {
  const theme = useSelector((state) => state.theme);
  console.log("Theme state:", theme);

  if (!theme) {
    return <div>Loading theme...</div>;
  }

  const getFontSizeClass = (size) => {
    if (size <= 12) return "text-xs"; // 12px or less
    if (size <= 14) return "text-sm"; // 14px
    if (size <= 16) return "text-base"; // 16px
    if (size <= 18) return "text-lg"; // 18px
    if (size <= 20) return "text-xl"; // 20px
    if (size <= 24) return "text-2xl"; // 24px
    if (size <= 30) return "text-3xl"; // 30px
    if (size <= 36) return "text-4xl"; // 36px
    if (size <= 48) return "text-5xl"; // 48px
    if (size <= 60) return "text-6xl"; // 60px
    if (size <= 72) return "text-7xl"; // 72px
    if (size <= 96) return "text-8xl"; // 96px
    return "text-9xl"; // 128px and larger
  };

  return (
    <div
      className="max-w-4xl mx-auto my-8 p-6 rounded-lg shadow-xl transition-all duration-300"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.primaryColor,
        fontFamily: theme.fontFamily,
      }}
    >
      <h1
        className={`text-center font-semibold mb-4 ${getFontSizeClass(
          theme.fontSize
        )}`}
      >
        Theme Preview
      </h1>
      <p className="text-center text-lg mb-6">
        This is a live preview of your custom theme.
      </p>
      <div className="flex justify-around items-center space-x-4">
        <div
          className="p-4 rounded-md text-white font-bold text-lg"
          style={{ backgroundColor: theme.secondaryColor }}
        >
          Secondary Color Box
        </div>
        <div
          className="p-4 rounded-md text-white font-bold text-lg"
          style={{ backgroundColor: theme.primaryColor }}
        >
          Primary Color Box
        </div>
      </div>
    </div>
  );
}

export default ThemePreview;
