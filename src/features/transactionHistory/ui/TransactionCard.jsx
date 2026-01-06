import styles from "../styles/TransactionHistory.module.css";
export function TransactionCard({ transaction, showDivider }) {
  const {
    icon,
    iconColor,
    description,
    categoryName,
    amountText,
    amountColor,
  } = transaction;
  const CategoryIcon = icon;
  return (
    <>
      <div className={styles.transactionContainer}>
        <div className={styles.iconContainer}>
          <div
            className={styles.icon}
            style={{ backgroundColor: `${iconColor}15` }}
          >
            <CategoryIcon size={26} color={iconColor} />
          </div>
          <div>
            <p className={styles.description}>{description}</p>
            <p className={styles.categoryName}>{categoryName}</p>
          </div>
        </div>
        <p style={{ color: amountColor }} className={styles.amountText}>
          {amountText}
        </p>
      </div>
      {showDivider && <div className={styles.transactionDivider} />}
    </>
  );
}
