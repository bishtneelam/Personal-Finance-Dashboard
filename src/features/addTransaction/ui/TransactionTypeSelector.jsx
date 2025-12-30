import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import styles from '../styles/AddTransaction.module.css';
export function TransactionTypeSelector({transactionType, setTransactionType}) {
    return (
        <div>
            <label className={styles.sectionLabel}>Transaction type</label>
            <div className={styles.typeSelector}>
                <button
                    type='button'
                    className={[
                        styles.typeButton,
                        transactionType === 'credit' && styles.typeButtonCredit,
                        transactionType === 'credit' && styles.typeButtonActive
                    ].filter(Boolean).join(' ')}
                    onClick={() => setTransactionType("credit")}>
                    <section className={styles.typeContainer}>
                        <ArrowUpCircle size={24} />
                        <div className={styles.typeText}>
                            <p className={styles.typeTitle}>Credit</p>
                            <p className={styles.typeSubtitle}>Money In</p>
                        </div>
                    </section>
                
                </button>

                <button
                    type='button'
                    className={[
                        styles.typeButton,
                        transactionType === 'debit' && styles.typeButtonDebit,
                        transactionType === 'debit' && styles.typeButtonActive
                    ].filter(Boolean).join(' ')}
                    onClick={() => setTransactionType("debit")}>
                    <section className={styles.typeContainer}>
                        <ArrowDownCircle size={24} />
                        <div className={styles.typeText}>
                            <p className={styles.typeTitle}>Debit</p>
                            <p className={styles.typeSubtitle}>Money Out</p>
                        </div>
                    </section>
                </button>
            </div>
        </div>
    )
}