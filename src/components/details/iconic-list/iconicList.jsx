import React from "react";
import "./iconicList.module.css";

export default function IconicList({ index, iconName, subtopic}) {
  return (
    <li key={index}>
      <ion-icon name={iconName}></ion-icon>
      <span>{subtopic}</span>
    </li>
  );
}
