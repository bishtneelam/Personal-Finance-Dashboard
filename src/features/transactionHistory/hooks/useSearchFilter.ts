import { useState } from "react";

export function useSearchFilter() {
    const [showFilters, setShowFilters] = useState(false);
    const [type, setType] = useState("all");
    const [category, setCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const handleFilterClick = () => {
        setShowFilters(prev => !prev)
    }
    return {
        showFilters,
        type,
        category,
        searchQuery,
        setSearchQuery,
        handleFilterClick
    }
}