import React from "react";
import styles from "./rating.module.css"

export function Rating({ rating }) {
  const ratingArray = [];
  let fill = Math.floor(rating);
  for (let i = 1; i < 6; i++) {
    if (i <= fill) {
      ratingArray.push("star");
    } else if (i - fill === 1 && rating % 1 !== 0) {
      ratingArray.push("star-half");
    } else {
      ratingArray.push("star-outline");
    }
  }

  return (
    <div className={styles.rating}>
        <ion-icon name={ratingArray.shift()}></ion-icon>
      <ion-icon name={ratingArray.shift()}></ion-icon>
      <ion-icon name={ratingArray.shift()}></ion-icon>
      <ion-icon name={ratingArray.shift()}></ion-icon>
      <ion-icon name={ratingArray.shift()}></ion-icon>
    </div>
  );
}
