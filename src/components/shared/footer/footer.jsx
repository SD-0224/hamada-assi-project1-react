import React from "react";
import styles from "./footer.module.css"

export function Footer() {
  return (
    <footer>
      <p>
        Develop with&nbsp;<ion-icon name="heart" class={styles.heart}></ion-icon>
        &nbsp;&#169; 2023
      </p>
    </footer>
  );
}
