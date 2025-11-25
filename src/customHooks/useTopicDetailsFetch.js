import { useEffect, useState } from "react";

export function useTopicDetailsFetch(topicId) {
    const [topic, setTopic] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://692572e382b59600d723ac24.mockapi.io/webTopics/courses/${topicId}`
                );
                const topicData = await response.json();
                setTopic(topicData);
            } catch (error) {
                console.error("Something went wrong. Topic details failed to load", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [topicId]);

    return { topic, loading, error };
}
