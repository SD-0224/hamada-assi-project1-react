import React, { useState } from "react";
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

  // Custom hook to fetch topics based on search
  const { topics, loading, error } = useTopicsFetch(search);

  // State for sorted and filtered topics
  const [sortedTopics, setSortedTopics] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);

  // Custom hook to get filter options based on topics
  const filterOptions = useCategories(topics);

  // Custom hooks to sort and filter topics
  useSortTopics(topics, sortCriteria, setSortedTopics);
  useFilterTopics(sortedTopics, filterCriteria, setFilteredTopics);

  if (error) {
    return (
      <h1 style={{ color: "red", textAlign: "center", padding: "50px 0" }}>
        Error: {error.message}
      </h1>
    );
  }

  return (
    <>
      <section className={styles.contentContainer}>
        <LayoutContainer>
          {/* Search, sort, and filter component */}
          <SearchSortFilter
            filterOptions={filterOptions}
            updateSearch={setSearch}
            updateSort={setSortCriteria}
            updateFilter={setFilterCriteria}
            numberOfTopics={filteredTopics.length}
          />
          {/* Conditional rendering based on loading state */}
          {/* If loading, display loader layout, If not loading, display topics grid */}
          {loading ? <LoaderLayout /> : <TopicsGrid topics={filteredTopics} />}
        </LayoutContainer>
      </section>
    </>
  );
}
