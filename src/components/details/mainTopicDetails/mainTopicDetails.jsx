import React from "react";
import { Rating } from "../../shared/rating/rating";
import styles from "./mainTopicDetails.module.css";

export default function TopicDetails({ category, topic, rate, description }) {
  // main topic details like: category, topic, rate, and description
  return (
    <div className={styles.details}>
      <h3>{category}</h3>
      <h4>{topic}</h4>
      {/* call rating component */}
      <Rating rating={rate} />
      <p>{description}</p>
    </div>
  );
}
