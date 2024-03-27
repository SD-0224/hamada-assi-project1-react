import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context
const FavoritesContext = createContext([]);

export default function FavoritesContextProvider({ children }) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useStorageState("favorites", []);

  // Function to toggle visibility of favorites
  const toggleShowFavorites = () => {
    setShowFavorites((prevShowFavorites) => !prevShowFavorites);
  };
  const openFavorites = () => {
    setShowFavorites(true);
  };

  // Function to add an item to favorites
  const addToFavorites = (value) => {
    setFavorites((prevFavorites) => [...prevFavorites, value]);
  };

  // Function to remove an item from favorites
  const removeFromFavorites = (value) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== value.id)
    );
  };

  // Function to check if an item is in favorites
  const isInFavorites = (id) => {
    return favorites.some((item) => item.id === id);
  };

  // Function to toggle an item in favorites
  const toggleFavorite = (value) => {
    if (isInFavorites(value.id)) {
      removeFromFavorites(value);
    } else {
      addToFavorites(value);
    }
    openFavorites();
  };

  // Render the context provider with its value
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        showFavorites,
        toggleShowFavorites,
        isInFavorites,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// Custom hook to access the favorites context
export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};

// Custom hook to manage state with localStorage support
const useStorageState = (key, defaultVal) => {
  const stored = localStorage.getItem(key);
  const [state, setState] = useState(stored ? JSON.parse(stored) : defaultVal);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};
