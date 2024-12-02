import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPrimaryColor,
  setSecondaryColor,
  setBackgroundColor,
  setFontFamily,
  setFontSize,
} from "../redux/themeSlice";
import { deleteTheme } from "../redux/savedThemeSlice";

const SavedThemeList = () => {
  const dispatch = useDispatch();
  const savedThemes = useSelector((state) => state.savedThemes.savedThemes);

  const handleApplyTheme = (theme) => {
    dispatch(setPrimaryColor(theme.primaryColor));
    dispatch(setSecondaryColor(theme.secondaryColor));
    dispatch(setBackgroundColor(theme.backgroundColor));
    dispatch(setFontFamily(theme.fontFamily));
    dispatch(setFontSize(theme.fontSize));
  };

  const handleDeleteTheme = (themeId) => {
    dispatch(deleteTheme(themeId));
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 rounded-lg border bg-gray-50 shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Saved Themes
      </h2>
      {savedThemes.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {savedThemes.map((theme) => (
            <li
              key={theme.id}
              className="flex items-center justify-between p-4 rounded-md hover:bg-gray-100 transition duration-200"
            >
              <div>
                <p className="font-medium text-gray-800">{theme.name}</p>
                <div className="flex items-center space-x-3 mt-2">
                  <span
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: theme.primaryColor }}
                    title="Primary Color"
                  ></span>
                  <span
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: theme.secondaryColor }}
                    title="Secondary Color"
                  ></span>
                  <span
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: theme.backgroundColor }}
                    title="Background Color"
                  ></span>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleApplyTheme(theme)}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 transition"
                >
                  Apply
                </button>
                <button
                  onClick={() => handleDeleteTheme(theme.id)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No saved themes available.</p>
      )}
    </div>
  );
};

export default SavedThemeList;
