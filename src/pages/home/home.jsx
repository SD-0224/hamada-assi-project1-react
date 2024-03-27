import React, { useEffect, useMemo, useState } from "react";
import styles from "./home.module.css";
import { LayoutContainer } from "../../components/shared/container/container";
import TopicsGrid from "../../components/home/topicsGrid/topicsGrid";
import SearchSortFilter from "../../components/home/searchSortFilterContainer/searchSortFilterContainer";
import LoaderLayout from "../../loader/loaderLayout";

export default function Home() {
  const [topics, setTopics] = useState([]);
  const [search, setSearch] = useState("");
  const [sortCriteria, setSortCriteria] = useState("DEFAULT");
  const [filterCriteria, setFilterCriteria] = useState("ALL");
  const [sortedTopics, setSortedTopics] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://tap-web-1.herokuapp.com/topics/list?phrase=${search}`;
    // Fetch user data based on userId
    const fetchData = async () => {
      try {
        // Set loading to true when fetching data
        setLoading(true);
        const response = await fetch(apiUrl);
        const courses = await response.json();
        setTopics(courses);
        setSortedTopics(courses);
      } catch (error) {
        console.error(
          "Something went wrong. Web topics failed to load.",
          error
        );
      } finally {
        // Set loading to false after fetching data
        setLoading(false);
      }
    };
    const debounce = (func, delay) => {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    };

    debounce(fetchData(), 300);

    // return () => {
    //   setTopics(null); // Reset setTopics to null
    // };
  }, [search]);

  const getCategories = (topics) => {
    // get categories to setup the filter drop down
    const allCategory = new Set();
    topics?.forEach((elm) => {
      if (!allCategory.has(elm.category)) {
        allCategory.add(elm.category);
      }
    });
    return ["ALL", ...allCategory];
  };
  const filterOptions = useMemo(
    () => getCategories(topics).map((cat) => ({ value: cat, name: cat })),
    [topics]
  );

  useEffect(() => {
    const sortData = (sortCriteria) => {
      if (sortCriteria === "DEFAULT") {
        setSortedTopics([...topics]); // Create a new array to avoid mutation
        return;
      }

      const sortedArray = [...sortedTopics]; // Create a new array to avoid mutation
      sortedArray.sort((a, b) => {
        switch (sortCriteria) {
          case "TOPIC":
            return a.topic.localeCompare(b.topic);
          case "AUTHOR":
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
      setSortedTopics(sortedArray);
    };

    sortData(sortCriteria);
  }, [sortCriteria, topics]);

  useEffect(() => {
    const filterData = (filterCriteria) => {
      const filteredArray = [...sortedTopics];
      const filtered =
        filterCriteria === "ALL"
          ? filteredArray
          : filteredArray.filter((elm) => elm.category === filterCriteria);
      setFilteredTopics(filtered);
    };

    filterData(filterCriteria);
  }, [filterCriteria, sortedTopics]);

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
            [filteredTopics]
          )}
        </LayoutContainer>
      </section>
    </>
  );
}
