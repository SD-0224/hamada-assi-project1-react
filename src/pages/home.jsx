import React, { useEffect, useState } from "react";
import TopicsContainer from "../components/home/homeDataContainer/homeDataContainer";

export default function Home() {
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
    <main>
      <TopicsContainer topics={topics} />
    </main>
  );
}
