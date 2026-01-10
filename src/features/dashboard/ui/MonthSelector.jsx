import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import styles from "../styles/FinanceMainLayout.module.css";

export function MonthSelector({
  MONTH_DATA,
  selectedMonth,
  setSelectedMonth,
  isDropdownOpen,
  setIsDropdownOpen,
  handleDropdownToggle,
  handlePrev,
  handleNext,
}) {
  return (
    <div className={styles.section}>
      {/* Label */}
      <div className={styles.monthLabel}>
        <Calendar />
        <span>Select Month:</span>
      </div>

      {/* Dropdown */}
      <div className={styles.dropdown}>
        <button
          className={styles.dropdownTrigger}
          onClick={handleDropdownToggle}
        >
          {selectedMonth}
          {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            {MONTH_DATA.map(({value,label}) => (
              <button
                key={value}
                className={styles.dropdownItem}
                onClick={() => {
                  setSelectedMonth(label);
                  setIsDropdownOpen(false);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}

      <div className={styles.navButtons}>
        <button onClick={handlePrev}>
          <ChevronLeft />
        </button>
        <button onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
