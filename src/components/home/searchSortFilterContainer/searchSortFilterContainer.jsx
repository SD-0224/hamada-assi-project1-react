import DropDown from "../dropDownMenu/dropDown";
import IconicSearch from "../iconic-search/iconicSearch";
import styles from "./searchSortFilter.module.css";

const sortOptions = [
  { value: "DEFAULT", name: "DEFAULT" },
  { value: "TOPIC", name: "TOPIC" },
  { value: "AUTHOR", name: "AUTHOR" },
];

const SearchSortFilter = ({
  filterOptions,
  updateSearch,
  updateSort,
  updateFilter,
  numberOfTopics,
}) => {
  const text =
    numberOfTopics < 0
      ? `No Web Topics Found`
      : `"${numberOfTopics}" Web Topics Found`;

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchField}>
        <IconicSearch
          name={"search-outline"}
          classIcon={"icon"}
          type={"text"}
          placeholder={"Search the website..."}
          onChange={(event) => {
            updateSearch(event.target.value);
          }}
        />
        <div className={styles.drop}>
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
      <h2 className={styles.searchMessage}>{text}</h2>
    </div>
  );
};

export default SearchSortFilter;
