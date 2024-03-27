import { useEffect } from "react";

export function useSortTopics(topics, sortCriteria, setSortedTopics) {
    useEffect(() => {
        const sortData = () => {
            if (sortCriteria === "DEFAULT") {
                // Create a new array to avoid mutation
                setSortedTopics([...topics]);
                return;
            }
            // Create a new array to avoid mutation
            const sortedArray = [...topics];
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

        sortData();
    }, [sortCriteria, topics, setSortedTopics]);
}