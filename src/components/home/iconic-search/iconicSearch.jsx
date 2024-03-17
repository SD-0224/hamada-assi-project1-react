import React from "react";
import styles from "./iconicSearch.module.css";

export default function IconicSearch({
  name,
  classIcon,
  id,
  type,
  placeholder,
}) {
  return (
    <>
      <ion-icon name={name} class={styles[classIcon]}></ion-icon>
      <input id={id} type={type} placeholder={placeholder} />
    </>
  );
}
