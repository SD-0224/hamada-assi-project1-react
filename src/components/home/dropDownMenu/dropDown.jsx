import React from "react";
import styles from "./dropDown.module.css";
import "./dropDown.module.css";

export default function DropDown({ mainClass, label, htmlFor, id, name, selectClass, options }) {
  return (
    <div className={`${styles.dropDown} ${styles[mainClass]}`}>
      <label htmlFor={htmlFor}>{label}</label>
      <select id={id} name={name} className={styles[selectClass]}>
        {options.map((opt) => {
            return <option value={opt}>{opt}</option>;
        })}
      </select>
    </div>
  );
}
