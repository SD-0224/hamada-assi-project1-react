import React from "react";
import styles from "./iconicList.module.css";

export default function IconicList({ index, iconName, subtopic}) {
  // list item with ion-icon
  return (
    <li key={index} className={styles.listItem}>
      <ion-icon name={iconName}></ion-icon>
      <span>{subtopic}</span>
    </li>
  );
}
