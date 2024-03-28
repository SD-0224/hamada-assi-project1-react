import React from "react";
import styles from "./favourites.module.css";
import FavoritesCards from "../../components/favorites/favoritesCards";
import { useFavoritesContext } from "../../contexts/favoritesContext";

export function Favorites() {
  // Accessing favorites data from context
  const { favorites } = useFavoritesContext();
  return (
    // Section for displaying favorite topics
    <section className={styles.myFavorites}>
      <h2>My Favorites Topics</h2>
      {/* Container for displaying favorite cards */}
      <div className={styles.favoriteContainer}>
        {/* Checking if there are any favorites */}
        {favorites?.length > 0 ? (
          // Mapping through favorites to render favorite cards
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
