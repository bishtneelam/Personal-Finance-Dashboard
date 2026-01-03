import styles from "../styles/TransactionHistory.module.css";
export function SummaryCard({ summaryData }) {
  return (
    <div className={styles.summaryGrid}>
      {summaryData.map((item) => {
        const CategoryIcon = item.icon;
        return (
          <div
            key={item.id}
            className={`${styles.summaryContainer} ${
              item.type === "balance"
                ? styles.balanceBg
                : item.type === "credit"
                ? styles.creditBg
                : styles.debitBg
            }`}
          >
            {CategoryIcon && (
              <div className={styles.categoryIcon}>
                <CategoryIcon
                  size={24}
                  color={
                    item.type === "credit"
                      ? "#0bb980"
                      : item.type === "debit"
                      ? "#ef4345"
                      : "#6b7280"
                  }
                />
              </div>
            )}
            <div>
              <p className={styles.summaryTitle}>{item.title}</p>
              <p
                className={styles.summarySubtitle}
                style={{
                  color:
                    item.type === "credit"
                      ? "#0bb980"
                      : item.type === "debit"
                      ? "#ef4345"
                      : "#6b7280",
                }}
              >{`₹${item.amount}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
