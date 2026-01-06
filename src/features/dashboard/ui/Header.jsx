import { Calendar } from "lucide-react";
import styles from "../styles/FinanceDashboard.module.css";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <h1 className={styles.headerName}>Hi Neelam!</h1>
        <div className={styles.date}>
          <div className={styles.calendarIcon}>
            <Calendar />
          </div>
          <span className={styles.dateText}>
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </span>
        </div>
      </div>
      <div className={styles.currentBalance}>
        <p>Net Balance</p>
        <p className={styles.headerAmount}>₹20250</p>
      </div>
    </header>
  );
}
