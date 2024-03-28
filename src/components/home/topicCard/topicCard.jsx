import React from "react";
import { Link } from "react-router-dom";
import styles from "./topicCard.module.css";
import { Rating } from "../../shared/rating/rating";

export default function TopicCard({ topic }) {
  // Style for background image
  const backgroundImageStyle = {
    backgroundImage: `url(./Logos/${topic.image})`,
  };
  return (
    // Link to topic details page
    <Link
      to={`details/${topic.id}`}
      key={topic.id}
      className={styles.course}
      id={topic.id}
    >
      {/* Topic image */}
      <img
        src={`./Logos/${topic.image}`}
        alt="course logo"
        className={"img-in-box"}
      />
      {/* Topic information */}
      <div className={styles.courseInfo}>
        <h4 className={styles.category}>{topic.category}</h4>
        <h5 className={styles.topic}>{topic.topic}</h5>
        <Rating rating={topic.rating} />
        <p className={styles.name}>Author: {topic.name}</p>
      </div>
      {/* Background image for decoration (hover effect on card) */}
      <div style={backgroundImageStyle} className={styles.courseBefore}></div>
    </Link>
  );
}
