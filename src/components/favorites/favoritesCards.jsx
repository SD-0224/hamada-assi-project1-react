import React from "react";
import { Link } from "react-router-dom";
import styles from "./favoritesCards.module.css";
import { Rating } from "../shared/rating/rating";

export default function FavoritesCards({id, image, topic, rating}) {
  return (
    <Link to={`details/${id}`} key={id} className={styles.favoriteCard} id={id} >
      <img
        src={`./Logos/${image}`}
        alt={`${topic} logo`}
        className="img-in-box"
      />
      <h3 className={styles.favoriteTopic}>{topic}</h3>
      <Rating rating={rating} />
    </Link>
  );
}
