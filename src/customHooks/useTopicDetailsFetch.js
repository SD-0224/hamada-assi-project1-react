import { useEffect, useState } from "react";

export function useTopicDetailsFetch(topicId) {
    const [topic, setTopic] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://tap-web-1.herokuapp.com/topics/details/${topicId}`
                );
                const topicData = await response.json();
                setTopic(topicData);
            } catch (error) {
                console.error("Something went wrong. Topic details failed to load", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [topicId]);

    return { topic, loading };
}
