import { useEffect } from "react";

export function useFilterTopics(sortedTopics, filterCriteria, setFilteredTopics) {
    useEffect(() => {
        const filterData = () => {
            const filteredArray = [...sortedTopics];
            const filtered =
                filterCriteria === "ALL"
                    ? filteredArray
                    : filteredArray.filter((elm) => elm.category === filterCriteria);
            setFilteredTopics(filtered);
        };

        filterData();
    }, [filterCriteria, sortedTopics, setFilteredTopics]);
}
