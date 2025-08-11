import React, { useContext } from "react";
import { ThemeContext } from "../forms/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} style={{ fontSize: "1.2rem" }}>
      {theme === "light" ? "🌞 Light" : "🌜 Dark"}
    </button>
  );
};

export default ThemeToggle;
