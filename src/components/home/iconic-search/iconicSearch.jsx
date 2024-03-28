import React, { useId, useRef } from "react";
import styles from "./iconicSearch.module.css";

export default function IconicSearch({
  name,
  classIcon,
  type,
  placeholder,
  onChange,
}) {
  // Generate unique id for accessibility
  const id = useId();
  // Create a ref for the input field
  const inputRef = useRef();
  // Function to focus on the input field when icon is clicked
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      {/*  Icon element with click handler to focus on input */}
      <ion-icon
        name={name}
        class={styles[classIcon]}
        onClick={focusInput}
      ></ion-icon>
      {/* Input field with reference and other props */}
      <input
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
