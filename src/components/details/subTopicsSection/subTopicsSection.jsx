import React from "react";
import "./subTopicsSection.module.css";
import IconicList from "../iconic-list/iconicList";

export default function Subtopics({ topic, subtopics }) {
  if (!subtopics || subtopics.length === 0) {
    return <p>No subtopics available.</p>;
  }
  return (
    <>
      <h3>{topic} Sub Topics</h3>
      <ul>
        {subtopics.map((elm, index) => (
          <IconicList
            index={index}
            iconName={"checkmark-circle-outline"}
            subtopic={elm}
          />
        ))}
      </ul>
    </>
  );
}
