import React from "react";
import styles from "./homeDataContainer.module.css";
import { LayoutContainer } from "../../shared/container/container";
import SearchSortFilter from "../searchSortFilterContainer/searchSortFilterContainer";
import { TopicsList } from "../topicsList/topicsList";


export default function TopicsContainer({ topics }) {
  return (
    <section className={styles.contentContainer}>
      <LayoutContainer>
        <SearchSortFilter topics={topics} />
        <TopicsList topics={topics}/>
      </LayoutContainer>
    </section>
  );
}
