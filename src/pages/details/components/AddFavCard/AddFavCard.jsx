import React from "react";
import { Link } from "react-router-dom";
import styles from "./addFavCard.module.css";

export default function AddFavCard({ image, topic, name }) {
  return (
    <>
      <img src="" alt={image} className="img-in-box" />
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
            <button id="addFavoritesBtn">add to favourites </button>
            <p>Unlimited Credits</p>
          </div>
        </div>
      </div>
    </>
  );
}
