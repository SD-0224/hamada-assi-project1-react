import React from "react";
import styles from "./button.module.css";
import "./button.module.css";

const IconicButton = ({ style, className, label, icon, ...props }) => {
  return (
    <button className={`${styles.btnNav}`} {...props}>
      <ion-icon
        name={icon}
        class={styles.icon}
        aria-hidden="true"
      ></ion-icon>
      <span>{label}</span>
    </button>
  );
};

export default IconicButton;
