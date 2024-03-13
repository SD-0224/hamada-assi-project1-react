import React, { useEffect, useState } from "react";
import styles from "./topics.module.css";

export function Topics() {
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
        <a href="./" key={topic.id} className={styles.course} id={topic.id}>
          <img src={`/public/logo512.png/${topic.image}`}
            alt="course logo"
            className={"img-in-box"}
          />
          <div className={styles.courseInfo}>
            <h4 className={styles.category}>{topic.category}</h4>
            <h5 className={styles.topic}>{topic.topic}</h5>
            <div className={styles.rating}></div>
            <p className={styles.name}>Author: {topic.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
