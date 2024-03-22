import React from "react";
import { Link } from "react-router-dom";
import styles from "./addFavCard.module.css";

export default function AddFavCard({ image, topic, name, buttonText, onClick }) {

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
            <button dangerouslySetInnerHTML={{ __html: buttonText }} onClick={onClick} ></button>
            <p>Unlimited Credits</p>
          </div>
        </div>
      </div>
    </div>
  );
}
