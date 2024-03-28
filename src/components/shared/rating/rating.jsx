import React from "react";
import styles from "./rating.module.css";

export function Rating({ rating }) {
  // Array to store star icons based on rating
  const ratingArray = [];
  let fill = Math.floor(rating);
  // Loop to determine star icons based on rating
  for (let i = 1; i < 6; i++) {
    if (i <= fill) {
      ratingArray.push("star"); // Full star
    } else if (i - fill === 1 && rating % 1 !== 0) {
      ratingArray.push("star-half"); // Half star for ratings like 4.5
    } else {
      ratingArray.push("star-outline"); // Empty star
    }
  }

  return (
    // Container for star icons
    <div className={styles.rating}>
      <ion-icon name={ratingArray.shift()}></ion-icon>
      <ion-icon name={ratingArray.shift()}></ion-icon>
      <ion-icon name={ratingArray.shift()}></ion-icon>
      <ion-icon name={ratingArray.shift()}></ion-icon>
      <ion-icon name={ratingArray.shift()}></ion-icon>
    </div>
  );
}
