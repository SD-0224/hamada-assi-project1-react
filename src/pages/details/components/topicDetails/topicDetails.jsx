import React from "react";
// import { Rating } from "/src/shared/components/rating/rating";

export default function TopicDetails({category, topic, rate, description}) {
  return (
    <>
      <h3>{category}</h3>
      <h4>{topic}</h4>
      {/* <Rating rating={rate} /> */}
      <p>{description}</p>
    </>
  );
}
