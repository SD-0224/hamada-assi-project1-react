import DropDown from "../dropDownMenu/dropDown";
import IconicSearch from "../iconic-search/iconicSearch";
import styles from "./searchSortFilter.module.css";

const SearchSortFilter = ({ topics }) => {
  // get categories to setup the filter drop down
  const allCategory = new Set();
  topics.forEach(elm => {
        if (!allCategory.has(elm.category)) {
            allCategory.add(elm.category);
        }
    });
    
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchField}>
        <IconicSearch name={"search-outline"} classIcon={'icon'} id={'searchInput'} type={'text'} placeholder={"Search the website..."} />
        {/* <ion-icon name="search-outline" class={styles.icon}></ion-icon>
        <input
          id="searchInput"
          type="text"
          placeholder="Search the website..."
        /> */}
        <div className={styles.drop}>
          <DropDown
            mainClass={"sortDropDown"}
            label={"Sort by:"}
            htmlFor={"sort"}
            id={"sort"}
            name={"sort"}
            selectClass={"sortSelect"}
            options={["DEFAULT", "TOPIC", "AUTHOR"]}
          />
          <DropDown
            mainClass={"filterDropDown"}
            label={"Filter by:"}
            htmlFor={"filter"}
            id={"filter"}
            name={"filter"}
            selectClass={"filterSelect"}
            options={["ALL", ...allCategory]}
          />
        </div>
      </div>
      <h2 className={styles.searchMessage}>
        "<span id="numberTopics">24</span>" Web Topics Found
      </h2>
    </div>
  );
};

export default SearchSortFilter;