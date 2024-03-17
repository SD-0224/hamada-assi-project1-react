import React from "react"
import { useParams } from "react-router-dom";
import DetailsDataContainer from "../components/details/detailsDataContainer/detailsDataContainer";

export default function DetailsPage() {
  let { id } = useParams();
  return (
    <main>
      <DetailsDataContainer id={id} />
    </main>
  );
}
