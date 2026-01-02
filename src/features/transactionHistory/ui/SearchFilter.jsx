import { Filter, Search } from "lucide-react";
import styles from "../styles/TransactionHistory.module.css";
import { useSearchFilter } from "../hooks/useSearchFilter";
export function SearchFilter() {
  const { searchQuery, showFilters, setSearchQuery, handleFilterClick } =
    useSearchFilter();
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
      {
        showFilters && (
            <div classname={styles.filterPanel}>
                <div className={styles.filterSection}>
                    <div className={styles.filterSectionHeader}>

                    </div>
                </div>
            </div>
        )
      }
    </>
  );
}
