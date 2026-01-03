import { useState } from "react";

export function useSearchFilter() {
    const [showFilters, setShowFilters] = useState(false);
    const [filterType, setFilterType] = useState("all");
    const [selectedCategories, setSelectedCategories] = useState<String[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const activeFiltersCount = (filterType === "all" ? 0 : 1) + selectedCategories.length;

    const handleFilterClick = () => {
        setShowFilters(prev => !prev)
    }
    const toggleCategories = (categoryId: string) => {
        setSelectedCategories(prev => (
            prev.includes(categoryId)
            ? prev.filter(id => id!==categoryId)
            : [...prev, categoryId]
        ))
    }
    const clearCategories = () => {
        setSelectedCategories([]);
    }
    const clearAllFilters = () => {
        clearCategories();
        setFilterType("all")
    }
    return {
        showFilters,
        filterType,
        selectedCategories,
        searchQuery,
        activeFiltersCount,
        setFilterType,
        setSearchQuery,
        handleFilterClick,
        toggleCategories,
        clearCategories,
        clearAllFilters,
    }
}