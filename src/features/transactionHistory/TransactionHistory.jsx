import { SUMMARYDATA } from './data/SummaryData';
import { useTransactionHistory } from './hooks/useTransactionHistory';
import styles from './styles/TransactionHistory.module.css';
import '../../index.css';
import { DateHeader } from './ui/DateHeader';
import { SummaryCard } from './ui/SummaryCard';
import { TransactionCard } from './ui/TransactionCard';
import { SearchFilter } from './ui/SearchFilter';
import { useSearchFilter } from './hooks/useSearchFilter';
import { DEMO_TRANSACTIONS } from './data/transactionData';
export default function TransactionHistory() {
    const searchFilter = useSearchFilter();
    const { groupedData} = useTransactionHistory({
        transactions: DEMO_TRANSACTIONS,
        searchQuery: searchFilter.searchQuery,
        filterType: searchFilter.filterType,
        selectedCategories: searchFilter.selectedCategories,
    });
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.sectionHeader}>Transaction History</h1>
                <p className={styles.subtitle}>View all your transactions</p>

                <div className={styles.sections}>
                    <SummaryCard summaryData={SUMMARYDATA} />
                </div>

                {/* Search & Filter */}
                <SearchFilter {...searchFilter}/>

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