/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

function PageLayout({ children }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="main-pattern relative min-h-screen w-full overflow-hidden bg-light px-0 font-montserrat selection:bg-sky-500/70 selection:text-light dark:bg-dark">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
