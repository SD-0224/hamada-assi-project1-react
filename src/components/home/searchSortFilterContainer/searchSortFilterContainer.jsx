import DropDown from "../dropDownMenu/dropDown";
import IconicSearch from "../iconic-search/iconicSearch";
import styles from "./searchSortFilter.module.css";

// Options for sorting
const sortOptions = [
  { value: "DEFAULT", name: "DEFAULT" },
  { value: "TOPIC", name: "TOPIC" },
  { value: "AUTHOR", name: "AUTHOR" },
];
// Component for Search, Sort, and Filter functionality
const SearchSortFilter = ({
  filterOptions,
  updateSearch,
  updateSort,
  updateFilter,
  numberOfTopics,
}) => {
  // // Text to display the number of topics found
  const text =
    numberOfTopics < 0
      ? `No Web Topics Found`
      : `"${numberOfTopics}" Web Topics Found`;

  return (
    <div className={styles.searchContainer}>
      {/* Search field */}
      <div className={styles.searchField}>
        {/* IconicSearch component for search functionality */}
        <IconicSearch
          name={"search-outline"}
          classIcon={"icon"}
          type={"text"}
          placeholder={"Search the website..."}
          onChange={(event) => {
            updateSearch(event.target.value);
          }}
        />
        {/* Dropdowns for sorting and filtering */}
        <div className={styles.drop}>
          {/* DropDown component for sorting */}
          <DropDown
            mainClass={"HorizontalBorder"}
            label={"Sort by:"}
            name={"sort"}
            selectClass={"DropdownRightBorderStyles"}
            options={sortOptions}
            onChange={(event) => {
              updateSort(event.target.value);
            }}
          />
          {/* DropDown component for filtering */}
          <DropDown
            mainClass={"HorizontalBorderRadius"}
            label={"Filter by:"}
            name={"filter"}
            selectClass={"DropdownLeftBorderStyles"}
            options={filterOptions}
            onChange={(event) => {
              updateFilter(event.target.value);
            }}
          />
        </div>
      </div>
      {/* Message displaying the number of topics found */}
      <h2 className={styles.searchMessage}>{text}</h2>
    </div>
  );
};

export default SearchSortFilter;
