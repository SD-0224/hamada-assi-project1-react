import React from "react";
import styles from "./topicsList.module.css";
import TopicCard from "../topicCard/topicCard";

export function TopicsList({ topics }) {
  return (
    <div className={styles.courses}>
      {topics.map((topic) => (
        <TopicCard topic={topic} />
      ))}
    </div>
  );
}
