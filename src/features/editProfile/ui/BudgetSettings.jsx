import styles from "../styles/EditProfile.module.css";
export function BudgetSettings() {
    return (<div className={styles.section}>
        <div className={styles.sectionTitle}>Budget Settings</div>
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label>
                Monthly Budget (₹) <span className={styles.required}>*</span>
            </label>
            <input type="text" placeholder="50000" value="50000" />
            <div className={styles.budgetInfo}>
                💡 Set your total monthly budget to track expenses effectively
            </div>
        </div>
    </div>)
}