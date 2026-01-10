import styles from "../styles/Onboarding.module.css";
import { CATEGORIES } from "../../../data/categories";
export function StepCategoryAllocation({
  formData,
  onUpdate,
  totalAllocated,
  remainingAmount,
  allocationStatus,
  mode,
}) {
  const handleCategoryChange = (categoryId, value) => {
    onUpdate({
      categories: {
        ...formData.categories,
        [categoryId]: {
          ...formData.categories[categoryId],
          amount: value,
        },
      },
    });
  };

  // Calculate allocation percentage for visual feedback
  const getPercentage = (amount) => {
    if (!formData.monthlyBudget || !amount) return 0;
    return Math.min((parseInt(amount) / parseInt(formData.monthlyBudget)) * 100, 100);
  };

  return (
    <div className={`${mode === "edit" ? styles.section : ""}`}>
      <h2 className={styles.stepTitle}>Category Budget Allocation</h2>
      <p className={styles.stepSubtitle}>
        Distribute your monthly budget across different spending categories
      </p>

      {/* Budget Overview Card */}
      <div className={styles.allocationOverview}>
        <div className={styles.overviewItem}>
          <span className={styles.overviewLabel}>Total Budget</span>
          <span className={styles.overviewValue}>₹{formData.monthlyBudget?.toLocaleString() || 0}</span>
        </div>
        <div className={styles.overviewDivider} />
        <div className={styles.overviewItem}>
          <span className={styles.overviewLabel}>Allocated</span>
          <span className={styles.overviewValueAllocated}>₹{totalAllocated?.toLocaleString() || 0}</span>
        </div>
        <div className={styles.overviewDivider} />
        <div className={styles.overviewItem}>
          <span className={styles.overviewLabel}>{allocationStatus === "over" ? "Over by" : "Remaining"}</span>
          <span className={`${styles.overviewValueRemaining} ${styles[allocationStatus]}`}>
            ₹{Math.abs(remainingAmount)?.toLocaleString() || 0}
          </span>
        </div>
      </div>

      {/* Category List */}
      <div className={styles.categoryList}>
        {Object.entries(CATEGORIES).map(([key, category]) => {
          const Icon = category.icon;
          const amount = formData.categories[key]?.amount || "";
          const percentage = getPercentage(amount);
          
          return (
            <div key={key} className={styles.categoryCard}>
              <div className={styles.categoryInfo}>
                <div
                  className={styles.categoryIcon}
                  style={{ 
                    backgroundColor: `${category.color}15`,
                    color: category.color 
                  }}
                >
                  <Icon size={18} />
                </div>
                <span className={styles.categoryName}>{category.name}</span>
              </div>
              
              <div className={styles.categoryInputWrapper}>
                <span className={styles.currencySymbol}>₹</span>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => handleCategoryChange(key, e.target.value.replace(/\D/g, ""))}
                  placeholder="0"
                  className={styles.categoryInput}
                />
              </div>
              
              {/* Mini progress indicator */}
              {amount && (
                <div className={styles.categoryProgress}>
                  <div 
                    className={styles.categoryProgressFill}
                    style={{ 
                      width: `${percentage}%`,
                      backgroundColor: category.color 
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Budget Summary Footer */}
      <div className={styles.allocationFooter} style={{position: mode === "edit" ? "static" : undefined}}>
        <div className={styles.allocationBar}>
          <div 
            className={`${styles.allocationBarFill} ${styles[allocationStatus]}`}
            style={{ 
              width: `${Math.min((totalAllocated / formData.monthlyBudget) * 100, 100)}%` 
            }}
          />
        </div>
        <div className={styles.allocationStatus}>
          <span>{Math.round((totalAllocated / formData.monthlyBudget) * 100) || 0}% allocated</span>
          {allocationStatus === "balanced" && <span className={styles.statusBadge}>✓ Balanced</span>}
          {allocationStatus === "over" && <span className={styles.statusBadgeOver}>Over budget</span>}
        </div>
      </div>
    </div>
  );
}
