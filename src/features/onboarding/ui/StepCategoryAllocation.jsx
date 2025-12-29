import { InputField } from './InputField';
import styles from '../styles/Onboarding.module.css';
import { CATEGORIES } from '../constants/categories';
export function StepCategoryAllocation(
  { formData, 
    onUpdate,
    totalAllocated,
    remainingAmount,
    allocationStatus,
   }) {
  const handleCategoryChange = (categoryId, value) => {
    onUpdate({
      categories: {
        ...formData.categories,
        [categoryId]: {
          ...formData.categories[categoryId],
          amount: value
        }
      }
    });
  };

  return (
    <div>
      <h2 className={styles.stepTitle}>Category Budget Allocation</h2>
      <div className={styles.budgetTile}>
        <span>Monthly Budget:</span>
        <span>{formData.monthlyBudget}</span>
      </div>
      
      <div className={styles.categoryContainer}>
        {CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className={styles.categoryRow}>
              <div className={styles.categoryLabel}>
                <div className={styles.icon} style={{backgroundColor: category.color}}>
                  <Icon size={20} color={"white"} />
                </div>
                <span>{category.name}</span>
              </div>

              <InputField
                type="number"
                value={formData.categories[category.id]?.amount || ''}
                onChange={(e) =>
                  handleCategoryChange(category.id, e.target.value)
                }
                placeholder="0"
              />
            </div>
          );
        })}
      </div>

      <div className={styles.budgetSummary}>
        <div>
          <span>Total Budget</span>
          <strong>₹{formData.monthlyBudget}</strong>
        </div>

        <div>
          <span>Allocated</span>
          <strong>₹{totalAllocated}</strong>
        </div>

        <div
          className={`${styles.remaining} ${styles[allocationStatus]}`}
        >
          <span>
            {allocationStatus === 'over'
              ? 'Over by'
              : 'Remaining'}
          </span>
          <strong>₹{Math.abs(remainingAmount)}</strong>
        </div>
      </div>
    </div>
  );
}