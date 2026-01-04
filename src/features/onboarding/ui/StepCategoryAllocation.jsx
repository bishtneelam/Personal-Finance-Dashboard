import { InputField } from "./InputField";
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

  return (
    <div className={`${mode === "edit" ? styles.section : ""}`}>
      <h2 className={styles.stepTitle}>Category Budget Allocation</h2>
      <p className={styles.helperText}>
        Distribute your monthly budget across different spending categories
      </p>

      <div className={styles.gridLayout}>
        {Object.entries(CATEGORIES).map(([key, category]) => {
          const Icon = category.icon;
          return (
            <div key={key} className={styles.categoryRow}>
              <div className={styles.categoryLabel}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: category.color }}
                >
                  <Icon size={20} color={"white"} />
                </div>
                <span>{category.name}</span>
                <InputField
                  value={formData.categories[key]?.amount || ""}
                  onChange={(e) => handleCategoryChange(key, e.target.value.replace(/\D/g,""))}
                  placeholder="0"
                  noMargin
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Budget summary with all info */}
      <div className={styles.budgetSummary} style={{position: mode === "edit" ? "static" : undefined}}>
        <div>
          <span>Total Budget</span>
          <strong>₹{formData.monthlyBudget}</strong>
        </div>

        <div>
          <span>Allocated</span>
          <strong>₹{totalAllocated}</strong>
        </div>

        <div className={`${styles.remaining} ${styles[allocationStatus]}`}>
          <span>{allocationStatus === "over" ? "Over by" : "Remaining"}</span>
          <strong>₹{Math.abs(remainingAmount)}</strong>
        </div>
      </div>
    </div>
  );
}
