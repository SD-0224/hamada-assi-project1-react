import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./details.module.css";
import TopicDetails from "../../components/details/mainTopicDetails/mainTopicDetails";
import AddFavCard from "../../components/details/AddFavCard/AddFavCard";
import Subtopics from "../../components/details/subTopicsSection/subTopicsSection";
import { BulletList, List, Instagram } from "react-content-loader";
import DetailsLoaderLayout from "../../loader/detailsLoaderLayout";

export default function DetailsPage() {
  // get id from url
  let { topicId } = useParams();
  const [topic, setTopic] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data based on userId
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://tap-web-1.herokuapp.com/topics/details/${topicId}`
        );
        const topic = await response.json();
        setTopic(topic);
      } catch (error) {
        console.error("Something went wrong. Web topics failed to load", error);
      } finally {
        // Set loading to false after fetching data
        setLoading(false);
      }
    };

    fetchData();
  }, [topicId]);

  useEffect(() => {
    let btnText = isFavorite
      ? "Remove from Favorites"
      : `Add to Favorites <ion-icon name="heart-outline" class="icon add-myFavorites"></ion-icon>`;
    setButtonText(btnText);
  }, [isFavorite]);

  const updateButtonText = () => {
    setIsFavorite((old) => !old);
  };

  return (
    <section className={styles.dataContainer}>
      {loading ? (
        <div className={styles.data}>
          <DetailsLoaderLayout />
        </div>
      ) : (
        <div className={styles.data}>
          <div className={styles.textData}>
            <TopicDetails
              category={topic.category}
              topic={topic.topic}
              rate={topic.rating}
              description={topic.description}
            />
            <Subtopics topic={topic.topic} subtopics={topic.subtopics} />
          </div>
          <AddFavCard
            image={topic.image}
            topic={topic.topic}
            name={topic.name}
            buttonText={buttonText}
            onClick={updateButtonText}
          />
        </div>
      )}
    </section>
  );
}
