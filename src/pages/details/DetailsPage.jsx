import React from "react";
import { useParams } from "react-router-dom";
import styles from "./details.module.css";
import TopicDetails from "../../components/details/mainTopicDetails/mainTopicDetails";
import AddFavCard from "../../components/details/AddFavCard/AddFavCard";
import Subtopics from "../../components/details/subTopicsSection/subTopicsSection";
import DetailsLoaderLayout from "../../loader/detailsLoaderLayout";
import { useFavoritesContext } from "../../contexts/favoritesContext";
import { useTopicDetailsFetch } from "../../customHooks/useTopicDetailsFetch";

export default function DetailsPage() {
  // Get id from URL
  const { topicId } = useParams();
  const { topic, loading, error } = useTopicDetailsFetch(topicId);

  // Get toggleFavorite function from context
  const { toggleFavorite } = useFavoritesContext();

  if (loading) {
    return (
      <section className={styles.dataContainer}>
        <div className={styles.data}>
          <DetailsLoaderLayout />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <h1 style={{ color: "red", textAlign: "center", padding: "50px 0" }}>
        Error: {error.message}
      </h1>
    );
  }

  return (
    <section className={styles.dataContainer}>
      <div className={styles.data}>
        <div className={styles.textData}>
          {/* Render topic details */}
          <TopicDetails
            category={topic.category}
            topic={topic.topic}
            rate={topic.rating}
            description={topic.description}
          />
          {/* Render subtopics */}
          <Subtopics topic={topic.topic} subtopics={topic.subtopics} />
        </div>
        {/* Render AddFavCard component with appropriate props */}
        <AddFavCard
          id={topic.id}
          image={topic.image}
          topic={topic.topic}
          name={topic.name}
          onClick={() => toggleFavorite(topic)}
        />
      </div>
    </section>
  );
}
