import React, {useState, useEffect } from "react";
import styles from "./favourites.module.css";
import FavoritesCards from "../../components/favorites/favoritesCards";

export function Favorites() {
  // Read from local storage or set default value
  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorites, setFavorites] = useState(initialFavorites);

  useEffect(() => {
    // Save favorites to local storage whenever it changes
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <section className={styles.myFavorites}>
      <h2>My Favorites Topics</h2>
      <div className={styles.favoriteContainer}>
        {favorites.map((topic) => {
          return <FavoritesCards id={topic.id} image={topic.image} topic={topic.topic} rating={topic.rating} />
        })}
      </div>
    </section>
  );
}
