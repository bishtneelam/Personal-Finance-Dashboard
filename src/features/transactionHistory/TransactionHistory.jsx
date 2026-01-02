import { SUMMARYDATA } from './data/SummaryData';
import { useTransactionHistory } from './hooks/useTransactionHistory';
import styles from './styles/TransactionHistory.module.css';
import '../../index.css';
import { DateHeader } from './ui/DateHeader';
import { SummaryCard } from './ui/SummaryCard';
import { TransactionCard } from './ui/TransactionCard';
export default function TransactionHistory() {
    const { groupedData} = useTransactionHistory();
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.sectionHeader}>Transaction History</h1>
                <p className={styles.subtitle}>View all your transactions</p>

                <div className={styles.sections}>
                    <SummaryCard summaryData={SUMMARYDATA} />
                </div>

                <div className={`${styles.sections} ${styles.transactionHeight} scrollable`}>
                    {
                        groupedData.map(group => (
                            <div key={group.dateKey}>
                                <DateHeader date={group.displayDate} />
                                {
                                    group.transactions.map(tx => 
                                        <TransactionCard key={tx.id} transaction={tx} />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}