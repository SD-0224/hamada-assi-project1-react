import React, { useEffect, useState } from "react";
import styles from "./dataContainer.module.css";
import TopicDetails from "../topicDetails/topicDetails";
import AddFavCard from "../AddFavCard/AddFavCard";

export default function DataContainer({ id }) {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    const apiUrl = `https://tap-web-1.herokuapp.com/topics/details/${id}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong. Web topics failed to load.");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data to the state
        setTopic(data);
      })
      .catch((error) => {
        console.error(
          "Something went wrong. Web topics failed to load.",
          error
        );
      });
  }, []);

  return (
    <section id="dataContainer" className={styles.dataContainer}>
      <div className={styles.data}>
        <div className={styles.textData}>
          <div className={styles.details}>
            <TopicDetails
              category={topic.category}
              topic={topic.topic}
              rate={topic.rating}
              description={topic.description}
            />
          </div>
          <div className={styles.subTopics}></div>
        </div>
        <div className={styles.rightColCard}>
            <AddFavCard image={topic.image} topic={topic.topic} name={topic.name} />
        </div>
      </div>
    </section>
  );
}
