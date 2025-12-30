import { useAddTransactionController } from './hooks/useAddTransactionController';
import styles from './styles/AddTransaction.module.css';
import { CategorySelector } from './ui/CategorySelector';
import { TransactionTypeSelector } from './ui/TransactionTypeSelector';

export default function AddTransaction() {
    const {
        transactionType,
        selectedCategory,
        setTransactionType,
        setSelectedCategory,
    } = useAddTransactionController();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.header}>Add Transaction</h1>
                <p className={styles.subtitle}>Track your income and expenses</p>

                <section className={styles.section}>
                    <TransactionTypeSelector transactionType={transactionType} setTransactionType={setTransactionType} />
                </section>

                {
                    transactionType === "debit" &&
                    <section className={styles.section}>
                        <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                    </section>
                }
            </div>
        </div>
    )
}