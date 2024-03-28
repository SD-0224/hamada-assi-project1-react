import React, {useId, useRef } from "react";
import styles from "./iconicSearch.module.css";

export default function IconicSearch({
  name,
  classIcon,
  type,
  placeholder,
  onChange,
}) {

  const id = useId()
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <ion-icon name={name} class={styles[classIcon]} onClick={focusInput}></ion-icon>
      <input ref={inputRef} id={id} type={type} placeholder={placeholder} onChange={onChange} />
    </>
  );
}
