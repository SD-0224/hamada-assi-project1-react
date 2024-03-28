import IconicButton from "../iconic-button/iconic-button.jsx";
import { LayoutContainer } from "../container/container.jsx";
import styles from "./header.module.css";
import "./header.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Header({ toggleFavorites }) {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode based on localStorage or system preference
    const savedMode = localStorage.getItem("darkMode");
    return savedMode
      ? JSON.parse(savedMode)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  // Update localStorage when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else if (!darkMode) {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  // Icon, label, and aria-label for dark mode button
  const darkModeIcon = !darkMode ? "moon-outline" : "sunny-outline";
  const darkModeLabel = !darkMode ? "Dark Mode" : "Light Mode";
  const darkModeAriaLabel = !darkMode
    ? "Toggle dark mode"
    : "Toggle light mode";

  return (
    <header>
      {/* Container for header content */}
      <LayoutContainer className={styles["fixed-header"]}>
        {/* Website logo */}
        <h1>
          <Link to="./" className={styles.logo}>
            Web Topics
          </Link>
        </h1>
        {/* Navigation menu */}
        <nav>
          <ul>
            {/* Dark mode toggle button */}
            <li>
              <IconicButton
                icon={darkModeIcon}
                label={darkModeLabel}
                id="mode-btn"
                aria-label={darkModeAriaLabel}
                onClick={toggleDarkMode}
              />
            </li>
            {/* Favorites toggle button */}
            <li>
              <IconicButton
                icon={"heart-outline"}
                label={"Favorites"}
                id="favorites-btn"
                aria-label="Toggle Favorites"
                onClick={toggleFavorites}
              />
            </li>
          </ul>
        </nav>
      </LayoutContainer>
    </header>
  );
}
