import { Calendar } from "lucide-react";
import styles from "../styles/AddTransaction.module.css";
export function TransactionForm({ transaction, updateTransaction }) {
  return (
    <div className={styles.formContainer}>
      <section className={styles.section}>
        <label className={styles.formLabel} htmlFor="amount">
          Amount <span className={styles.required}>*</span>
        </label>
        <input
          id={"amount"}
          placeholder="0"
          value={transaction.amount}
          onChange={(e) => updateTransaction("amount", e.target.value.replace(/\D/g,""))}
          className={`${styles.formInput} ${styles.amountInput}`}
        />
      </section>

      <section className={styles.section}>
        <label className={styles.formLabel} htmlFor="date">
          Date <span className={styles.required}>*</span>
        </label>
        <div className={styles.dateInputWrapper}>
          <Calendar size={20} className={styles.dateIcon} />
          <input
            type="date"
            className={`${styles.formInput} ${styles.date}`}
            id="date"
            value={transaction.date}
            onChange={(e) => updateTransaction("date", e.target.value)}
          />
        </div>
      </section>

      <section className={styles.section}>
        <label className={styles.formLabel} htmlFor="desc">
          Description <span className={styles.required}>*</span>
        </label>
        <textarea
          value={transaction.description}
          placeholder="Add a note about this transaction"
          rows="3"
          onChange={(e) => updateTransaction("description", e.target.value)}
          className={styles.textarea}
        />
      </section>
    </div>
  );
}
