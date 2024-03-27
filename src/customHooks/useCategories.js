import { useEffect, useState } from "react";

export function useCategories(topics) {
    const [categories, setCategories] = useState(null);
    const [categoriesCalculated, setCategoriesCalculated] = useState(false);

    useEffect(() => {
        const getCategories = (topics) => {
            const allCategory = new Set();
            topics?.forEach((elm) => {
                if (!allCategory.has(elm.category)) {
                    allCategory.add(elm.category);
                }
            });
            return ["ALL", ...allCategory];
        };

        if (topics.length > 0 && !categoriesCalculated) {
            // Calculate categories if the topics are available and categories haven't been calculated yet
            setCategories(getCategories(topics).map((cat) => ({ value: cat, name: cat })));
            setCategoriesCalculated(true); // categories have been calculated
        }
    }, [topics, categoriesCalculated]);

    return categories;
}
