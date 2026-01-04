import styles from "../styles/FinanceDashboard.module.css";
import { Header } from "./Header";
export function FinanceDashboard({ children }) {
  return (
    <div className={styles.appLayout}>
      <aside className={styles.sidebar}>
        Sidebar
      </aside>
      <div className={styles.mainContent}>
        <Header />
        <main className={styles.pageContent}>{children}</main>
      </div>
    </div>
  );
}
