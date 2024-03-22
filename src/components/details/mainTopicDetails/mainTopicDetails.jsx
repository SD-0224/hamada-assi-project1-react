import React from "react";
import { Rating } from "../../shared/rating/rating";
import styles from "./mainTopicDetails.module.css";


export default function TopicDetails({ category, topic, rate, description }) {
  return (
    <div className={styles.details}>
      <h3>{category}</h3>
      <h4>{topic}</h4>
      <Rating rating={rate} />
      <p>{description}</p>
    </div>
  );
}
