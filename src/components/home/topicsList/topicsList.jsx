import React, { useEffect, useState } from "react";
import styles from "./topicsList.module.css";
import { Rating } from "../../shared/rating/rating";
import { Link } from "react-router-dom";

export function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const apiUrl = "https://tap-web-1.herokuapp.com/topics/list";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong. Web topics failed to load.");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data to the state
        setTopics(data);
      })
      .catch((error) => {
        console.error("Something went wrong. Web topics failed to load.", error);
      });
  }, []);

  return (
    <div id="courses" className={styles.courses}>
      {topics.map((topic) => (
        <Link to={`DetailsPage/${topic.id}`} key={topic.id} className={styles.course} id={topic.id}>
          <img src={`./Logos/${topic.image}`}
            alt="course logo"
            className={"img-in-box"}
          />
          <div className={styles.courseInfo}>
            <h4 className={styles.category}>{topic.category}</h4>
            <h5 className={styles.topic}>{topic.topic}</h5>
            <Rating rating={topic.rating}></Rating>
            <p className={styles.name}>Author: {topic.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
