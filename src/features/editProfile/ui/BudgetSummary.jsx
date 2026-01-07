import styles from "../styles/EditProfile.module.css";
export function BudgetSummary() {
    return(<div className={styles.budgetSummary}>
        <div className={styles.summaryItem}>
            <div className={styles.summaryLabel}>Total Budget</div>
            <div className={styles.summaryValue}>₹0</div>
        </div>
        <div className={styles.summaryItem}>
            <div className={styles.summaryLabel}>Allocated</div>
            <div className={styles.summaryValue}>₹0</div>
        </div>
        <div className={styles.summaryItem}>
            <div className={styles.summaryLabel}>Remaining</div>
            <div className={`${styles.summaryValue}  ${styles.remaining}`}>
                ₹0
            </div>
        </div>
    </div>)
}