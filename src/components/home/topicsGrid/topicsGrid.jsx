import React from "react";
import styles from "./topicsGrid.module.css";
import TopicCard from "../topicCard/topicCard";


export default function TopicsGrid({ topics }) {
  return (
    <div className={styles.courses}>
      {topics?.map((topic) => (
        <TopicCard topic={topic} />
      ))}
    </div>
  )
}
