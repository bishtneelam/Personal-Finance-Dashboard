import { ArrowDownCircle, ArrowUpCircle, Filter, Search, X } from "lucide-react";
import styles from "../styles/TransactionHistory.module.css";
import { useSearchFilter } from "../hooks/useSearchFilter";
import { CATEGORIES } from "../../../data/categories";
export function SearchFilter() {
  const {
    searchQuery,
    showFilters,
    filterType,
    selectedCategories,
    activeFiltersCount,
    setSearchQuery,
    handleFilterClick,
    setFilterType,
    toggleCategories,
    clearCategories,
    clearAllFilters,
  } = useSearchFilter();
  console.log("Active", activeFiltersCount)
  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <Search size={20} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search transactions..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          className={`${styles.filterButton} ${
            showFilters && styles.filterButtonActive
          }`}
          onClick={handleFilterClick}
        >
          <Filter size={20} className={styles.filterIcon} />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className={styles.filtersPanel}>
          <div className={styles.filterSection}>
            <p className={styles.header}>Transaction Type</p>
            {filterType !== "all" && (
              <button
                className={styles.clearButton}
                onClick={() => setFilterType("all")}
              >
                Clear
              </button>
            )}
          </div>
          <div className={styles.filterHeader}>
            <button
              className={`${styles.typeButton} ${
                filterType === "all" ? styles.filterButtonActive : ""
              }`}
              onClick={() => setFilterType("all")}
            >
              All
            </button>
            <button
              className={`${styles.typeButton} ${
                filterType === "credit" ? styles.creditBtnActive : {}
              }`}
              onClick={() => setFilterType("credit")}
            >
              <ArrowUpCircle size={16} /> Credit Only
            </button>
            <button
              className={`${styles.typeButton} ${
                filterType === "debit" ? styles.debitBtnActive : {}
              }`}
              onClick={() => setFilterType("debit")}
            >
              <ArrowDownCircle size={16} /> Debit Only
            </button>
          </div>

          <div className={styles.filterSection}>
            <p className={styles.header}>Categories</p>
            {selectedCategories.length > 0 && (
              <button className={styles.clearButton} onClick={clearCategories}>
                Clear
              </button>
            )}
          </div>

          <div className={styles.categoryFilters}>
            {Object.entries(CATEGORIES).map(([key, value]) => {
              const CategoryIcon = value.icon;
              return (
                <button
                  key={key}
                  className={`${styles.categorySection}
                  ${
                    selectedCategories.includes(key)
                      ? styles.categoryFilterButtonActive
                      : ""
                  }`}
                  style={
                    selectedCategories.includes(key)
                      ? {
                          borderColor: value.color,
                          backgroundColor: `${value.color}15`,
                        }
                      : {}
                  }
                  onClick={() => toggleCategories(key)}
                >
                  <div
                    className={styles.categoryIcon}
                    style={{ color: "#fff", backgroundColor: value.color }}
                  >
                    <CategoryIcon size={20} />
                  </div>
                  <span>{value.name}</span>
                </button>
              );
            })}
          </div>

          {activeFiltersCount > 0 && <button className={styles.clearAllFilters} onClick={clearAllFilters}>
            <X size={16} />
            <span>{`Clear All Filters (${activeFiltersCount})`}</span>
            </button>}
        </div>
      )}
    </>
  );
}
