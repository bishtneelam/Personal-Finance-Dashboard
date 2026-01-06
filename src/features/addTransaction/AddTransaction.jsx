import { CheckCircle } from "lucide-react";
import { CATEGORIES } from "../../data/categories";
import { useAddTransactionController } from "./hooks/useAddTransactionController";
import styles from "./styles/AddTransaction.module.css";
import { CategorySelector } from "./ui/CategorySelector";
import { TransactionForm } from "./ui/TransactionForm";
import { TransactionTypeSelector } from "./ui/TransactionTypeSelector";

export default function AddTransaction() {
  const {
    transactionType,
    isCategoryModalOpen,
    transaction,
    selectedCategory,
    isFormValid,
    showToast,
    setSelectedCategory,
    setTransactionType,
    updateTransaction,
    onOpen,
    onClose,
    handleSubmit,
  } = useAddTransactionController();
  console.log(selectedCategory)
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
            <label className={styles.sectionLabel}>
              Category <span className={styles.required}>*</span>
            </label>

            <button
              type="button"
              className={styles.categoryField}
              onClick={onOpen}
            >
              <span>
                {selectedCategory && !isCategoryModalOpen
                  ? CATEGORIES[selectedCategory].name
                  : "Select category"}
              </span>
              <span className={styles.chevron}>›</span>
            </button>
          </section>
        )}
        {isCategoryModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h3 className={styles.modalTitle}>Select Category</h3>

              <CategorySelector
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              <button className={styles.modalClose} onClick={onClose}>
                Done
              </button>
            </div>
          </div>
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
          } ${!isFormValid ? styles.disabledCta : ""}`}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          {`Add ${transactionType === "credit" ? "Credit" : "Debit"}`}
        </button>

        {showToast && (
          <div className={styles.toastContainer}>
            <div className={styles.toastIcon}>
              <CheckCircle size={18} />
            </div>
            <span>Transaction added successfully.</span>
          </div>
        )}
      </div>
    </div>
  );
}
