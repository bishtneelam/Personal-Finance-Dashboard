import { CATEGORIES } from "../../../data/categories";
import styles from "../styles/EditProfile.module.css";

export function CategoryBudgetAllocation({ handleCategoryChange }) {
    return(<div className={styles.section}>
        <div className={styles.sectionTitle}>Category Budget Allocation</div>
        <p className={styles.helperText} style={{ marginBottom: "1.5rem" }}>
            Distribute your monthly budget across different spending categories
        </p>

        <div className={styles.gridLayout}>
            {Object.entries(CATEGORIES).map(([key, category]) => {
                const Icon = category.icon;
                return (
                    <div key={key} className={styles.categoryRow}>
                        <div
                            className={styles.icon}
                            style={{ backgroundColor: category.color }}
                        >
                            <Icon size={20} color={"white"} />
                        </div>
                        <div className={styles.categoryAmountContainer}>
                            <p>{category.name}</p>
                            <input
                                value={""}
                                onChange={(e) =>
                                    handleCategoryChange(
                                        key,
                                        e.target.value.replace(/\D/g, "")
                                    )
                                }
                                placeholder="0"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    </div>)
}