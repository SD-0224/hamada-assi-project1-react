import React from "react";
import styles from "./homeDataContainer.module.css";
import { LayoutContainer } from "../../shared/container/container";
import Search from "../searchSortFilterContainer/searchSortFilterContainer";
import { TopicsList } from "../topicsList/topicsList";


export default function TopicsContainer() {
  return (
    <section className={styles.contentContainer}>
      <LayoutContainer>
        <Search />
        <TopicsList />
      </LayoutContainer>
    </section>
  );
}
