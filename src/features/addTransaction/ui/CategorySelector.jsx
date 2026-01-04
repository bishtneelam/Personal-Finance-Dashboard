import { CATEGORIES } from "../../../data/categories";
import styles from "../styles/AddTransaction.module.css";
export function CategorySelector({ selectedCategory, setSelectedCategory }) {
    return (
        <div className={`${styles.categoryContainer} scrollable`}>
            <label className={styles.sectionLabel}>
                Category <span className={styles.required}>*</span>
            </label>
            <section className={styles.categoryGrid}>
                {Object.entries(CATEGORIES).map(([key,category]) => {
                    const CategoryIcon = category.icon
                    return (
                        <button
                            key={key}
                            className={[styles.categoryButton, category.id === selectedCategory && styles.categoryButtonActive].filter(Boolean).join(' ')}
                            style={{ ...(key === selectedCategory && { borderColor: category.color, backgroundColor: `${category.color}15` }) }}
                            onClick={() => setSelectedCategory(key)} >
                            <div className={[styles.categoryIcon]} style={{ backgroundColor: category.color }}>
                                <CategoryIcon size={24} />
                            </div>
                            <p>{category.name}</p>
                        </button>
                    )
                })}
            </section>
        </div>
    )
}