import React from "react";
import "./subTopicsSection.module.css";
import IconicList from "../iconic-list/iconicList";
import styles from "./subTopicsSection.module.css";

export default function Subtopics({ topic, subtopics }) {
  // handle if there is no subtopics for this topic
  if (!subtopics || subtopics.length === 0) {
    return <h1>No subtopics available.</h1>;
  }
  return (
    <div className={styles.subTopics}>
      <h3>{topic} Sub Topics</h3>
      <ul>
        {subtopics.map((elm, index) => (
          // IconicList is a component contains of icon and text
          <IconicList
            index={index}
            iconName={"checkmark-circle-outline"}
            subtopic={elm}
          />
        ))}
      </ul>
    </div>
  );
}
