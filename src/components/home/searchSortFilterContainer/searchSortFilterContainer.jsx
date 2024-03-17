import styles from "./searchSortFilter.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchField}>
        <ion-icon name="search-outline" class={styles.icon}></ion-icon>
        <input
          id="searchInput"
          type="text"
          placeholder="Search the website..."
        />
        <div className={styles.drop}>
          <div className={`${styles.dropDown} ${styles.sortDropDown}`}>
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" name="sort" className={styles.sortSelect}>
              <option value="DEFAULT">Default</option>
              <option value="TOPIC">Topic</option>
              <option value="AUTHOR">Author</option>
            </select>
          </div>
          <div className={`${styles.dropDown} ${styles.filterDropDown}`}>
            <label htmlFor="filter">Filter by:</label>
            <select id="filter" name="filter" className={styles.filterSelect}>
              <option value="ALL">ALL</option>
            </select>
          </div>
        </div>
      </div>
      <h2 id={styles.searchMessage}>
        "<span id="numberTopics">24</span>" Web Topics Found
      </h2>
    </div>
  );
};

export default Search;
