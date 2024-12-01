import React from "react";
import { useSelector } from "react-redux";

function ThemePreview() {
  const theme = useSelector((state) => state.theme);
  console.log("Theme state:", theme);

  if (!theme) {
    return <div>Loading theme...</div>;
  }

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.primaryColor,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        padding: "20px",
      }}
    >
      <h1>Theme Preview</h1>
      <p>This is how your theme looks!</p>
    </div>
  );
}

export default ThemePreview;
