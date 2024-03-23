import DropDown from "../dropDownMenu/dropDown";
import IconicSearch from "../iconic-search/iconicSearch";
import styles from "./searchSortFilter.module.css";

const sortOptions = [
  { value: "DEFAULT", name: "DEFAULT" },
  { value: "TOPIC", name: "TOPIC" },
  { value: "AUTHOR", name: "AUTHOR" }
];


const SearchSortFilter = ({ filterOptions, updateSearch, updateSort, updateFilter, searchResultText }) => {

  const handleSearchChange = (event) => {
    updateSearch(event.target.value);
  };

  const handleSortChange = (event) => {
    updateSort(event.target.value);
  };

  const handleFilterChange = (event) => {
    updateFilter(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchField}>
        <IconicSearch
          name={"search-outline"}
          classIcon={"icon"}
          id={"searchInput"}
          type={"text"}
          placeholder={"Search the website..."}
          onChange={handleSearchChange}
        />
        <div className={styles.drop}>
          <DropDown
            mainClass={"sortDropDown"}
            label={"Sort by:"}
            htmlFor={"sort"}
            id={"sort"}
            name={"sort"}
            selectClass={"sortSelect"}
            options={sortOptions}
            onChange={handleSortChange}
          />
          <DropDown
            mainClass={"filterDropDown"}
            label={"Filter by:"}
            htmlFor={"filter"}
            id={"filter"}
            name={"filter"}
            selectClass={"filterSelect"}
            options={filterOptions}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <h2 className={styles.searchMessage}>
        {searchResultText}
      </h2>
    </div>
  );
};

export default SearchSortFilter;
