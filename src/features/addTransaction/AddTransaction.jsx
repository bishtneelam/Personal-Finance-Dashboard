import { useAddTransactionController } from "./hooks/useAddTransactionController";
import styles from "./styles/AddTransaction.module.css";
import { CategorySelector } from "./ui/CategorySelector";
import { TransactionForm } from "./ui/TransactionForm";
import { TransactionTypeSelector } from "./ui/TransactionTypeSelector";

export default function AddTransaction() {
  const {
    transactionType,
    selectedCategory,
    transaction,
    setTransactionType,
    setSelectedCategory,
    updateTransaction,
  } = useAddTransactionController();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.header}>Add Transaction</h1>
        <p className={styles.subtitle}>Track your income and expenses</p>

        <section className={styles.section}>
          <TransactionTypeSelector
            transactionType={transactionType}
            setTransactionType={setTransactionType}
          />
        </section>

        {/* Category Selection */}
        {transactionType === "debit" && (
          <section className={styles.section}>
            <CategorySelector
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </section>
        )}

        <section className={styles.section}>
          <TransactionForm
            transaction={transaction}
            updateTransaction={updateTransaction}
          />
        </section>

        {/* Submit Button */}
        <button
          type="submit"
          className={`${styles.submitCta} ${
            transactionType === "credit" ? styles.creditCta : styles.debitCta
          }`}
          onClick={{}}
        >
          {`Add ${transactionType === "credit" ? "Credit" : "Debit"}`}
        </button>
      </div>
    </div>
  );
}
