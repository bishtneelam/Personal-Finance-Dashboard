import styles from "../styles/EditProfile.module.css";
export function PersonalInfoSection() {
    return (
        <div className={styles.section}>
            <div className={styles.sectionTitle}>Personal Information</div>
            <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                    <label>
                        Name <span className={styles.required}>*</span>
                    </label>
                    <input type="text" placeholder="Enter your name" value="Neelam" />
                </div>
                <div className={styles.formGroup}>
                    <label>
                        Email <span className={styles.required}>*</span>
                    </label>
                    <input type="email" placeholder="Enter your email" />
                </div>
            </div>
        </div>
    )
}