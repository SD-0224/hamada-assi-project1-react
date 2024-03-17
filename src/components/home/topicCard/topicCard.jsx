import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./topicCard.module.css"
import { Rating } from '../../shared/rating/rating'

export default function TopicCard({ topic }) {
  return (
    <Link to={`DetailsPage/${topic.id}`} key={topic.id} className={styles.course} id={topic.id}>
          <img src={`./Logos/${topic.image}`}
            alt="course logo"
            className={"img-in-box"}
          />
          <div className={styles.courseInfo}>
            <h4 className={styles.category}>{topic.category}</h4>
            <h5 className={styles.topic}>{topic.topic}</h5>
            <Rating rating={topic.rating} />
            <p className={styles.name}>Author: {topic.name}</p>
          </div>
        </Link>
  )
}
