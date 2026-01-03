import styles from "../styles/TransactionHistory.module.css";
export function DateHeader({date}){
    return <p className={styles.dateHeader}>{date}</p>
}