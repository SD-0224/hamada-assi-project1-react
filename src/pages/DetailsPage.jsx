import React from "react"
import DataContainer from "../components/details/detailsDataContainer/detailsDataContainer";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  let { id } = useParams();
  return (
    <main>
      <DataContainer id={id} />
    </main>
  );
}
