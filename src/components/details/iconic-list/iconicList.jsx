import React from "react";
import styles from "./iconicList.module.css";

export default function IconicList({ index, iconName, subtopic}) {
  return (
    <li key={index} className={styles.listItem}>
      <ion-icon name={iconName}></ion-icon>
      <span>{subtopic}</span>
    </li>
  );
}
