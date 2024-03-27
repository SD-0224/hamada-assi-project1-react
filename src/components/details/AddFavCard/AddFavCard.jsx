import React from "react";
import { Link } from "react-router-dom";
import styles from "./addFavCard.module.css";
import { useFavoritesContext } from "../../../contexts/favoritesContext";

export default function AddFavCard({ id, image, topic, name, onClick }) {
  const { isInFavorites } = useFavoritesContext();
  const buttonText = isInFavorites(id)
    ? "Remove from Favorites"
    : `Add to Favorites <ion-icon name="heart-outline" class="icon add-myFavorites"></ion-icon>`;
  return (
    <div className={styles.rightColCard}>
      <img src={`./Logos/${image}`} alt={image} className="img-in-box" />
      <div className={styles.courseInfo}>
        <h3>
          <span className={styles.topic}>{topic}</span>
          <span className={styles.authorInfo}>
            by <Link to="/">{name}</Link>
          </span>
        </h3>
        <div className={styles.addFavourites}>
          <p>Interested about this topic?</p>
          <div className={styles.btnContainer}>
            <button
              dangerouslySetInnerHTML={{ __html: buttonText }}
              onClick={onClick}
            ></button>
            <p>Unlimited Credits</p>
          </div>
        </div>
      </div>
    </div>
  );
}
