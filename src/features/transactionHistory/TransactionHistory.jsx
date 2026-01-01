import { SUMMARYDATA } from './data/SummaryData';
import styles from './styles/TransactionHistory.module.css';
import { SummaryCard } from './ui/SummaryCard';
export default function TransactionHistory() {
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.sectionHeader}>Transaction History</h1>
                <p className={styles.subtitle}>View all your transactions</p>

                <div className={styles.sections}>
                    <SummaryCard summaryData={SUMMARYDATA} />
                </div>
            </div>
        </div>
    )
}