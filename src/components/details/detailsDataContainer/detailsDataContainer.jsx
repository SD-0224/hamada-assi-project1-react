import React, { useEffect, useState } from "react";
import styles from "./detailsDataContainer.module.css";
import TopicDetails from "../mainTopicDetails/mainTopicDetails";
import AddFavCard from "../AddFavCard/AddFavCard";
import Subtopics from "../subTopicsSection/subTopicsSection";
import {useParams} from "react-router-dom";

export default function DetailsDataContainer({ id }) {
  const [topic, setTopic] = useState([]);

  const params = useParams();
  useEffect(() => {
    const apiUrl = `https://tap-web-1.herokuapp.com/topics/details/${params.id}`;
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
  }, [params.id]);

  return (
    <section className={styles.dataContainer}>
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
          <div className={styles.subTopics}>
            <Subtopics topic={topic.topic} subtopics={topic.subtopics} />
          </div>
        </div>
        <AddFavCard image={topic.image} topic={topic.topic} name={topic.name} />
      </div>
    </section>
  );
}
