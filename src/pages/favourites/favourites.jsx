import React from "react";
import styles from "./favourites.module.css";

export function Favorites() {
  return (
    <section className={styles.myFavorites}>
      <h2>My Favorites Topics</h2>
      <div className={styles.favoriteContainer} id="favoriteContainer"></div>
    </section>
  );
}
