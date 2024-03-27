import React from "react";
import styles from "../pages/details/details.module.css";
import { BulletList, List, Instagram } from "react-content-loader";

export default function DetailsLoaderLayout() {
  return (
    <>
      <div className={styles.textData}>
        <div>
          <List />
        </div>
        <div>
          <BulletList/>
        </div>
      </div>
      <div className={styles.rightColCard}>
        <Instagram />
      </div>
    </>
  );
}
