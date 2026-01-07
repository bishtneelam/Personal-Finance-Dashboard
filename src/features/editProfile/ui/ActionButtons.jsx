import styles from "../styles/EditProfile.module.css";
export function ActionButtons() {
    return (
        <div className={styles.buttonGroup}>
            <button className={styles.buttonReset}>Reset Changes</button>
            <button className={styles.buttonSave}>Save Changes</button>
        </div>
    )
}