import React from "react";
import styles from "./dropDown.module.css";
import "./dropDown.module.css";

export default function DropDown({ mainClass, label, htmlFor, id, name, selectClass, options, onChange }) {
  return (
    <div className={`${styles.dropDown} ${styles[mainClass]}`}>
      <label htmlFor={htmlFor}>{label}</label>
      <select id={id} name={name} className={styles[selectClass]} onChange={onChange}>
        {options?.map((opt) => {
            return <option value={opt.value} key={opt.value}>{opt.name}</option>;
        })}
      </select>
    </div>
  );
}
