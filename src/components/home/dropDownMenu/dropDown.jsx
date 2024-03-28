import React, { useId } from "react";
import styles from "./dropDown.module.css";
import "./dropDown.module.css";

export default function DropDown({
  mainClass,
  label,
  name,
  selectClass,
  options,
  onChange,
}) {
  const id = useId(); // Generate unique id for accessibility
  return (
    <div className={`${styles.dropDown} ${styles[mainClass]}`}>
      {/* Label for the dropdown */}
      <label htmlFor={id}>{label}</label>
      {/* Dropdown select element */}
      <select
        id={id}
        name={name}
        className={styles[selectClass]}
        onChange={onChange}
      >
        {/* Mapping through options to create dropdown options */}
        {options?.map((opt) => {
          return (
            <option value={opt.value} key={opt.value}>
              {opt.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
