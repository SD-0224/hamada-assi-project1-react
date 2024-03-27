import { useEffect, useState } from "react";

export function useTopicsFetch(search) {
    const [topics, setTopics] = useState([]);
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

        const debounce = setTimeout(fetchData, 300);
        return () => clearTimeout(debounce);
    }, [search]);

    return { topics, loading };
}