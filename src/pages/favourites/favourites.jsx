import React from "react";
import styles from "./favourites.module.css";
import FavoritesCards from "../../components/favorites/favoritesCards";
import { useFavoritesContext } from "../../contexts/favoritesContext";

export function Favorites() {
  const { favorites } = useFavoritesContext();
  return (
    <section className={styles.myFavorites}>
      <h2>My Favorites Topics</h2>
      <div className={styles.favoriteContainer}>
      {favorites?.length > 0 ? (
          favorites?.map((topic) => (
            <FavoritesCards
              key={topic.id}
              id={topic.id}
              image={topic.image}
              topic={topic.topic}
              rating={topic.rating}
            />
          ))
        ) : (
          <h1>No favorites found</h1>
        )}
      </div>
    </section>
  );
}
