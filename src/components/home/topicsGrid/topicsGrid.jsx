import React from "react";
import styles from "./topicsGrid.module.css";
import TopicCard from "../topicCard/topicCard";

export default function TopicsGrid({ topics }) {
  return (
    // Container for topic cards
    <div className={styles.courses}>
      {/* Mapping through topics to render TopicCard component */}
      {topics?.map((topic) => (
        <TopicCard topic={topic} />
      ))}
    </div>
  );
}
