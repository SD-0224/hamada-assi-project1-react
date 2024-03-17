import React from "react";
import "./subTopicsSection.module.css";

export default function Subtopics({ topic, subtopics }) {
  if (!subtopics || subtopics.length === 0) {
    return <p>No subtopics available.</p>;
  }
  return (
    <>
      <h3>{topic} Sub Topics</h3>
      <ul>
        {subtopics.map((elm, index) => (
          <li key={index}>
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <span>{elm}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
