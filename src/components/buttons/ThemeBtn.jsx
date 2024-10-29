/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { DarkTheme, LightTheme } from "../icons/theme";
import { ThemeContext } from "../../context/themeContext";

function ThemeBtn({ className = "" }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      title="Change Theme"
      className={"theme-btn theme-btn-all" + className}
    >
      {darkMode ? <LightTheme /> : <DarkTheme />}
    </button>
  );
}

export default ThemeBtn;
