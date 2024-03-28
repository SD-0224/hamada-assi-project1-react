import React, { useEffect, useMemo, useState } from "react";
import styles from "./home.module.css";
import { LayoutContainer } from "../../components/shared/container/container";
import TopicsGrid from "../../components/home/topicsGrid/topicsGrid";
import SearchSortFilter from "../../components/home/searchSortFilterContainer/searchSortFilterContainer";
import LoaderLayout from "../../loader/loaderLayout";
import { useTopicsFetch } from "../../customHooks/useTopicsFetch";
import { useCategories } from "../../customHooks/useCategories";
import { useSortTopics } from "../../customHooks/useSortTopics";
import { useFilterTopics } from "../../customHooks/useFilterTopics";

export default function Home() {
  const [search, setSearch] = useState("");
  const [sortCriteria, setSortCriteria] = useState("DEFAULT");
  const [filterCriteria, setFilterCriteria] = useState("ALL");

  const { topics, loading } = useTopicsFetch(search);
  const [sortedTopics, setSortedTopics] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);

  const filterOptions = useCategories(topics);

  useSortTopics(topics, sortCriteria, setSortedTopics);
  useFilterTopics(sortedTopics, filterCriteria, setFilteredTopics);

  return (
    <>
      <section className={styles.contentContainer}>
        <LayoutContainer>
          <SearchSortFilter
            filterOptions={filterOptions}
            updateSearch={setSearch}
            updateSort={setSortCriteria}
            updateFilter={setFilterCriteria}
            numberOfTopics={filteredTopics.length}
          />
          {useMemo(
            () =>
              loading ? (
                <LoaderLayout />
              ) : (
                <TopicsGrid topics={filteredTopics} />
              ),
            [filteredTopics, loading]
          )}
        </LayoutContainer>
      </section>
    </>
  );
}
