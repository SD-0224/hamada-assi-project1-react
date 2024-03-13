import IconicButton from "../iconic-button/iconic-button.jsx";
import { LayoutContainer } from "../container/container.jsx";
import styles from "./header.module.css";
import "./header.module.css"
import React, { useState, useEffect } from "react";


export function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
    // document.body.classList.toggle("dark-mode", darkMode);
    // // Toggle light-mode class on body
    // document.body.classList.toggle("light-mode", !darkMode);
  };
  // Update localStorage when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  

    const darkModeIcon = !darkMode ? "moon-outline" :"sunny-outline";
    const darkModeLabel = !darkMode ? "Dark Mode" : "Light Mode";
    const darkModeAriaLabel = !darkMode ?  "Toggle dark mode" : "Toggle light mode";

  return (
    <header>
      <LayoutContainer className={styles.header}>
        <h1>
          <a href="index.html" className={styles.logo}>
            Web Topics
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <IconicButton
                icon={darkModeIcon}
                label={darkModeLabel}
                id="mode-btn"
                aria-label={darkModeAriaLabel}
                onClick={toggleDarkMode}
              />
            </li>
            <li>
              <IconicButton
                icon={"heart-outline"}
                label={"Favorites"}
                id="favorites-btn"
                aria-label="Toggle Favorites"
              />
            </li>
          </ul>
        </nav>
      </LayoutContainer>
    </header>
  );
}
