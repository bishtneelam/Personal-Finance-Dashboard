import styles from "../styles/TransactionHistory.module.css";
export function SummaryCard({ summaryData }) {
  return (
    <div className={styles.summaryGrid}>
      {summaryData.map((item) => {
        const CategoryIcon = item.icon;
        return (
          <div
            key={item.id}
            className={`${styles.summaryContainer} ${item.type === "balance"
                ? styles.balanceBg
                : item.type === "credit"
                  ? styles.creditBg
                  : styles.debitBg
              }`}
          >
            <div className={styles.summaryHeader}>
              <p className={`${styles.summaryTitle} ${item.type === "balance"
                ? styles.balanceLabel
                : item.type === "credit"
                  ? styles.creditLabel
                  : styles.debitLabel
              }`}>{item.title}</p>
              {CategoryIcon && (
                <div className={styles.categoryIcon} style={{background: item.type === "balance" ? "#bfdbfe":undefined}}>
                  <CategoryIcon
                    size={24}
                    color={
                      item.type === "credit"
                        ? "#0bb980"
                        : item.type === "debit"
                          ? "#ef4345"
                          : "#2762ea"
                    }
                  />{" "}
                </div>
              )}
            </div>
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
        );
      })}
    </div>
  );
}
